//let: age 변수에 새로운 값이 재할당 될 수 있다 의미
//null: 존재하지않거나 비어있거나 알수없다 의미
//null, undefined 둘다 값이 없는 상태  
//null: 명시적으로 값이 없다(직접 작성)
//undefined: 암시적이다(직접 작성할일은 거의 없음)
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