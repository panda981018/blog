import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input
                checked={isDone}
                type="checkbox"
                onChange={onChangeCheckbox}
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prev, next) => {
//     // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//     // T -> props 바뀌지 않음 -> 리렌더링 X
//     // F -> props 바뀜 -> 리렌더링 O

//     if (prev.id !== next.id) return false;
//     if (prev.isDone !== next.isDone) return false;
//     if (prev.content !== next.content) return false;
//     if (prev.date !== next.date) return false;

//     return true;
// });

export default memo(TodoItem);
