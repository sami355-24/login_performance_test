package ToyProject.Login.security.filters;

import ToyProject.Login.login.LoginDto;
import ToyProject.Login.security.token.RestAuthenticationToken;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.util.StringUtils;
import org.springframework.web.HttpRequestMethodNotSupportedException;

public class RestAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

    private final ObjectMapper mapper = new ObjectMapper();

    public RestAuthenticationFilter() {
        super(new AntPathRequestMatcher("/auth/login", "post"));
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException, IOException, ServletException {

        if(HttpMethod.POST.name().equals(request.getMethod())){
            throw new HttpRequestMethodNotSupportedException("지원하지 않는 Http 메소드 방식입니다.");
        }

        LoginDto loginDto = mapper.readValue(request.getReader(), LoginDto.class);

        if (!StringUtils.hasText(loginDto.email()) || !StringUtils.hasText(loginDto.password())){
            throw new AuthenticationServiceException("email혹은 password가 누락되어 있습니다.");
        }

        RestAuthenticationToken restAuthenticationToken = new RestAuthenticationToken(
                loginDto.email(),
                loginDto.password());

        return this.getAuthenticationManager().authenticate(restAuthenticationToken);
    }
}