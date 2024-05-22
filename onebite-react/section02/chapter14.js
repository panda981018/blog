// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
    // 결과값이 프로미스로 반환됨.
    // return {
    //     name: "정지원",
    //     id: "jiwon",
    // };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "정지원",
                id: "jiwon",
            });
        }, 1500);
    });
}

// console.log(getData());

// await
// async 함수 내에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();
