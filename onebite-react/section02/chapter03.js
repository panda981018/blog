// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name: "정지원",
    age: 27,
    hobby: "헬스",
};

let { name, age: myAge, hobby, etc = "먉" } = person;
// console.log(name, myAge, hobby, etc);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, etc }) => {
    console.log(name, age, hobby, etc);
};

func(person);
