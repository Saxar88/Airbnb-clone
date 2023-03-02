import React from "react";
import "./Card.css";
import {AiFillStar} from "react-icons/ai";

function Card({image, title, description, price, rating}) {
	return (
		<div className="card">
			<img src={image} alt="" />
			<div className="card--info">
				<div className="card--infoData">
					<p className="card--infoTitle">{title}</p>
					<p>{description}</p>
					<p>
						<b className="card--infoPrice">{price}</b> per night
					</p>
				</div>
				{rating ? (
					<div className="card--rating">
						<AiFillStar className="card--ratingStar" />
						<p>{rating}</p>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default Card;
