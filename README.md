<div align="center">

<br>

# Login Performance Test

</div>

<div align="center">

### 스프링의 **인터셉터**, 스프링 시큐리티의 **세션**, 스프링 시큐리티의 **jwt**의 성능 차이를 수치로 확인하기 위해 시작한 프로젝트입니다.

</div>


1️⃣ [테스트 시나리오](https://github.com/sami355-24/login_performance_test#-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EC%9A%94) <br>
2️⃣ [아키텍처](https://github.com/sami355-24/login_performance_test#-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4) <br>
3️⃣ [컨테이너 스펙](https://github.com/sami355-24/login_performance_test#-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98) <br>
4️⃣ [기술 스택](https://github.com/sami355-24/login_performance_test#-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88-%EC%8A%A4%ED%8E%99) <br>
5️⃣ [결과](https://github.com/sami355-24/login_performance_test#%EF%B8%8F-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D) <br>
6️⃣ [정리](https://github.com/sami355-24/login_performance_test#-%EA%B2%B0%EA%B3%BC) <br>
7️⃣ [관련 링크](https://github.com/sami355-24/login_performance_test?tab=readme-ov-file#%EF%B8%8F-%EA%B4%80%EB%A0%A8-%EB%A7%81%ED%81%AC) <br>

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
- Spring Boot 3.2.4
- Redis 7.2.4
- MariaDB(latest, 테스트 환경)
- H2(개발 환경) 2.1.214
- Docker 25.0.2
- Prometheus 2.51.1
- Grafana 10.4.1
- Gatling 3.11.3

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

---

### ✍️ 정리
- **구현 방식**에 따라 응답속도, 감당할 수 있는 최대 요청수의 **큰 차이**가 존재하는 것을 확인할 수 있었습니다.
- **jwt**를 이용한 구현 방식이 session에 비해 최대 요청수와 평균 응답속도, 요청 처리 용량을 **압도**하는 것을 확인할 수 있었습니다.
- **jwt를 사용하더라도** 토큰 발급은 컨트롤러에서 하고 인증을 시큐리티의 사용자 정의 필터에서 한다면 , **인터셉터와 비슷한 수준**의, 압도적인 성능을 뽑아낼 수 있음을 확인할 수 있었고 요청대비 리소스를 아낄 수 있음을 확인할 수 있었습니다.
- security의 session방식보다 **security의 jwt방식**이 로그인만 하는 상황에선  약 **120배** , 로그인과 단순 요청을 하는 상황에선 약 **60배** 가량 **더 높은 Throughput**을 확인할 수 있었습니다.

---
### ♾️ 관련 링크
- https://github.com/sami355-24/login_performance_gatling
- https://github.com/sami355-24/login_performance_nGrinder
- https://goto-pangyo.tistory.com/279
- https://goto-pangyo.tistory.com/280
- https://goto-pangyo.tistory.com/287
