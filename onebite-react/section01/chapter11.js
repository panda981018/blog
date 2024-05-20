// 함수 선언

function getArea(width, height) {
    function another() {
        // 중첩 함수
        console.log("another");
    }

    another();
    let area = width * height;

    return area;
}

let area1 = getArea(100, 200);
let area2 = getArea(10, 20);
let area3 = getArea(120, 120);

console.log(area1, area2, area3);
