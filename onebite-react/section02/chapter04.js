// 1. spread 연산자
// -> spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
// console.log(arr3);

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    c: 3,
    d: 4,
};

let obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

function funcA(p1, p2, p3) {
    // console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// -> Rest 뒤에는 다른 매개변수를 적을 수 없음!!
function funcB(one, two, ...rest) {
    console.log(one);
    console.log(two);
    console.log(rest);
}
funcB(...arr1);
