package ToyProject.Login.global.interceptor;

import ToyProject.Login.global.redis.RedisService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {

    private final RedisService redisService;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginCheckInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/login");
    }

    @Bean
    public LoginCheckInterceptor loginCheckInterceptor(){
        return new LoginCheckInterceptor(redisService);
    }
}
