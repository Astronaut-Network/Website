import logo from "../Images/Astronaut_Logo.png";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
						<img className="logo" src={logo} alt="" />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
