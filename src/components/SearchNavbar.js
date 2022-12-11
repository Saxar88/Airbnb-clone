import React from "react";
import "./SearchNavbar.css";
import logo from "../assets/logo.png";
import { BiGlobe } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function SearchNavbar() {
  return (
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
      <div class="header--bottom">
        <div className="headerBottom--middleButtons">
          <button className="headerBottom--middleButton">
            <p className="boldText">Where</p>
            <p>Search destinations</p>
          </button>
          <button className="headerBottom--middleButton">
            <p className="boldText">Check in</p>
            <p>Add dates</p>
          </button>
          <button className="headerBottom--middleButton">
            <p className="boldText">Check out</p>
            <p>Add dates</p>
          </button>
          <button className="headerBottom--middleButton">
            <p className="boldText">Who</p>
            <p>Add guests</p>
          </button>
          <button className="headerBottom--searchBtn">
            <FaSearch className="header--middleSearchIcon" /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchNavbar;
