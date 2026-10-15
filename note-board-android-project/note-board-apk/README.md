# 노트 보드 Android 앱 빌드

이 프로젝트는 `www/index.html`에 들어 있는 노트 보드를 Capacitor로 감싼 Android 앱 프로젝트입니다. 화면 파일과 아이콘은 포함되어 있습니다. 이 ZIP 자체는 APK가 아니라 APK를 빌드하기 위한 프로젝트입니다.

## PC 없이 GitHub에서 APK 만들기
1. GitHub에 로그인하고 새 저장소(repository)를 만듭니다.
2. 이 ZIP을 PC/휴대폰에서 압축 해제한 뒤, **안의 파일과 폴더 전체**를 저장소 최상위에 올립니다. `.github` 폴더도 반드시 포함합니다.
3. 저장소의 **Actions** 탭을 열고 `Build APK` 워크플로를 선택합니다.
4. **Run workflow**를 누릅니다. 처음 실행 시 GitHub Actions를 허용해야 할 수 있습니다.
5. 작업이 성공하면 실행 기록 하단의 **Artifacts**에서 `note-board-apk`를 다운로드하고 압축을 풉니다.
6. 안에 있는 `app-debug.apk`를 Android 기기로 옮겨 설치합니다. Android 설정에서 해당 앱/브라우저의 '알 수 없는 앱 설치 허용'이 필요할 수 있습니다.

## PC에서 직접 빌드
필요: Node.js 20 이상, JDK 17, Android Studio 및 Android SDK.

프로젝트 폴더에서 실행:
```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```
APK 경로: `android/app/build/outputs/apk/debug/app-debug.apk`

## 앱 내용 수정
`www/index.html`을 수정한 다음 `npx cap sync android`를 실행하고 다시 빌드합니다.
