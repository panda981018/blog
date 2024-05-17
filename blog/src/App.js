/* eslint-disable */

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '성수 중식 맛집']); // ES6 destructuring 문법

  let [따봉, 따봉변경함수] = useState(0);

  // let posts = "강남 고기 맛집";

  // 숙제2 해답
  function 제목바꾸기() {
    let newContent = [...글제목]; // 1. 복사본을 만든다.
    newContent[0] = '여자 코트 추천'; // 2. 바꿀 값을 바꾼다.
    글제목변경(newContent); // 3. 값변경함수에 변경된 값을 넣는다.
  }

  // 숙제3 '버튼'을 누르면 제목들을 글자순 정렬되게 하기.
  function 제목정렬() {
    let newContent = [...글제목]; // 1. 복사본을 만든다.
    newContent.sort(); // 2. 정렬한다.
    글제목변경(newContent); // 3. 값변경함수에 변경된 값을 넣는다.
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      {/* 숙제2 */}
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}

      {/* 숙제3 */}
      {/* <button onClick={ 제목정렬 }>버튼</button> */}

      {/* 숙제1 */}
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경함수( 따봉 + 1 ) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] }</h3>
        <p>5월 12일 발행</p>
        <hr/>
      </div>

      {/* HTML 한 단어로 줄여서 쓸 수 있는 방법 : Component */}
      <Modal/>

    </div>
  );
}

/* Component 만드는 법
1. Component를 function으로 만든다.
2. 해당 component를 넣고 싶은 자리에 <내가 만든 컴포넌트 이름></내가 만든 컴포넌트> 작성

<주의사항>
- 이름은 대문자로 시작해야 한다.
*/
function Modal() {
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
