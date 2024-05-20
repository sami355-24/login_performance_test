package ToyProject.Login.login;


import java.io.Serializable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private String email;
    private String password;
}