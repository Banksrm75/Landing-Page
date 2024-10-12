import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardRow from "./CardRow.jsx";
import Footer from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
		<>
			<Navbar />

			<div className="row">
				<div className="col-2"></div>
				<div className="col-8">
					<Jumbotron />
				</div>
				<div className="col-2"></div>
			</div>
			
			<div className="row">
				<div className="col-4"></div>
				<div className="col-4">
					<CardRow />
				</div>
				<div className="col-4"></div>
			</div>

			<Footer />

		</>
	);
};

export default Home;
