package ToyProject.Login.global.finalizers;


import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RedisCleanup implements ApplicationListener<ContextClosedEvent> {

    private final RedisClient redisClient;

    @Override
    public void onApplicationEvent(ContextClosedEvent event) {
        try (StatefulRedisConnection<String, String> connection = redisClient.connect()) {
            RedisCommands<String, String> commands = connection.sync();
            commands.flushall(); // 모든 키를 삭제합니다.
        }
    }
}
