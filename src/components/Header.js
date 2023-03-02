import React, {useState, useRef} from "react";
import "./Header.css";
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import logo from "../assets/logo.png";
import {BiGlobe} from "react-icons/bi";
import {FaSearch} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import SearchNavbar from "./SearchNavbar";
import FilterMenu from "./FilterMenu";

function Header() {
	const searchRef = useRef(null);
	const [showSearch, setShowSearch] = useState(false);

	const closeSearch = () => {
		setShowSearch(false);
	};

	useOnClickOutside(searchRef, closeSearch);

	return (
		<>
			{!showSearch && (
				<>
					<div className="header" ref={searchRef}>
						<img className="header--logo" src={logo} alt="logo" />
						<div className="header--middle">
							<div
								className="header--middleButtons"
								onClick={() => setShowSearch(true)}>
								<button className="header--middleButton">Anywhere</button>
								<button className="header--middleButton">Any week</button>
								<button className="header--middleButtonGuests">
									Add guests
								</button>
								<FaSearch className="header--middleSearchIcon" />
							</div>
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
					<FilterMenu />
				</>
			)}
			{showSearch && <SearchNavbar />}
		</>
	);
}

export default Header;
