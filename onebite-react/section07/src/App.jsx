import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1. 마운트 : 탄생
    // 최초 한번만 실행시키고 싶다면 빈배열을 넘기면 됨.
    useEffect(() => {
        console.log("mount");
    }, []);

    // 2. 업데이트 : 변화, 리렌더링
    // deps 생략 = 컴포넌트 실행 최초 ~ 업데이트가 일어날 때마다 실행됨.
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });

    // 3. 언마운트 : 죽음

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
