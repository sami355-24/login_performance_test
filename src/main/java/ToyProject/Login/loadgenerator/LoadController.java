package ToyProject.Login.loadgenerator;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoadController {

    private final LoadService service;

    @GetMapping("/load")
    public void startLoad(){
        service.loadGenerator();
    }
}
