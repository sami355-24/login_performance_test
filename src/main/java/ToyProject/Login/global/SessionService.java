package ToyProject.Login.global;

public interface SessionService {

    void insertSession(String sessionId);

    boolean isExist(String sessionId);

    void deleteSession(String sessionId);
}
