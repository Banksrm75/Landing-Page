import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardRow from "./CardRow.jsx";
import Footer from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
		<>
			<div className="row">
				<div className="col-12">
					<Navbar />
				</div>
			</div>

			<div className="row">
				<div className="col-1"></div>
				<div className="col-10">
					<Jumbotron />
				</div>
				<div className="col-1"></div>
			</div>
			
			<div className="row">
				<div className="col-1"></div>
				<div className="col-10">
					<CardRow />
				</div>
				<div className="col-1"></div>
			</div>

			<div className="row">
				<div className="col-12">
					<Footer />
				</div>				
			</div>

		</>
	);
};

export default Home;
