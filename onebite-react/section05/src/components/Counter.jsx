import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	console.log(count);

	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				버튼
			</button>
		</div>
	);
};

export default Counter;
