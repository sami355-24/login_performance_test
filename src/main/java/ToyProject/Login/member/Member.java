package ToyProject.Login.member;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Member {

    private String id;

    private String name;

    private String password;
}
