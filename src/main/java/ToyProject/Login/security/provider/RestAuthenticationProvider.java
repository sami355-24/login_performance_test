package ToyProject.Login.security.provider;

import ToyProject.Login.security.token.RestAuthenticationToken;
import ToyProject.Login.security.userDetails.MemberDetails;
import ToyProject.Login.security.userDetails.MemberDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;

@RequiredArgsConstructor
public class RestAuthenticationProvider implements AuthenticationProvider {

    private final MemberDetailsService memberDetailsService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String password = (String) authentication.getCredentials();
        MemberDetails memberDetails = (MemberDetails) memberDetailsService.loadUserByUsername(email);

        if (!passwordEncoder.matches(password, memberDetails.getPassword())){
            throw new BadCredentialsException("password가 잘못되었습니다.");
        }

        return new RestAuthenticationToken(memberDetails.getAuthorities(), memberDetails.getLoginDto(), null);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.isAssignableFrom(RestAuthenticationToken.class);
    }
}
