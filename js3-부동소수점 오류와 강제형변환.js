const a = 0.1
const b = 0.2

console.log( a + b ) 
//->0.300000000000000004
//부동소수점 오류라고 표현한다
/* 컴퓨터는 0과 1의 2진수로 동작이 되는데 수를 표현하려면 기본적으로 10진수를 써야함
그랬을 때 컴퓨터가 10진수를 2진수로 표현해야하기 때문에 간혹 무한소수라는  개념이 발생한다
이를 유한하게 표현하기 위해 세부적인 값에 초과나 혹은 손실로 계산오류가 발생*/

//원하는 소수점까지 삭제
console.log( (a + b).toFixed(1) )
console.log( typeof((a + b).toFixed(1)) )
//->0.3   중요!!!! toFixed는 숫자data를 문자 data로 바꿔버림

//문자data를 숫자data로 바꾸는 함수 Number()
console.log(Number(a+b).toFixed(1))          //-> 0.3
console.log(typeof Number((a+b).toFixed(1))) //-> number


