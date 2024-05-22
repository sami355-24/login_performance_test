package ToyProject.Login.security.jwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.MacAlgorithm;
import jakarta.annotation.PostConstruct;
import java.security.Key;
import java.security.SignatureException;
import java.util.Date;
import javax.crypto.spec.SecretKeySpec;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class JwtUtil {

    @Value("${jwt.secret_key}")
    private String SECRET_KEY;

    @Value("${jwt.access_token_validity}")
    private int ACCESS_TOKEN_VALIDITY;

    private Key key;
    private MacAlgorithm sa;
    private SecretKeySpec secretKeySpec;

    @PostConstruct
    public void initJwtUtil() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        this.key = Keys.hmacShaKeyFor(keyBytes);
        this.sa = SIG.HS256;
        this.secretKeySpec = new SecretKeySpec(keyBytes, sa.getId());
    }

    public String generateAccessToken(String memberEmail, String role) {
        return Jwts.builder()
                .subject(memberEmail)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALIDITY))
                .claim("roles", role)
                .signWith(key)
                .compact();
    }

    public void validateToken(String token) {
        JwtParser jwtParser = Jwts
                .parser()
                .verifyWith(secretKeySpec)
                .build();

        parseToken(token, jwtParser);
    }

    private static void parseToken(String token, JwtParser jwtParser) {
        boolean isValid = true;

        try {
            jwtParser.parse(token);
        } catch (MalformedJwtException e) {
            log.info("형식이 올바르지 않습니다.");
            isValid = false;
        } catch (ExpiredJwtException e) {
            log.info("만료된 토큰입니다.");
            isValid = false;
        } catch (UnsupportedJwtException e) {
            log.info("지원하지 않는 토큰입니다.");
            isValid = false;
        } catch (IllegalArgumentException e) {
            log.info("토큰의 내용이 비어 있습니다.");
            isValid = false;
        }

        if (isValid) {
            throw new BadCredentialsException("토큰 검증에 실패하였습니다.");
        }
    }

}
