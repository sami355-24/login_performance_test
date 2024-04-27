package ToyProject.Login.global.redis;

import ToyProject.Login.global.SessionService;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@RequiredArgsConstructor
public class RedisService implements SessionService {

    private final RedisTemplate<String, LocalDateTime> redisTemplate;
    private final long SESSION_TIME_OUT = 3600L;

    public void insertSession(String sessionId){
        redisTemplate.opsForValue().set(sessionId, LocalDateTime.now(), SESSION_TIME_OUT);
        log.info("sessionId = {}", sessionId);
    }

    public boolean isExist(String sessionId){
        return Boolean.TRUE.equals(redisTemplate.hasKey(sessionId));
    }

    public void deleteSession(String sessionId) {
        redisTemplate.delete(sessionId);
    }
}
