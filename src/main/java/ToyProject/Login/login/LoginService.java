package ToyProject.Login.login;

import ToyProject.Login.member.Member;

public interface LoginService {

    String login(String email, String password);

    void logout(String sessionId);

}
