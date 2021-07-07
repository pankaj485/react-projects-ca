import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<section className="hero" onMouseOver={closeSubmenu}>
			<div className="hero-center">
				<article className="hero-info">
					<h1>Payments infrastructre for the internet </h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero distinctio, tempore quas
						excepturi magni quaerat earum commodi, nostrum harum corporis nam deleniti esse,
						voluptatum id? Expedita ducimus rerum libero! Excepturi culpa odit voluptate laboriosam
						repellendus aut temporibus cum corrupti?
					</p>
					<button className="btn">Start Now</button>
				</article>
				<article className="hero-images">
					<img src={phoneImg} alt="phone-img" alt="phone" />
				</article>
			</div>
		</section>
	);
};

export default Hero;
