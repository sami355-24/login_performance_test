package ToyProject.Login.loadgenerator;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/load")
@RequiredArgsConstructor
public class LoadController {

    private final LoadService service;

    @GetMapping("/load")
    public void startLoad(){
        service.loadGenerator();
    }


    @GetMapping("/simple")
    public ResponseEntity<String> starLoad(){
        return ResponseEntity.ok().body("ok");
    }
}
