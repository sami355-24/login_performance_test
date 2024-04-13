package ToyProject.Login.login;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class LoginController {

    public static final String SESSION = "MEMBER_SESSION";
    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<Void> Login(@RequestBody LoginDto loginDto, HttpSession httpSession){
        String sessionId = loginService.login(loginDto.email(), loginDto.password());
        httpSession.setAttribute(SESSION, sessionId);
        httpSession.setMaxInactiveInterval(3600);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpSession httpSession){
        loginService.logout((String) httpSession.getAttribute(SESSION));
        httpSession.invalidate();
        return ResponseEntity.ok().build();
    }
}
