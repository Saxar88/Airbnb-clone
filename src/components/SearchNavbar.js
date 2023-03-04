import React, {useState, useRef} from "react";
import "./SearchNavbar.css";
import logo from "../assets/logo.png";
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import {BiGlobe} from "react-icons/bi";
import {FaSearch, FaUserCircle} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import DatePicker from "./DatePicker";

function SearchNavbar() {
	const whereDropdownRef = useRef(null);
	const [isWhereMenuDropDownOpen, setWhereMenuDropDownOpen] = useState(false);
	const closeWhereMenu = () => {
		setWhereMenuDropDownOpen(false);
	};
	useOnClickOutside(whereDropdownRef, closeWhereMenu);

	const checkInDropdownRef = useRef(null);
	const [isCheckInMenuDropDownOpen, setCheckInMenuDropDownOpen] =
		useState(false);
	const closeCheckInMenu = () => {
		setCheckInMenuDropDownOpen(false);
	};
	useOnClickOutside(checkInDropdownRef, closeCheckInMenu);

	const checkOutDropdownRef = useRef(null);
	const [isCheckOutMenuDropDownOpen, setCheckOutMenuDropDownOpen] =
		useState(false);
	const closeCheckOutMenu = () => {
		setCheckOutMenuDropDownOpen(false);
	};
	useOnClickOutside(checkOutDropdownRef, closeCheckOutMenu);

	const whoDropdownRef = useRef(null);
	const [isWhoMenuDropDownOpen, setWhoMenuDropDownOpen] = useState(false);
	const closeWhoMenu = () => {
		setWhoMenuDropDownOpen(false);
	};
	useOnClickOutside(whoDropdownRef, closeWhoMenu);

	return (
		<>
			<div className="navbar--header">
				<div className="header--top">
					<img className="header--logo" src={logo} alt="logo" />
					<div className="headerTop--menu">
						<div className="headerTop--menuOption">Stays</div>
						<div className="headerTop--menuOption">Experiences</div>
						<div className="headerTop--menuOption">Online Experiences</div>
					</div>
					<div className="header--right">
						<p>Airbnb your home</p>
						<BiGlobe className="header--globeIcon" />
						<div className="header--userMenu">
							<GiHamburgerMenu />
							<FaUserCircle className="header--userIcon" />
						</div>
					</div>
				</div>
				<div className="header--bottom">
					<button
						className="headerBottom--button headerBottom--firstButton"
						ref={whereDropdownRef}
						onClick={() => {
							setWhereMenuDropDownOpen(true);
							closeCheckInMenu();
							closeCheckOutMenu();
							closeWhoMenu();
						}}>
						<p className="boldText">Where</p>
						<p className="smallText">Search destinations</p>
					</button>
					<button
						className="headerBottom--button"
						ref={checkInDropdownRef}
						onClick={() => {
							closeWhereMenu();
							closeWhoMenu();
							setCheckInMenuDropDownOpen(true);
						}}>
						<p className="boldText">Check in</p>
						<p className="smallText">Add dates</p>
					</button>
					<button
						className="headerBottom--button"
						ref={checkOutDropdownRef}
						onClick={() => {
							closeWhereMenu();
							closeWhoMenu();
							setCheckOutMenuDropDownOpen(true);
						}}>
						<p className="boldText">Check out</p>
						<p className="smallText">Add dates</p>
					</button>
					<button
						className="headerBottom--button headerBottom--lastButton"
						onClick={() => {
							closeWhereMenu();
							closeCheckInMenu();
							closeCheckOutMenu();
							setWhoMenuDropDownOpen(true);
						}}>
						<div className="headerBottom--lastButtonContent">
							<p className="boldText">Who</p>
							<p className="smallText">Add guests</p>
						</div>
						<div className="headerBottom--searchBtn">
							<FaSearch className="header--middleSearchIcon" /> Search
						</div>
					</button>
				</div>
			</div>
			{isWhereMenuDropDownOpen && (
				<div className="where--menu">
					<p className="boldText">Search by region</p>
					<div className="where--menuRegions">
						<div>
							<img
								src={require("../assets/flexible.jpg")}
								alt="anywhere"
								className="where--menuRegion"
							/>
							<p>I'm flexible</p>
						</div>
						<div>
							<img
								src={require("../assets/middle-east.webp")}
								alt="Middle East"
								className="where--menuRegion"
							/>
							<p>Middle East</p>
						</div>
						<div>
							<img
								src={require("../assets/italy.webp")}
								alt="Italy"
								className="where--menuRegion"
							/>
							<p>Italy</p>
						</div>
						<div>
							<img
								src={require("../assets/se-asia.webp")}
								alt="Southeast Asia"
								className="where--menuRegion"
							/>
							<p>Southeast Asia</p>
						</div>
						<div>
							<img
								src={require("../assets/hungary.webp")}
								alt="Hungary"
								className="where--menuRegion"
							/>
							<p>Hungary</p>
						</div>
						<div>
							<img
								src={require("../assets/usa.webp")}
								alt="United States"
								className="where--menuRegion"
							/>
							<p>United States</p>
						</div>
					</div>
				</div>
			)}
			{(isCheckInMenuDropDownOpen || isCheckOutMenuDropDownOpen) && (
				<DatePicker />
			)}
			{isWhoMenuDropDownOpen && (
				<div className="who--menu">
					<div className="who--menuOptions">
						<div>
							<p className="who--menuOptionsBold">Adults</p>
							<p className="smallText">Ages 13 or above</p>
						</div>
						<div className="who--menuCounter">
							<CiCircleMinus className="who--menuCounterButton" />
							<p>0</p>
							<CiCirclePlus className="who--menuCounterButton" />
						</div>
					</div>
					<hr />
					<div className="who--menuOptions">
						<div>
							<p className="who--menuOptionsBold">Children</p>
							<p className="smallText">Ages 2-12</p>
						</div>
						<div className="who--menuCounter">
							<CiCircleMinus className="who--menuCounterButton" />
							<p>0</p>
							<CiCirclePlus className="who--menuCounterButton" />
						</div>
					</div>
					<hr />
					<div className="who--menuOptions">
						<div>
							<p className="who--menuOptionsBold">Infants</p>
							<p className="smallText">Under 2</p>
						</div>
						<div className="who--menuCounter">
							<CiCircleMinus className="who--menuCounterButton" />
							<p>0</p>
							<CiCirclePlus className="who--menuCounterButton" />
						</div>
					</div>
					<hr />
					<div className="who--menuOptions">
						<div>
							<p className="who--menuOptionsBold">Pets</p>
							<p className="smallText">Bringing a service animal?</p>
						</div>
						<div className="who--menuCounter">
							<CiCircleMinus className="who--menuCounterButton" />
							<p>0</p>
							<CiCirclePlus className="who--menuCounterButton" />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default SearchNavbar;
