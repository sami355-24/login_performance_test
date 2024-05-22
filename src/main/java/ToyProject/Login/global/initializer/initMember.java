package ToyProject.Login.global.initializer;

import ToyProject.Login.member.Member;
import ToyProject.Login.member.MemberRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class initMember {

    private final MemberRepository memberRepository;

    @PostConstruct
    public void insertMember() {
        for (int i = 1; i < 2; i++) {
            memberRepository.save(Member.builder()
                    .id("user" + i)
                    .email("user" + i + "@test.com")
                    .password("1234")
                    .role("ROLE_USER")
                    .build());
        }
    }
}
