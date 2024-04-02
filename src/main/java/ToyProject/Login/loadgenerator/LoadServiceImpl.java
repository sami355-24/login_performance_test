package ToyProject.Login.loadgenerator;

import java.util.HashSet;
import org.springframework.stereotype.Service;

@Service
public class LoadServiceImpl implements LoadService{
    @Override
    public void loadGenerator() {
        HashSet<Integer> set = new HashSet<>();

        for (int i = 0; i < 1000000; i++) {
            set.add(i);
        }
    }
}
