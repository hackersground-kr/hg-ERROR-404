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

> Visual Studio Code, Docker, Azure 계정, 깃허브 계정, git

## 시작하기
git이 없을시
-----------
>1. 아래 링크에서 각 운영체제에 맞게 설치
https://git-scm.com/downloads

>1-2. 만약 본인의 컴퓨터가 최신 Windows 운영체제를 사용 중이라면, 64비트 버전을 선택하세요. 그러나 32비트 운영체제를 사용 중인 경우는 32비트 버전을 선택하세요.
>3. git 버전 확인
```
git --versoin
```
>3.  winget을 사용한 설치
      - winget 설치 확인: 먼저 winget이 설치되어 있는지 확인합니다.
 ```
 winget --version
 ```

>3-2. winget 설치 방법
아래 app installer설치(안에 winget이 내장되어 있음)
https://apps.microsoft.com/detail/9nblggh4nns1?hl=en-us&gl=US

>3-3. app installer가 깔려있는 경우 그냥 넘어가셔도 됩니다.

>4. Git 설치 명령어: 아래 명령어를 명령 프롬프트(CMD) 또는 PowerShell에서 실행하여 Git을 설치합니다.
```
winget install --id Git.Git -e --source winget
```

> github의 hackerground-kr / hg-ERROR-404에서 상단의 <> Code(초록색 버튼)클릭
HTTPS가 선택된 상태에서 링크복사 ex) https://github.com/hackersground-kr/hg-ERROR-404.git
visual studio code실행 -> hackerground폴더 생성 -> 터미널 실행 > git clone (복사한 링크)

Azure CLI 및 GitHub CLI 로그인하기
==================================
>1. GitHub Codespaces 인스턴스 안에서 아래 명령어를 실행시켜 Azure 및 GitHub에 로그인합니다.
```
# Azure Developer CLI login
azd auth login --use-device-code=false

# Azure CLI login
az login

# GitHub CLI login
GITHUB_TOKEN=
gh auth login
```
>중요: 만약 ```azd auth login --use-device-code false``` 또는 ```az login``` 명령어 실행시 새 브라우저 탭이 뜨면서 404 에러가 날 경우, 주소창의 URL 값을 복사해서 새 zsh 터미널을 열고 ```curl <복사한 URL>```을 해 줍니>다.
>2. Visual Studio Code의 경우

Azure Developer cli설치
----------------------
```
winget install --id Microsoft.AzureDeveloperCLI -e
```

Azure CLI설치
-------------
Window
  https://aka.ms/installazurecliwindowsx64
  
macOS
  ```bash
    brew update && brew install azure-cli
  ```
Linux
```bash
  curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

GitHub CLI설치
-------------
https://github.com/cli/cli/releases/download/v2.55.0/gh_2.55.0_windows_amd64.msi

>2. Visual Studio Code에서 터미널을 실행시켜 아래 명령어로 Azure 및 GitHub에 로그인합니다.
![스크린샷 2024-08-27 014833](https://github.com/user-attachments/assets/bd9e283f-d167-4649-a2be-fe0f504c31a2)
```
# Azure Developer CLI login
azd auth login

# Azure CLI login
az login

# GitHub CLI login
GITHUB_TOKEN=
gh auth login
```

>3. 로그인이 끝났다면 아래 명령어를 통해 제대로 로그인이 되어 있는지 확인합니다.
```
# Azure Developer CLI
azd auth login --check-status

# Azure CLI
az account show

# GitHub CLI
gh auth status
```

Azure Developer CLI로 배포 준비하기
===================================
>1. 아래 명령어를 차례로 실행시켜 배포 환경을 준비합니다.
```
# bash/zsh
cd $REPOSITORY_ROOT/frontend
AZURE_ENV_NAME="{{ GITHUB_ID }}"
azd init -e $AZURE_ENV_NAME

# PowerShell
cd $REPOSITORY_ROOT/frontend
$AZURE_ENV_NAME = "{{ GITHUB_ID }}"
azd init -e $AZURE_ENV_NAME
```

>중요: ```{{ GITHUB_ID }}```는 자신의 GitHub 아이디로 변경해야 합니다. 예를 들어 GitHub 아이디가 ```sample```라면 ```{{ GITHUB_ID }}```를 ```sample```로 변경하세요.
>2. 배포 환경 초기화 방법을 물어보면 Use code in the current directory 옵션을 선택합니다.
>3. Azure Container Apps를 사용해 배포한다고 물어봅니다. Confirm and continue initializing my app 옵션을 선택합니다.
>4. Docker Desktop실행

Azure Container Apps로 배포하기
===============================
>1. 아래 명령어를 실행시켜 Aspire 앱을 Azure로 배포합니다.
```
azd up
```
>2. 어떤 Azure 구독을 사용할 것인지 물어봅니다. 사용할 구독을 hackerground로 선택합니다.
>3. 어느 지역에 배포할 것인지 묻습니다. 여기선 Korea Central을 선택합니다.
>4. Azure Portal에 가서 웹이 배포된 것을 확인합니다.





