const Button = ({ text, color, children }) => {
	// 이벤트 객체
	const onClickButton = (e) => {
		console.log(e);
		console.log(text);
	};

	return (
		<button
			onClick={onClickButton}
			// onMouseEnter={onMouseEnter}
			style={{ color: color }}
		>
			{text} - {color.toUpperCase()} {children}
		</button>
	);
};

Button.defaultProps = {
	color: "black",
};

export default Button;
