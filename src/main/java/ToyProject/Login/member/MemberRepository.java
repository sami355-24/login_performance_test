package ToyProject.Login.member;

public interface MemberRepository {

    boolean isExist(Member member);

    void join(Member newMember);

    Member findById(String memberId);
}