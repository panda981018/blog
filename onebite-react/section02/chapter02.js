// function returnFalse() {
//     console.log("False함수");
//     return undefined;
// }

// function returnTrue() {
//     console.log("True함수");
//     return 10;
// }

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name);
}

let person = { name: "지원" };
printName(person);
printName();
