package ToyProject.Login.security.userDetails;

import ToyProject.Login.login.LoginDto;
import ToyProject.Login.member.Member;
import ToyProject.Login.member.MemberRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member findMember = memberRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("%s 이메일을 지닌 유저가 존재하지 않습니다.", username)));

        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(findMember.getRole()));
        ModelMapper mapper = new ModelMapper();
        LoginDto loginDto = mapper.map(findMember, LoginDto.class);

        return new MemberDetails(loginDto, authorities);
    }
}
