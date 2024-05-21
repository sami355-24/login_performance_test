package ToyProject.Login.security.jwtUtil;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class JwtUtil {

    @Value("${jwt.secret_key}")
    private String SECRET_KEY;

    @Value("${jwt.access_token_validity}")
    private int ACCESS_TOKEN_VALIDITY;

    //액세스 토큰 생성
    public String generateAccessToken(String memberEmail, String role) {
        return Jwts.builder()
                .setSubject(memberEmail)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALIDITY))
                .claim("roles", role)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

}
