//Array(배열)

//new 키워드를 통해 호출하는 함수 = 생성자함수 또는 javascript clss라고함
//new 키워드로 보통 배열 데이터를 만든다
const fruits = new Array('Apple', 'Banana', 'Cherry')
console.log(fruits)
console.log(fruits[1])

//두번째 방법 = 리터럴 방식
//배열(Array) 리터럴 []
const comlanguage = ['c', 'java', 'javascript']
console.log(comlanguage)


//배열 데이터를 인덱싱한다(특정 data를 조회한다)
console.log(comlanguage[2])

//배열 길이 확인
console.log(comlanguage.length)

//배열 마지막 item 조회 확인
console.log(comlanguage[comlanguage.length - 1])

//배열첫번째 item 조회 확인
console.log(comlanguage[0])