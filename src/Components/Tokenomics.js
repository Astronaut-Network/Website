import React from "react";
import spacemanlogo from "../Images/mascotlogo.png";

import "../App.css";
import "./Tokenomics.css";

const Tokenomics = () => {
	return (
		<div className="container">
			<div className="contain">
				<div className="spacemanlogo">
					<img src={spacemanlogo} alt="" />
				</div>
				<div className="about">
					<div className="tokenomicsTitle">
						The Astronaut Protocol is a fair launched, community focused, DeFi
						Token.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
