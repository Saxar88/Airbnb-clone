import React, {useState, useRef} from "react";
import "./SearchNavbar.css";
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import {BiGlobe} from "react-icons/bi";
import {FaSearch, FaUserCircle} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import DatePicker from "./DatePicker";

function SearchNavbar() {
	const [activeStays, setActiveStays] = useState(false);
	const activateStays = () => {
		setActiveStays(true);
		setActiveExperiences(false);
		setActiveOnlineExperiences(false);
	};

	const [activeExperiences, setActiveExperiences] = useState(false);
	const activateExperiences = () => {
		setActiveStays(false);
		setActiveExperiences(true);
		setActiveOnlineExperiences(false);
	};

	const [activeOnlineExperiences, setActiveOnlineExperiences] = useState(false);
	const activateOnlineExperiences = () => {
		setActiveStays(false);
		setActiveExperiences(false);
		setActiveOnlineExperiences(true);
	};

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

	const [adultCounter, setAdultCounter] = useState(0);
	const increaseAdultCount = () => {
		setAdultCounter((count) => count + 1);
	};
	const decreaseAdultCount = () => {
		if (adultCounter > 0) {
			setAdultCounter((count) => count - 1);
		}
	};

	const [childCounter, setChildCounter] = useState(0);
	const increaseChildCount = () => {
		setChildCounter((count) => count + 1);
	};
	const decreaseChildCount = () => {
		if (childCounter > 0) {
			setChildCounter((count) => count - 1);
		}
	};

	const [infantCounter, setInfantCounter] = useState(0);
	const increaseInfantCount = () => {
		setInfantCounter((count) => count + 1);
	};
	const decreaseInfantCount = () => {
		if (infantCounter > 0) {
			setInfantCounter((count) => count - 1);
		}
	};

	const [petCounter, setPetCounter] = useState(0);
	const increasePetCount = () => {
		setPetCounter((count) => count + 1);
	};
	const decreasePetCount = () => {
		if (petCounter > 0) {
			setPetCounter((count) => count - 1);
		}
	};

	const guestNumber = adultCounter + childCounter + infantCounter;

	const userDropdownRef = useRef(null);
	const [isUserMenuDropDownOpen, setUserMenuDropDownOpen] = useState(false);
	const closeUserMenu = () => {
		setUserMenuDropDownOpen(false);
	};
	useOnClickOutside(userDropdownRef, closeUserMenu);

	return (
		<>
			<div className="navbar--header">
				<div className="header--top">
					<img
						className="header--logo"
						src={require("../assets/logo.png")}
						alt="logo"
					/>
					<div className="headerTop--menu">
						<div
							className={
								activeStays
									? "headerTop--menuOptionFocus"
									: "headerTop--menuOption"
							}
							onClick={activateStays}>
							Stays
						</div>
						<div
							className={
								activeExperiences
									? "headerTop--menuOptionFocus"
									: "headerTop--menuOption"
							}
							onClick={activateExperiences}>
							Experiences
						</div>
						<div
							className={
								activeOnlineExperiences
									? "headerTop--menuOptionFocus"
									: "headerTop--menuOption"
							}
							onClick={activateOnlineExperiences}>
							Online Experiences
						</div>
					</div>
					<div className="header--right">
						<div className="header--rightMenu">
							<p className="header--rightMenuOption">Airbnb your home</p>
							<BiGlobe className="header--globeIcon" />
							<div
								className="header--userMenuIcons"
								ref={userDropdownRef}
								onClick={() => {
									setUserMenuDropDownOpen(true);
									closeWhereMenu();
									closeCheckInMenu();
									closeCheckOutMenu();
									closeWhoMenu();
								}}>
								<GiHamburgerMenu />
								<FaUserCircle className="header--userIcon" />
							</div>
						</div>
						{isUserMenuDropDownOpen && (
							<div className="header--userMenu">
								<p className="header--userMenuSignUp">Sign up</p>
								<p>Log in</p>
								<hr />
								<p>Airbnb your home</p>
								<p>Host an experience</p>
								<p>Help</p>
							</div>
						)}
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
							closeUserMenu();
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
							closeUserMenu();
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
							closeUserMenu();
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
							closeUserMenu();
						}}>
						<div className="headerBottom--lastButtonContent">
							<p className="boldText">Who</p>
							<p className="smallText">
								{guestNumber === 0
									? "Add guests"
									: guestNumber === 1
									? guestNumber + " guest"
									: guestNumber + " guests"}
							</p>
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
							<CiCircleMinus
								className={
									adultCounter > 0
										? "who--menuCounterButton"
										: "who--menuCounterButtonDisabled"
								}
								onClick={decreaseAdultCount}
							/>
							<p>{adultCounter}</p>
							<CiCirclePlus
								className="who--menuCounterButton"
								onClick={increaseAdultCount}
							/>
						</div>
					</div>
					<hr />
					<div className="who--menuOptions">
						<div>
							<p className="who--menuOptionsBold">Children</p>
							<p className="smallText">Ages 2-12</p>
						</div>
						<div className="who--menuCounter">
							<CiCircleMinus
								className={
									childCounter > 0
										? "who--menuCounterButton"
										: "who--menuCounterButtonDisabled"
								}
								onClick={decreaseChildCount}
							/>
							<p>{childCounter}</p>
							<CiCirclePlus
								className="who--menuCounterButton"
								onClick={increaseChildCount}
							/>
						</div>
					</div>
					<hr />
					<div className="who--menuOptions">
						<div>
							<p className="who--menuOptionsBold">Infants</p>
							<p className="smallText">Under 2</p>
						</div>
						<div className="who--menuCounter">
							<CiCircleMinus
								className={
									infantCounter > 0
										? "who--menuCounterButton"
										: "who--menuCounterButtonDisabled"
								}
								onClick={decreaseInfantCount}
							/>
							<p>{infantCounter}</p>
							<CiCirclePlus
								className="who--menuCounterButton"
								onClick={increaseInfantCount}
							/>
						</div>
					</div>
					<hr />
					<div className="who--menuOptions">
						<div>
							<p className="who--menuOptionsBold">Pets</p>
							<p className="smallText link">Bringing a service animal?</p>
						</div>
						<div className="who--menuCounter">
							<CiCircleMinus
								className={
									petCounter > 0
										? "who--menuCounterButton"
										: "who--menuCounterButtonDisabled"
								}
								onClick={decreasePetCount}
							/>
							<p>{petCounter}</p>
							<CiCirclePlus
								className="who--menuCounterButton"
								onClick={increasePetCount}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default SearchNavbar;
