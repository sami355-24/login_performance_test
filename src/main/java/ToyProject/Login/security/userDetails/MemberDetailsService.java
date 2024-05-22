package ToyProject.Login.security.userDetails;

import ToyProject.Login.login.LoginDto;
import ToyProject.Login.member.Member;
import ToyProject.Login.member.MemberRepository;
import ToyProject.Login.security.jwtUtil.JwtUtil;
import io.jsonwebtoken.Claims;
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

    private final JwtUtil jwtUtil;

    @Override
    public UserDetails loadUserByUsername(String authToken) throws UsernameNotFoundException {
        String memberEmail = jwtUtil.extractClaim(authToken, Claims::getSubject);
        String memberRoles = jwtUtil.extractClaim(authToken, claims -> claims.get("roles", String.class));
        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(memberRoles));

        return new MemberDetails(memberEmail, authorities);
    }

}
