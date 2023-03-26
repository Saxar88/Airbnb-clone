import React, { useState, useRef } from "react";
import "./Header.css";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { BiGlobe } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchNavbar from "./SearchNavbar";
import FilterMenu from "./FilterMenu";

function Header(closeWhoMenu, closeCheckInMenu, closeCheckOutMenu) {
	const searchRef = useRef(null);
	const [showSearch, setShowSearch] = useState(false);
	const closeSearch = () => {
		setShowSearch(false);
	};
	useOnClickOutside(searchRef, closeSearch);

	const userDropdownRef = useRef(null);
	const [isUserMenuDropDownOpen, setUserMenuDropDownOpen] = useState(false);
	const closeUserMenu = () => {
		setUserMenuDropDownOpen(false);
	};
	useOnClickOutside(userDropdownRef, closeUserMenu);

	return (
		<>
			<div className="header" ref={searchRef}>
				<img
					className="header--logo"
					src={require("../assets/logo.png")}
					alt="logo"
				/>
				<div className="header--middle">
					<div
						className={!showSearch ? "searchNavbar--hidden" : "searchNavbar"}>
						<SearchNavbar />
					</div>
					<div
						className="header--middleButtons"
						onClick={() => setShowSearch(true)}>
						<button className="header--middleButton">Anywhere</button>
						<button className="header--middleButton">Any week</button>
						<button className="header--middleButtonGuests">Add guests</button>
						<FaSearch className="header--middleSearchIcon" />
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
			<FilterMenu />
		</>
	);
}

export default Header;
