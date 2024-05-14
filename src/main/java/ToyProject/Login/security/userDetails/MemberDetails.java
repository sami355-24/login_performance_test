package ToyProject.Login.security.userDetails;

import ToyProject.Login.login.LoginDto;
import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class MemberDetails implements UserDetails {

    private final LoginDto loginDto;
    private final List<GrantedAuthority> roles;

    public MemberDetails(LoginDto loginDto, List<GrantedAuthority> roles) {
        this.loginDto = loginDto;
        this.roles = roles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getPassword() {
        return loginDto.password();
    }

    @Override
    public String getUsername() {
        return loginDto.email();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
