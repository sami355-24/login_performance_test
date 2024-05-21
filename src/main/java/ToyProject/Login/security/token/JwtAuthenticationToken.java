package ToyProject.Login.security.token;

import org.springframework.security.authentication.AbstractAuthenticationToken;

public class JwtAuthenticationToken extends AbstractAuthenticationToken {

    private String authToken;

    public JwtAuthenticationToken(String authToken) {
        super(null);
        this.authToken = authToken;
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return authToken;
    }
}
