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
