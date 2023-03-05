import React, {useState} from "react";
import "./FilterMenu.css";
import {BsSliders} from "react-icons/bs";
import filters from "../assets/filters";

function FilterMenu() {
	const [activeFilter, setActiveFilter] = useState(0);

	return (
		<div className="filters">
			<div className="filters--list">
				{filters.map((item, i) => (
					<div
						className={i === activeFilter ? "filter--focus" : "filter"}
						key={i}
						onClick={() => setActiveFilter(i)}>
						<img src={item.icon} alt="" className="filter--image" />
						{item.label}
					</div>
				))}
			</div>
			<div className="filters--button">
				<BsSliders />
				<p>Filters</p>
			</div>
		</div>
	);
}

export default FilterMenu;
