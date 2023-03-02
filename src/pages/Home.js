import React from "react";
import locations from "../assets/locations";
import Card from "../components/Card";
import "./Home.css";

function Home() {
	const cards = locations.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	return (
		<div className="home">
			<div className="home--section">{cards}</div>
		</div>
	);
}

export default Home;
