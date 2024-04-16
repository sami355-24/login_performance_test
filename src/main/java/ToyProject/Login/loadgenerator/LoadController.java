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

    @GetMapping("/real")
    public ResponseEntity<String> startLoad(){
        service.loadGenerator();
        return ResponseEntity.ok().body("ok");
    }


    @GetMapping("/fake")
    public ResponseEntity<String> starLoad(){
        return ResponseEntity.ok().body("ok");
    }
}
