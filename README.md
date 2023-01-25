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

# 본격적인 NPM 환경 세팅
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

# 본격적인 자바스크립트 환경 세팅
```npm init –y``` (기본적인 질문 생략후 패키지 설치)

```npm i –D parcel```

package.json에서 내용 수정
``` 
"scripts":{
    "dev":"parcel ./index.html",
    "build":"parcel build ./index.html"
  },
```
### dev라는 스크립트 이름으로
parcel명령으로 시작해서 index.html 파일 기준으로
개발서버를 오픈하겠다

---
개발서버 오픈, 테스트 = dev
제품화, 서버 배포 = build사용

---

(parcel 번들러가 사용할 수 있는)
index.html 만들어주기

main.js 파일 만들고
title 밑에 자바스크립트 넣어주기

```html
<title>Document</title>
<script src ="./main.js">
</script>
<!-- main.js 연결 -->
</head>
```

### main.js에서
import 키워드 통해서 현재 프로젝트에 설치한 패키지를 가져와서 사용하려면 main.js 파일은 모듈이 되는 개념!!

### 최종

```html
<script type ="module“
src ="./main.js">
</script><!-- main.js 연결 -->
```

# Tip(참고사항)

만약 html body부분의 특정 태그를 자바스크립트를 통해 사용하려면 main.js가 html 구조 전체를 해석한 뒤에 동작하도록 만들어야함
이때 사용하는 속성:defer

```
<script type ="module“
defer src ="./main.js">
</script>
```
                      
'''npm run dev'''로 개발 서버 오픈

# 1. 변수

큰따음표 작은따음표 아무거나 가능
```javascript
const string1 = "Hello" 
const string2 = 'Hello'
```
                     
#### ` : 빽틱(템플릿 리터럴) 
##3# [] : 배열 리터럴
#### 리터럴: 기호를 통해서 데이터를 만드는 방식
데이터를 문자 데이터 내부에 채워넣는 용도로 사용
#### 빽틱기호 = 탬플릿

```javascript
const string3 = `Hello ${string1} ?!` 
console.log(string3)
```
### 결과값 : Hello Hello ?!

# 2. 숫자변수

//숫자 데이터

```javascript
const number = -123
console.log(number + 1)
```
### 결과값 : -122

# 3. 부동소수점 오류와 강제형변환

```javascript
const a = 0.1
const b = 0.2

console.log( a + b ) 
```
### 결과값 : 0.300000000000000004

### //부동소수점 오류라고 표현한다
/* 컴퓨터는 0과 1의 2진수로 동작이 되는데 수를 표현하려면 기본적으로 10진수를 써야함
그랬을 때 컴퓨터가 10진수를 2진수로 표현해야하기 때문에 간혹 무한소수라는  개념이 발생한다
이를 유한하게 표현하기 위해 세부적인 값에 초과나 혹은 손실로 계산오류가 발생*/

# 4. boolean + 함수

//boolean(불린) = 논리 데이터
``` javascript
const a = true
const b = false

//불린데이터눈 특정한 상황을 분기 처리할 수 있다
if (a) {
    console.log('hello')
}
```
### 결과값 : hello

# 5. nullundefined
####   //let: age 변수에 새로운 값이 재할당 될 수 있다 의미
#### //null: 존재하지않거나 비어있거나 알수없다 의미
#### //null, undefined 둘다 값이 없는 상태  
#### //null: 명시적으로 값이 없다(직접 작성)
#### //undefined: 암시적이다(직접 작성할일은 거의 없음)

```javascript
let age = null  
let age2 //undefined 

console.log(age)

//function 키워드로 calback 함수를 추가
setTimeout(function () {
    age = 85
    console.log(age)
    console.log(age2)
    
}, 1000) //1초 뒤에 실행되도록 함 밀리세컨드 단위임
//console.log(age3)
```
# 6. 객체

```javascript
const user = {
    name: 'donghyeon',
    age:85,
    new_email:null,   //이메일 값 아직은 비어있다
}

console.log(user)
console.log(user.name)
console.log(user.age) 
console.log(user.email) // undefined : 값 존재 x
console.log(user.new_email)  // null : 값 할당 x

```

# 7. Array(배열)

//new 키워드를 통해 호출하는 함수 = 생성자함수 또는 javascript clss라고함
//new 키워드로 보통 배열 데이터를 만든다
```javascript
const fruits = new Array('Apple', 'Banana', 'Cherry')
console.log(fruits)
console.log(fruits[1])
```

//두번째 방법 = 리터럴 방식
//배열(Array) 리터럴 []
```javascript
const comlanguage = ['c', 'java', 'javascript']
console.log(comlanguage)
```

//배열 데이터를 인덱싱한다(특정 data를 조회한다)
```javascript
console.log(comlanguage[2])
```

//배열 길이 확인
```javascript
console.log(comlanguage.length)
```

//배열 마지막 item 조회 확인
```javascript
console.log(comlanguage[comlanguage.length - 1])
```

//배열첫번째 item 조회 확인
```javascript 
console.log(comlanguage[0])
```
