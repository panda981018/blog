// 1. 함수 표현식
function funcA() {
    // console.log("funcA");
}

let varA = funcA; // 함수도 값으로 취급하기 때문에 변수에 저장할 수 있다.
// console.log(varA);

let varB = function () {
    // 익명 함수
    // console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(10));
