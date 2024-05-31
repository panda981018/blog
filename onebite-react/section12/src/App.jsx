import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useReducer, useRef } from "react";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/Notfound";
import Edit from "./pages/Edit";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            console.log(action.data);
            return [...state, action.data];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item
            );
    }
}

function App() {
    const nav = useNavigate();
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // 새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            id,
            createdDate,
            emotionId,
            content,
        });
    };

    // 기존 일기 삭제

    return (
        <>
            <button
                onClick={() => {
                    onCreate(new Date().getTime(), 1, "hello");
                }}
            >
                일기 추가 테스트
            </button>
            <button
                onClick={() => {
                    onUpdate(1, new Date().getTime(), 3, "수정된일기입니다요~");
                }}
            >
                일기 수정 테스트
            </button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/new" element={<New />} />
                <Route path="edit/:id" element={<Edit />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
