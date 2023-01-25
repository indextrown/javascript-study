# javascript-study
자바스크립트 공부를 시작하겠습니다

# javascript = 프로그래밍 언어
   동작방법 1) 컴퓨터 환경에서 동작  2) 브라우저에서 동작
   
# Node.js
Node.js를 배운다 = 컴퓨터를 제어하는 것을 배운다

Node js는 웹페이지 개발을 위한 약간의 도움을 받는 용도로 사용 해야함

# NPM(Node Package Manager)
전 세계 개발자들이 만든 다양한 기능(패키지, 모듈)을 관리

npm 사용 이유
1) 관리 효율 증가
2) 손쉬운 기능 고도화

# 본격적인 javascript 환경 세팅
```node --version```
설치된 node.js 버전 확인 (Node설치하면 npm 자동 설치)

```npm --version ```
=> 설치된 npm 버전 확인
-- = 플래그라고 부름 

```clear or cls```
=> 커맨드 정리


# Npm 프로젝트 생성하기
```npm init ```

```npm init –y``` (기본적인 질문 생략후 패키지 설치)

```npm install lodash```(브라우저에서 동작하는 기능)

```npm install parcel —save-dev```
parcel은 여러 패키지들을 웹 사이트에 올릴 수 있게 하나의 구조로 묶어주는 역할(bundler라고도 부름)

## Tip

```npm install parcel —save-dev```

```npm install —save-dev parcel ```

```npm install –D parcel  ```

```npm i -D parcel```
모두 같은 의미임



웹사이트에서 직접적으로 동작하는 패키지가 아닌 경우 뒤에 —save-dev를 붙여줘야함(개발용)

# package-lock.json : 설치하는 패키지들의 (의존)
관계 정보를 명시한 파일

node modules 폴더를 지어도 
package.json
package-lock.json 파일을 이용해 복구 가능
=>```npm install```만 하면 됨!!

```javascript
"packages": {
    "": {
      "name": "javascript",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {       //일반 의존성(브라우저에서 직접적으로 동작하는 패키지들)
        "lodash": "^4.17.21"
},
      "devDependencies": {    //개발 의존성(개발용 의존성 패키지)
        <U>"parcel": "^2.8.2" //유의적 버전<U>
}
```

# 버전관리
.gitignore

# 본격적인 시작
1) index.html 만들고
! + enter 키 누르면 기본적인 html 틀 만들어짐

2) main.js 파일 만들기

3) parcel 번들러를 이용한 개발 서버 오픈
package.json에 들어가서 scripts를 수정

before
```
"scripts": {
    "test": "echo \"Error: no test specified\"&& exit 1"
}, 
```

after

```
"scripts": {
    "dev": "parcel ./index.html"
},
```
```npm run dev```
=> 터미널로 실행

## 오류뜰거임 이유:
import 키워드 사용하는 자바스크립트는 
모듈 자바스크립트라고 부름  
모듈 자바스크립트는 html에서 가져올 때 html에서
type:module을 입력해서 가져와야함

index.html
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type = "module" defer src = "./main.js"> </script> <!-- main.js 연결 -->
</head>
<body>
   <h1>hello world</h1> 
</body>
</html>
```

# 부가정보
typescript는 웹페이지에서 직접적으로 동작 불가능
하지만 사용하는 이유는?
여러 기능들의 도움을 받기 위해서 사용함

typesrcipt => parcel => javascript
               (변환역할)
변환된 결과는 dist 폴더에서 확인가능




## 유의적 버전(Semantic Versioning, SemVer)
- 프로젝트가 개발되는 특정 시점 상태에 의미를 부여해서 숫자를 매기는 방법

## Major.Minor.Patch
ex)4.17.21            

### Major: 기존 버전과 호환되지 않는 새로운 버전
### Minor: 기존 버전과 호환되는 기능이 추가된 버전
### Patch: 기존 버전과 호환되는 버그 및 오타등이 수정된 	버전(새로운 기능이 아닌 버그, 오타)

### ^ 캐롯: 유의적 버전에서의 의미는
: Major 버전 안에서 가장 최신 버전으로 업데이트 가능
ex) ^4.17.21 => .17.21 변함
=>Minor, patch만 업데이트됨

### ~ 틸드
Minor 버전 안에서 가장 최신 버전으로 업데이트 가능
=>patch만 최신 버전으로 업데이트됨

### 최신 버전 확인하기
```npm info 패키지명```

### 특정 버전 설치하기   @:캐롯
```npm install 패키지명@4.17.19```

### 최신 버전 업데이트
```npm update 패키지명```

