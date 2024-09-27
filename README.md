# FourTeamProject

## 주기능

- 개인판매 가능

## 화폐

- 포인트(돈 대신)는 관리자가 특정유저한테 주는방식

## 어드민 및 택배기사 페이지

- 하위 라우팅 사용
- 어드민 페이지 : 주소창에 루트이후 /admin
- 택배기사 페이지 : 주소창에 루트이후 /delivery

### 어드민 및 택배기사 로그인 및 회원가입

- 일반페이지에서 회원가입을 하면 어드민 페이지에서 관리자가 권한부여 하는방식

- 포트폴리오용 어드민 및 택배기사 이메일 및 비밀번호
  - 이메일: admin1@admin.com
  - 비밀번호: admin11@

## 개인페이지

- 관리자페이지 : 백엔드 위주로
- 가입시 상점페이지 생김(프로필 느낌으로 1인당 1개의 상점페이지)
  - 여기서 평판 및 판매 등록가능

전체 틀

- 레퍼런스 : 당근, 채팅기능x

필요 스택
구글 맵 api
OAuth 2.0 : 간편로그인 사용

프론트엔드

1. UI 나누기, API - 이동찬
2. react로 페이지 틀(비동기) - 이동찬
   component(동기) 만들기 - 전체(각자 페이지)
3. Ajax : API 요청,응답 받아서 코드 짜오기 - 손민복
4. 모바일크기 변환 - 프로젝트 막바지에 적용(컴포넌트 만든사람이 변환하기)

백엔드

1. DB (mySQL | MongoDB) : ERD그리기 - 이승배
2. SERVER : - 이승배
3. 지도 API - 이정배
4. OAuth 2.0 - 이정배

프론트에서 검색하면 -> 키워드랑 제목 검색

판매글 페이지

- 판매페이지에서 판매자는 구매요청한 당사자에 한해 현재위치 올릴수있게 gps기능으로
- 택배 위치추적 기능
- 신고기능 필수

회원가입할때 mysql user-> id 받아와서 -> mongDB에 id 저장

택배회사

택배기사-> 판매자 집으로 보낸다음 -> 물건을 픽업하면 -> 주소x 물건을 택배회사가 가져왔습니다. -> 택배회사에서 영업소 도착시 위치 gps로 출력
택배비 기본값 2500원이긴한데, 관리자가 수정가능
판매자

구매자

질문 : 택배비 관련은 어떻게? (선불, 착불, 선택 여부, 가격)

- 문제 발생시 문제 발생한쪽에서 추가금 지불, 기본은 구매:판매 = 50:50으로 가격은 미정

택배기사가 판매자의 물건을 회수하면 gps는 언제부터 찍으면 좋을지?

- 물류센터에 들어왔을때 찍고, 그 이후로 구매자한테 도착할때까지 gps
- 판매자 쪽에서도 물건위치 볼수있게

회원가입(유저정보)는 회사가 가지고 있을건지? (OAuth 2.0로 다른 간편로그인 할때도 저장할건지)

포인트 환전은 어떻게?(수수료관련) ex) 10만원 충전하면 10만포인트 할건지?/10만포인트를 환전하면 그대로 10만원 줄건지

- 사업얘기라 신경 x
- 시연할때는 10만원 충전하면 10만포인트 충전하게

구매자가 구매요청시 구매자쪽 바로 포인트차감, 구매자가 구매확인시 판매자에게 포인트지급 하면될지?O

### 직접 생각해볼것

1. 사기친 유저에 관한 대응은 어떻게 할건지?
   사기친경우 사기친 유저 상점페이지 이용금지(구매와 판매글 작성 불가) 및 환전 불가를 적용

2. 검색
   검색시 제목만 검색되게 할 예정
   ex) 판매글 제목이 아이폰 13 중고 판매합니다.
   검색어에 '아이'만 쳐도 아이폰이 나옴(다만 아이용품등이 나올수도있음)
   카테고리내 검색 가능하게 할 예정
   전자제품 카테고리에서 검색할경우 다른 카테고리물건은 검색안됨
