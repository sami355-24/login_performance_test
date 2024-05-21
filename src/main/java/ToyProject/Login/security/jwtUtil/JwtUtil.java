package ToyProject.Login.security.jwtUtil;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import java.security.Key;
import java.util.Date;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    @Value("${jwt.secret_key}")
    private String SECRET_KEY;

    @Value("${jwt.access_token_validity}")
    private int ACCESS_TOKEN_VALIDITY;

    private Key key;

    @PostConstruct
    public void initJwtUtil(){
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    //액세스 토큰 생성
    public String generateAccessToken(String memberEmail, String role) {
        return Jwts.builder()
                .subject(memberEmail)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALIDITY))
                .claim("roles", role)
                .signWith(key)
                .compact();
    }

}
