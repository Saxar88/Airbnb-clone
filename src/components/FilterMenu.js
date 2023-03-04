import React, {useState} from "react";
import "./FilterMenu.css";

function Filters() {
	const sorting = [
		{label: "Trending", icon: require("../assets/trending.jpg")},
		{label: "Tiny homes", icon: require("../assets/tiny-homes.jpg")},
		{label: "OMG!", icon: require("../assets/omg.jpg")},
		{label: "Amazing views", icon: require("../assets/amazing-views.jpg")},
		{label: "Farms", icon: require("../assets/farms.jpg")},
		{label: "Arctic", icon: require("../assets/arctic.jpg")},
		{label: "Cabins", icon: require("../assets/cabins.jpg")},
		{label: "Beachfront", icon: require("../assets/beachfront.jpg")},
		{label: "A-frames", icon: require("../assets/a-frames.jpg")},
		{label: "Ski-in/out", icon: require("../assets/ski.jpg")},
		{label: "Luxe", icon: require("../assets/luxe.jpg")},
		{label: "Top of the world", icon: require("../assets/top.jpg")},
		{label: "Castles", icon: require("../assets/castles.jpg")},
		{label: "Treehouses", icon: require("../assets/treehouses.jpg")},
		{
			label: "Historical homes",
			icon: require("../assets/historical-homes.jpg"),
		},
		{label: "Windmills", icon: require("../assets/windmills.jpg")},
		{label: "Mansions", icon: require("../assets/mansions.jpg")},
		{label: "Islands", icon: require("../assets/islands.jpg")},
		{label: "Towers", icon: require("../assets/towers.jpg")},
		{label: "Caves", icon: require("../assets/caves.jpg")},
	];

	const [activeFilter, setActiveFilter] = useState(0);

	return (
		<div className="filters">
			<div className="filters--list">
				{sorting.map((item, i) => (
					<div
						className={i === activeFilter ? "filter--focus" : "filter"}
						key={i}
						onClick={() => setActiveFilter(i)}>
						<img src={item.icon} alt="" className="filter--image" />
						{item.label}
					</div>
				))}
			</div>
		</div>
	);
}

export default Filters;
