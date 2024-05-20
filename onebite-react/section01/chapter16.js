// 1. 상수 객체
// -> 저장되어 있는 객체의 프로퍼티 값을 수정하는 것은 상관없음
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2;
animal.name = "까망이";
delete animal.color;

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "정지원",
    // 메서드
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();
