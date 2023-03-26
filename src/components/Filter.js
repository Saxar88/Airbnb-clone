import React from "react";
import "./Filter.css";

function Filter({ icon, title }) {
	return (
		<div className="filter">
			<img src={icon} alt="" />
			{title}
		</div>
	);
}

export default Filter;
