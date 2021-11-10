import React from "react";
import logo from "../Images/mascotlogo.png";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
						<img className="logo" src={logo} alt="" />
						<p className="logo_name">Astronaut Protocol</p>
					</a>
				</div>
				<div className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item">
							<p className="navlink">About</p>
						</a>
						<a className="navbar-item">
							<p className="navlink">Tokenomics</p>
						</a>{" "}
						<a className="navbar-item">
							<p className="navlink">FAQ</p>
						</a>{" "}
						<a className="navbar-item">
							<p className="navlink">How To Buy</p>
						</a>
						<a className="navbar-item">
							<p className="navlink">Roadmap</p>
						</a>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a href="" className="button is-info">
									<strong>Follow Us</strong>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
