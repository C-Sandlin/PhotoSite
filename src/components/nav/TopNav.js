import React from 'react';
// import mainLogo from "../../assets/cs-main-logo.svg";
import mainLogo from "../../assets/Logo_Lockup.svg";
import { IoIosClose, IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import "./TopNav.scss"

function TopNav() {
    return (
        <div className="topnav" id="myTopnav">
            <div className="topnav-logo-container">
                <a href="/home">
                    <img src={mainLogo} className="mainLogo" alt="Colin Sandlin Photography"></img>
                </a>
            </div>
            <div className="topnav-links-container">
                <div className="navlinks-mobile">
                    <a className="hamburger" onClick={showMobileMenu} >
                        <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                            <IoMdMenu />
                        </IconContext.Provider>
                    </a>
                </div>
                <div className="navlinks-desktop">
                    <a className="navlink" href="/allPhotos"><span className="link-numbers">01</span>All&nbsp;Photos</a>
                    <div className="dropdown">
                        <a className="dropbtn">
                            <span className="link-numbers">02</span>
                            Journeys&nbsp;<IoIosArrowDown />
                        </a>
                        <div className="dropdown-content-desktop" id="dropdownContentDesktop">
                            <a href="/journeys/NewZealand">New Zealand</a>
                            <a href="/journeys/NorthernItaly">Northern Italy</a>
                            <a href="/journeys/Yosemite">Yosemite</a>
                            <a href="/journeys/SanDiego">San Diego</a>
                            <a href="/journeys/Arizona">Arizona</a>
                            <a href="/journeys/Yellowstone">Yellowstone</a>
                            <a href="/journeys/Oregon">Oregon</a>
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
                            <a href="/journeys/NewZealand" className="mobileNav">New Zealand</a>
                            <a href="/journeys/NorthernItaly" className="mobileNav">Northern Italy</a>
                            <a href="/journeys/Yosemite" className="mobileNav">Yosemite</a>
                            <a href="/journeys/SanDiego" className="mobileNav">San Diego</a>
                            <a href="/journeys/Arizona" className="mobileNav">Arizona</a>
                            <a href="/journeys/Yellowstone" className="mobileNav">Yellowstone</a>
                            <a href="/journeys/Oregon" className="mobileNav">Oregon</a>
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