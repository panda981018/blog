import "./Header.css";
import { memo } from "react";

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

// 불필요한 리렌더링을 방지하기 위해서 memo(Header)를 export 한다.
export default memo(Header);

// export default Header;
