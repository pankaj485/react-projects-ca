import React, { useImperativeHandle, useState } from "react";
function App() {
	const [count, setCount] = useState();
	const [text, setText] = useState([]);

	const newArray = [];
	const dummyText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et corporis neque quia quas quis quasi excepturi reprehenderit deleniti, amet necessitatibus eaque, distinctio ipsum? A ipsam quo voluptatem totam omnis!";

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		if (count <= 0 || count == undefined) {
			amount = 1;
		}
		for (let i = 0; i < amount; i++) {
			newArray.push(dummyText);
		}
		setText(newArray);
		setCount("");
	};

	return (
		<section className="section-center">
			<h3>lorem ipsum project </h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">paragraphs : </label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => {
						setCount(e.target.value);
					}}
				/>
				<button type="submit" className="btn">
					get paragraph
				</button>
			</form>
			<article className="lorem-text"></article>

			{text.map((item, index) => {
				return (
					<p key={index}>
						{index + 1}
						{"."} {item}
					</p>
				);
			})}
		</section>
	);
}

export default App;
