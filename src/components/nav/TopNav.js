import React from 'react';
import mainLogo from "../../assets/cs-main-logo.svg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import "./TopNav.scss"

function TopNav() {
    return (
        <div className="topnav" id="myTopnav">
            <div className="topnav-logo-container">
                <a>
                    <img src={mainLogo} className="mainLogo"></img>
                </a>
            </div>
            <div className="topnav-links-container">
                <div className="navlinks-mobile">
                    <a className="hamburger" onClick={showMobileMenu}>&#9776;</a>
                </div>
                <div className="navlinks-desktop">
                    <a href="#" className="navlink">All Photos</a>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Dropdown
                        </button>
                        {/* <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div> */}
                    </div>
                    <a href="#" className="navlink">Purchase</a>
                    <a href="#" className="navlink">About Me</a>
                </div>
                <div className="nav-menu-mobile" id="navMenu">
                    <p onClick={showMobileMenu} id="closeMenu">
                        <IconContext.Provider value={{ style: { fontSize: '40px' } }}>
                            <IoIosCloseCircleOutline />
                        </IconContext.Provider>
                    </p>
                    <a href="#" className="navlink">All Photos</a>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Dropdown
                        </button>
                        {/* <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div> */}
                    </div>
                    <a href="#" className="navlink">Purchase</a>
                    <a href="#" className="navlink">About Me</a>
                </div>
            </div>

        </div>
    );
}
export default TopNav;

function showMobileMenu() {
    let linkgroup = document.getElementById("navMenu");
    if (linkgroup.className === "nav-menu-mobile") {
        linkgroup.className += " active";
    } else {
        linkgroup.className = "nav-menu-mobile";
    }
}
