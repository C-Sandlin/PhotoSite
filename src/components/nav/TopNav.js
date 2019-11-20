import React from 'react';
import mainLogo from "../../assets/cs-main-logo.svg";
import { IoIosClose, IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import "./TopNav.scss"

function TopNav() {
    return (
        <div className="topnav" id="myTopnav">
            <div className="topnav-logo-container">
                <a href="home">
                    <img src={mainLogo} className="mainLogo" alt="Colin Sandlin Photography"></img>
                </a>
            </div>
            <div className="topnav-links-container">
                <div className="navlinks-mobile">
                    <a className="hamburger" onClick={showMobileMenu} >
                        <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                            <IoMdMenu />
                        </IconContext.Provider></a>
                </div>
                <div className="navlinks-desktop">
                    <a className="navlink" href="home">All&nbsp;Photos</a>
                    <div className="dropdown">
                        <a className="dropbtn" >
                            Journeys&nbsp;<IoIosArrowDown />
                        </a>
                        <div className="dropdown-content-desktop" id="dropdownContentDesktop">
                            <a href="home">Link 1</a>
                            <a href="home">Link 2</a>
                            <a href="home">Link 3</a>
                        </div>
                    </div>
                    <a href="home" className="navlink">Prints</a>
                    <a href="home" className="navlink">About&nbsp;Me</a>
                </div>
                <div className="nav-menu-mobile" id="navMenu">
                    <p onClick={showMobileMenu} id="closeMenu">
                        <IconContext.Provider value={{ style: { fontSize: '40px' } }}>
                            <IoIosClose />
                        </IconContext.Provider>
                    </p>
                    <div className="mobile-nav-div">
                        <a href="home" className="navlink mobileNav">All Photos</a>
                    </div>
                    <div className="dropdown-mobile mobile-nav-div" onClick={toggleMobileDropDown} >
                        <a className="dropbtn mobileNav" >Journeys&nbsp;<IoIosArrowDown /></a>
                        <div className="dropdown-content-mobile" id="dropdownContentMobile">
                            <a href="home" className="mobileNav">Link 1</a>
                            <a href="home" className="mobileNav">Link 2</a>
                            <a href="home" className="mobileNav">Link 3</a>
                        </div>
                    </div>
                    <div className="mobile-nav-div">
                        <a href="home" className="navlink mobileNav">Prints</a>
                    </div>
                    <div className="mobile-nav-div">
                        <a href="home" className="navlink mobileNav">About Me</a>
                    </div>
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

function toggleMobileDropDown() {

}