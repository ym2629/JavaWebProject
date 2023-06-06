# Create React 앱

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app) 과 함께 부트스트랩되었습니다.

## 프로젝트 실행 시 준비 사항

이 프로젝트를 실행하기 위해선 mongodb 사용이 필수적입니다.

1. mongodb 홈페이지 접속 후 회원가입 ( https://account.mongodb.com/account/login )
2. 데이터베이스를 생성
3. 현재 사용중인 단말기/기기의 IP가 허용되도록 설정
4. 생성한 데이터베이스의 Connect 버튼 클릭합니다
5. MongoDB for VS Code에서 자신의 mongodb 주소를 복사합니다
6. 프로젝트 파일 중 server의 .env 폴더에 자신의 주소 붙여넣습니다.
7. 붙여넣기 한 텍스트의 passward부분을 지우고 자신의 mongodb 비밀번호를 입력합니다 

### " node app.js "

터미널을 실행시킨 뒤 cd server를 입력해 현재위치를 server 폴더로 변경합니다
그 후, node app.js 를 입력해 모듈을 실행시킵니다

#### " npm i react "

새로운 터미널을 생성 후 cd client를 입력해 현재 위치를 client 폴더로 변경합니다
npm i react를 입력해 react 라이브러리를 참조합니다

React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다.
React에 대한 자세한 내용은 [React 설명서](https://reactjs.org/) 를 참조하십시오


##### " npm start "

현재 위치가 client 폴더인 새롭게 생성된 터미널에
npm start를 입력해 package.json의 scripts 부분에 있는 start 명령어를 실행합니다
결과적으로 설정 된 기본 브라우저가 실행되며 [http://localhost:3000] 주소로 이동되어 프로젝트를 실행시킵니다

## 자세히 보기

자세한 내용은 (github주소) 에서 확인할 수 있습니다
React에 대한 자세한 내용은 [React 설명서](https://reactjs.org/) 를 참조하십시오
