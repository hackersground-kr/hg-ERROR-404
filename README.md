# `{ERROR-404}` - `{의성친구들}`

해커그라운드 해커톤에 참여하는 `{{ 팀 이름 }}` 팀의 `{{ 제품/서비스 이름 }}`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항

> Visual Studio Code, Docker, Azure 계정, 깃허브 계정

## 시작하기

> github의 hackerground-kr / hg-ERROR-404에서 상단의 <> Code(초록색 버튼)클릭
HTTPS가 선택된 상태에서 링크복사 ex) https://github.com/hackersground-kr/hg-ERROR-404.git
visual studio code실행 -> hackerground폴더 생성 -> 터미널 실행 > git clone (복사한 링크)

Azure CLI 및 GitHub CLI 로그인하기
=====================다

Azure Container Apps로 배포하기
===============================
>1. 아래 명령어를 실행시켜 Aspire 앱을 Azure로 배포합니다.
```
azd up
```
>2. 어떤 Azure 구독을 사용할 것인지 물어봅니다. 사용할 구독을 hackerground로 선택합니다.
>3. 어느 지역에 배포할 것인지 묻습니다. 여기선 Korea Central을 선택합니다.
>4. Azure Portal에 가서 웹이 배포된 것을 확인합니다.





