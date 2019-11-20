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
                    <a className="navlink" href="home"><span className="link-numbers">01</span>All&nbsp;Photos</a>
                    <div className="dropdown">
                        <a className="dropbtn" >
                            <span className="link-numbers">02</span>
                            Journeys&nbsp;<IoIosArrowDown />
                        </a>
                        <div className="dropdown-content-desktop" id="dropdownContentDesktop">
                            <a href="home">New Zealand</a>
                            <a href="home">Northern Italy</a>
                            <a href="home">San Diego</a>
                            <a href="home">Arizona</a>
                            <a href="home">Yosemite</a>
                        </div>
                    </div>
                    <a href="home" className="navlink"><span className="link-numbers">03</span>Prints</a>
                    <a href="home" className="navlink"><span className="link-numbers">04</span>About&nbsp;Me</a>
                </div>
                <div className="nav-menu-mobile" id="navMenu">
                    <p onClick={showMobileMenu} id="closeMenu">
                        <IconContext.Provider value={{ style: { fontSize: '40px' } }}>
                            <IoIosClose />
                        </IconContext.Provider>
                    </p>
                    <div className="mobile-nav-div">
                        <a href="home" className="navlink mobileNav"><span className="link-numbers">01</span>All Photos</a>
                    </div>
                    <div className="dropdown-mobile mobile-nav-div" >
                        <p className="dropbtn mobileNav" ><span className="link-numbers">02</span>Journeys</p>
                        <div className="dropdown-content-mobile" id="dropdownContentMobile">
                            <a href="home" className="mobileNav">New Zealand</a>
                            <a href="home" className="mobileNav">Northern Italy</a>
                            <a href="home" className="mobileNav">San Diego</a>
                            <a href="home" className="mobileNav">Arizona</a>
                            <a href="home" className="mobileNav">Yosemite</a>
                        </div>
                    </div>
                    <div className="mobile-nav-div">
                        <a href="home" className="navlink mobileNav"><span className="link-numbers">03</span>Prints</a>
                    </div>
                    <div className="mobile-nav-div">
                        <a href="home" className="navlink mobileNav"><span className="link-numbers">04</span>About Me</a>
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

// function toggleMobileDropDown() {
//     let mobileDropDiv = document.querySelector('#dropdownContentMobile');

//     if (mobileDropDiv.className === "dropdown-content-mobile") {
//         mobileDropDiv.className += " showit";
//     } else if (mobileDropDiv.className === "dropdown-content-mobile showit") {
//         mobileDropDiv.className = "dropdown-content-mobile";
//     }
// } 