package ToyProject.Login.login;

import ToyProject.Login.global.SessionService;
import ToyProject.Login.member.MemberRepository;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService{

    private final SessionService sessionService;
    private final MemberRepository memberRepository;


    @Override
    public String login(String email, String password) {
        isExists(email, password);
        String sessionId = generateSessionId();
        sessionService.insertSession(sessionId);
        return sessionId;
    }

    private void isExists(String email, String password) {
        if(!memberRepository.existsByEmailAndPassword(email, password))
            throw new RuntimeException();
    }

    private String generateSessionId(){
        return UUID.randomUUID().toString();
    }

    @Override
    public void logout(String sessionId) {
        sessionService.deleteSession(sessionId);
    }
}
