function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor

        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });

    return promise;
}

// then
// -> 그 후에 (성공한 뒤에 실행되게)
// -> then()는 promise 자체를 반환한다.
add10(10)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .catch((error) => {
        console.log(error);
    });
