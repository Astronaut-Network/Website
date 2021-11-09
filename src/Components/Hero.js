import React from "react";

import image from "../Images/heroimage.jpg";
// import superhero from "../Images/superhero.png";

const Hero = () => {
	return (
		<section style={{ backgroundImage: `url(${image})` }} class="heroSection">
			<div className="myContainer">
				<div className="myHero">
					<div className="logoHero">
						<img src={require("../Images/superhero.png")} alt="" />
					</div>
					<div className="content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab totam
						inventore vitae tempora! Expedita quaerat beatae, dicta harum sint
						earum odit nesciunt similique pariatur praesentium eius optio,
						quidem, blanditiis dolore.
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
