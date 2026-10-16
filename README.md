# 노트 보드 — 안드로이드 APK 만들기

이 폴더는 Capacitor 프로젝트예요. 앱 화면은 `www/index.html` (노트 보드 전체)이고, 인터넷 없이 폰 안에서 그대로 실행돼요.

## 방법 A. GitHub에서 자동으로 (PC에 아무것도 설치 안 해도 됨)
1. github.com에서 새 저장소(repository)를 만들어요.
2. 이 폴더 안의 파일 전부를 저장소에 올려요. (`.github` 폴더 포함!)
3. 저장소의 **Actions** 탭 → **Build APK** → **Run workflow** 를 눌러요.
4. 5~10분 뒤 완료되면 실행 결과 화면 아래 **Artifacts → note-board-apk** 를 내려받아 압축을 풀면 `app-debug.apk` 가 나와요.
5. 폰으로 옮겨 설치해요. ("출처를 알 수 없는 앱 설치"를 허용해야 해요.)

## 방법 B. 내 PC에서 직접 (Android Studio 필요)
1. Node.js 20+, Android Studio를 설치해요.
2. 이 폴더에서:
   ```
   npm install
   npx cap add android
   npx cap sync android
   npx cap open android
   ```
3. Android Studio에서 **Build → Build APK(s)** 를 누르면 APK가 만들어져요.

## 화면을 고쳤을 때
`www/index.html` 을 새 버전으로 바꾸고 다시 빌드하면 돼요.
