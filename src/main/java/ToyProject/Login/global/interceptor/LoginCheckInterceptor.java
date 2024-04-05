package ToyProject.Login.global.interceptor;

import static ToyProject.Login.login.LoginController.SESSION;

import ToyProject.Login.global.redis.RedisService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.servlet.HandlerInterceptor;

@RequiredArgsConstructor
public class LoginCheckInterceptor implements HandlerInterceptor {

    private final RedisService redisService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String sessionId = (String) request.getSession().getAttribute(SESSION);
        if(redisService.isExist(sessionId))
            return true;

        return false;
    }
}
