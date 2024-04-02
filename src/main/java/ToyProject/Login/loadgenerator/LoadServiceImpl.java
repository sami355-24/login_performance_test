package ToyProject.Login.loadgenerator;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Service;

@Service
public class LoadServiceImpl implements LoadService{
    @Override
    public void loadGenerator() {
        Map<Long, Long> map = new ConcurrentHashMap<>();

        for (long i = 0; i <1000000; i++)
            map.put(i, i);
    }
}
