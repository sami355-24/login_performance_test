package ToyProject.Login.login;

import java.util.Map;

public interface LoginService {

    public Map<String, String> issueAccessToken(LoginDto loginDto);
}
