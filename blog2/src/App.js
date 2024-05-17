import logo from './logo.svg';
import './App.css';

function App() {

  let blogTitle = "블로그 글 제목임.";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그입니다요</h4>
      </div>
      <div className="list">
        <h4>{ blogTitle }</h4>
        <p>5월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
