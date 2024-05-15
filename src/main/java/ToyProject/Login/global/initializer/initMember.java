package ToyProject.Login.global.initializer;

import ToyProject.Login.member.Member;
import ToyProject.Login.member.MemberRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class initMember {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @PostConstruct
    public void insertMember() {
        for (int i = 1; i < 51; i++) {
            memberRepository.save(Member.builder()
                    .id("user" + i)
                    .email("user" + i + "@test.com")
                    .password(passwordEncoder.encode("1234"))
                            .roles("ROLE_USER")
                    .build());
        }
    }
}
