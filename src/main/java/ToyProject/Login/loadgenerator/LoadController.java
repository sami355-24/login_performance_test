package ToyProject.Login.loadgenerator;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoadController {

    private final LoadService service;

    public LoadController(LoadService service) {
        this.service = service;
    }

    @GetMapping("/load")
    public void startLoad(){
        service.loadGenerator();
    }
}
