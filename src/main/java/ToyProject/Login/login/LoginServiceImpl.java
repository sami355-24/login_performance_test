package ToyProject.Login.login;

import ToyProject.Login.member.Member;
import ToyProject.Login.member.MemberRepository;
import ToyProject.Login.security.jwtUtil.JwtUtil;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

    private final MemberRepository memberRepository;
    private final JwtUtil jwtUtil;


    @Override
    public String issueAccessToken(LoginDto loginDto) {
        Member findMember = memberRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("해당 이메일을 가진 유저가 존재하지 않습니다."));
        isValidPassword(findMember.getPassword(), loginDto.getPassword());
        
        return jwtUtil.generateAccessToken(findMember.getEmail(), findMember.getRole());
    }

    private void isValidPassword(String findMemberPassword, String requestPassword) {
        if (!findMemberPassword.equals(requestPassword)) {
            throw new EntityExistsException("해당 비밀번호를 가진 유저가 존재하지 않습니다.");
        }
    }
}
