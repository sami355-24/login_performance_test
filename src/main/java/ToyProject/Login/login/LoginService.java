package ToyProject.Login.login;

import ToyProject.Login.member.Member;

public interface LoginService {

    public String issueAccessToken(LoginDto loginDto);
}
