package ToyProject.Login.security.provider;

import ToyProject.Login.security.jwtUtil.JwtUtil;
import ToyProject.Login.security.token.JwtAuthenticationToken;
import ToyProject.Login.security.userDetails.MemberDetails;
import ToyProject.Login.security.userDetails.MemberDetailsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtProvider implements AuthenticationProvider {

    private final JwtUtil jwtUtil;
    private final MemberDetailsService memberDetailsService;


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String authToken = (String) authentication.getPrincipal();
        jwtUtil.validateToken(authToken);
        MemberDetails memberDetails = (MemberDetails) memberDetailsService.loadUserByUsername(authToken);
        JwtAuthenticationToken authenticationToken = new JwtAuthenticationToken(memberDetails.getAuthorities(),
                memberDetails.getUsername(), null);
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        return new JwtAuthenticationToken(memberDetails.getAuthorities(), memberDetails.getUsername(), null);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.isAssignableFrom(JwtAuthenticationToken.class);
    }
}
