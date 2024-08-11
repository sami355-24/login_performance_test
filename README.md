<div align="center">

<br>

# Login Performance Test

</div>

<div align="center">

### 스프링의 **인터셉터**, 스프링 시큐리티의 **세션**, 스프링 시큐리티의 **jwt**의 성능 차이를 수치로 확인하기 위해 시작한 프로젝트입니다.

</div>

<br>

> 💡 gatling 실험 결과는 [📊 결과](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#-%EA%B2%B0%EA%B3%BC)의 **상세내용**에서 아래와 같이 직접 확인하실 수 있습니다.

![무제](https://github.com/sami355-24/login_performance_test/assets/72246411/ebb54472-d77e-4013-beb9-564126bb5fd2)


1️⃣ [테스트 시나리오](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4)

2️⃣ [아키텍처](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98)

3️⃣ [컨테이너 스펙](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88-%EC%8A%A4%ED%8E%99)

4️⃣ [기술 스택](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#%EF%B8%8F-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)

5️⃣ [결과](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#-%EA%B2%B0%EA%B3%BC)

6️⃣ [정리](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#%EF%B8%8F-%EC%A0%95%EB%A6%AC)

7️⃣ [얻게 된 것](https://github.com/sami355-24/login_performance_test/blob/main/README.md#-%EC%96%BB%EA%B2%8C-%EB%90%9C-%EA%B2%83)

8️⃣ [관련 링크](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#%EF%B8%8F-%EA%B4%80%EB%A0%A8-%EB%A7%81%ED%81%AC)

---

### 📋 테스트 시나리오
&emsp;1️⃣ 로그인 시나리오<br>
&emsp;&emsp;유저는 로그인을 시도한다.

&emsp;2️⃣ 단순 요청 시나리오 <br>
&emsp;&emsp;유저는 로그인을 시도한다. <br>
&emsp;&emsp;유저는 비즈니스 로직을 호출한다.(여기서는 단순 문자열만을 반환하는 로직을 비즈니스 로직이라 가정하였습니다.)

---

### 🏗 아키텍처
**스프링의 인터셉터를 이용하여 구현하였을때의 아키텍처**
<img width="1046" alt="image" src="https://github.com/sami355-24/login_performance_test/assets/72246411/68299a08-bd48-4b1e-aa34-045115fb20e8"> <br>

**스프링 시큐리티의 세션과 jwt를 이용하여 구현하였을때의 아키텍처**
<img width="1029" alt="image" src="https://github.com/sami355-24/login_performance_test/assets/72246411/b0aed51d-8bcf-433d-aef5-498726a74fa7"> <br>

---

### 📦 컨테이너 스펙
- Ram 1GB
- Cpu 1Core

---

### 🛠️ 기술 스택
- Jdk17
- Spring Boot 3
- Redis
- MariaDB(테스트 환경)
- H2(개발 환경)
- Docker
- Prometheus
- Grafana
- Gatling

---

### 📊 결과

|**시나리오**|**구현 방법**| **CPU 사용량**|**JVM 사용량(1.5GB 기준)**|**DB 커넥션(최대 10)**|**톰캣 스레드**|**요청당 평균 응답속도**|**서버가 감당할 수 있는 최대 요청수**|**요청 처리 용량(Throughput)**|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**로그인 시나리오**|**인터셉터**|약 1%|346MB|100%|100%|5335ms|7129|1336.2|
||**시큐리티(세션)**|약 1%|190MB|22.5%|93.8%|13132ms|194|14.7|
||**시큐리티(jwt)**|약 0.93%|261.8MB|42%|64.1%|1781ms|3155|1771.4|
|**단순 요청 시나리오**|**인터셉터**|약 1%| 365.6MB|약 98%|98%|5126ms|9629|1878.4|
||**시큐리티(세션)**|약 1%|213MB|20%|98.25%|9418ms|216|22.9|
||**시큐리티(jwt)**|약 1%|365MB|96%|100%|6535ms|9990|1528.6|

**상세내용**
<details>
  <summary>펼치기/접기</summary>
  
|**시나리오**|**구현 방법**|첫번째 시도|두번째 시도|세번째 시도|네번째 시도|다섯번째 시도|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**로그인 시나리오**|**인터셉터**|[링크](https://sami355-24.github.io/1.login-scenario/interceptor/loginperformance-20240524093503021/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/interceptor/loginperformance-20240524093854292/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/interceptor/loginperformance-20240524094241975/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/interceptor/loginperformance-20240524094615564/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/interceptor/loginperformance-20240524094907469/index.html)|
||**시큐리티(세션)**|[링크](https://sami355-24.github.io/1.login-scenario/security-session-redis/loginperformance-20240525085616000/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-session-redis/loginperformance-20240525085834118/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-session-redis/loginperformance-20240525090027782/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-session-redis/loginperformance-20240525090233233/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-session-redis/loginperformance-20240525090506210/index.html)|
||**시큐리티(jwt)**|[링크](https://sami355-24.github.io/1.login-scenario/security-jwt/loginperformance-20240528134728246/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-jwt/loginperformance-20240528134909086/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-jwt/loginperformance-20240528135054222/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-jwt/loginperformance-20240528135233369/index.html)|[링크](https://sami355-24.github.io/1.login-scenario/security-jwt/loginperformance-20240528135409854/index.html)|
|**단순 요청 시나리오**|**인터셉터**|[링크](https://sami355-24.github.io/2.simple-request-scenario/interceptor/loginperformance-20240528150204845/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/interceptor/loginperformance-20240528150402839/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/interceptor/loginperformance-20240528150616182/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/interceptor/loginperformance-20240528150901403/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/interceptor/loginperformance-20240528151109983/index.html)|
||**시큐리티(세션)**|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-session-redis/loginperformance-20240529063351274/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-session-redis/loginperformance-20240529063559827/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-session-redis/loginperformance-20240529063824110/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-session-redis/loginperformance-20240529064050205/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-session-redis/loginperformance-20240529064309644/index.html)|
||**시큐리티(jwt)**|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-jwt/loginperformance-20240529074825031/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-jwt/loginperformance-20240529075034796/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-jwt/loginperformance-20240529075242557/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-jwt/loginperformance-20240529075501689/index.html)|[링크](https://sami355-24.github.io/2.simple-request-scenario/security-jwt/loginperformance-20240529075717327/index.html)|
       
</details>

---

### ✍️ 정리
- **구현 방식**에 따라 응답속도, 감당할 수 있는 최대 요청수의 **큰 차이**가 존재하는 것을 확인할 수 있었습니다.
- **jwt**를 이용한 구현 방식이 session에 비해 최대 요청수와 평균 응답속도, 요청 처리 용량을 **압도**하는 것을 확인할 수 있었습니다.
- **jwt를 사용하더라도** 토큰 발급은 컨트롤러에서 하고 인증을 시큐리티의 사용자 정의 필터에서 한다면 , **인터셉터와 비슷한 수준**의, 압도적인 성능을 뽑아낼 수 있음을 확인할 수 있었고 요청대비 리소스를 아낄 수 있음을 확인할 수 있었습니다.
- security의 session방식보다 **security의 jwt방식**이 로그인만 하는 상황에선  약 **120배** , 로그인과 단순 요청을 하는 상황에선 약 **60배** 가량 **더 높은 Throughput**을 확인할 수 있었습니다.



---

### 🎁 얻게 된 것
- 로그인 방식별 장단점을 직접 **데이터**로 확인하며 비교할 수 있었습니다.
- 상황에 맞는 로그인 방식을 저만의 기준을 통해 선택할 수 있게 되었습니다.
![image](https://github.com/user-attachments/assets/fa881586-5b70-425d-ad92-2e5048327d41)
---
### ♾️ 관련 링크
- https://github.com/sami355-24/login_performance_gatling
- https://github.com/sami355-24/login_performance_nGrinder
- https://goto-pangyo.tistory.com/279
- https://goto-pangyo.tistory.com/280
