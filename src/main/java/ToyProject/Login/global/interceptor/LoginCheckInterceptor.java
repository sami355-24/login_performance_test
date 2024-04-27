package ToyProject.Login.global.interceptor;

import static ToyProject.Login.login.LoginController.SESSION;

import ToyProject.Login.global.redis.RedisService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StreamUtils;
import org.springframework.web.servlet.HandlerInterceptor;

@RequiredArgsConstructor
public class LoginCheckInterceptor implements HandlerInterceptor {

    private final RedisService redisService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String sessionId = (String) request.getSession().getAttribute(SESSION);
        if(sessionId != null && redisService.isExist(sessionId))
            return true;

        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.getWriter().write("Permission required.");
        response.getWriter().flush();
        return false;
    }
}
