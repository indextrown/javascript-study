//숫자 데이터
const number = -123
console.log(number + 1)
//=> -122

//부동소수점
const p1 = .14 // = 0.14
console.log(p1)
//=> 0.14


//중요
// NAN = not a number 즉 수는 수끼리 같은 타입끼리 더하자
// 데이터 타입 확인하기 typeof()
console.log(typeof(number + undefined))
console.log(typeof(p1))
//=> number number
/* undefined 타입 자체는 숫자임 but 특정한 숫자 값으로 표현 불가능하기에 NAN발생
*/

