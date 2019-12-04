import React from 'react';
// import mainLogo from "../../assets/cs-main-logo.svg";
import mainLogo from "../../assets/Logo_Lockup.svg";
import mobileLogo from "../../assets/Logo_Badge.svg"
import { IoIosClose, IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaVimeoV, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./TopNav.scss"
import "../../styles/variables.scss";
import BottomNav from './BottomNav';

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
                    <div className="dropdown">
                        <a className="dropbtn">
                            <span className="link-numbers">01</span>
                            Photos&nbsp;<IoIosArrowDown />
                        </a>
                        <div className="dropdown-content-desktop" id="dropdownContentDesktop">
                            <a href="/photos/NewZealand">New Zealand</a>
                            <a href="/photos/NorthernItaly">Northern Italy</a>
                            <a href="/photos/Yosemite">Yosemite</a>
                            <a href="/photos/SanDiego">San Diego</a>
                            <a href="/photos/Arizona">Arizona</a>
                            <a href="/photos/Yellowstone">Yellowstone</a>
                            <a href="/photos/Oregon">Oregon</a>
                        </div>
                    </div>
                    <a href="/videos" className="navlink"><span className="link-numbers">02</span>Video</a>
                    <a href="home" className="navlink"><span className="link-numbers">03</span>Prints</a>
                    <a href="home" className="navlink"><span className="link-numbers">04</span>About&nbsp;Me</a>
                </div>
                <div className="nav-menu-mobile" id="navMenu">
                    <p onClick={showMobileMenu} id="closeMenu">
                        <IconContext.Provider value={{ style: { fontSize: '40px' } }}>
                            <IoIosClose />
                        </IconContext.Provider>
                    </p>
                    <div className="mobile-nav-logo">
                        <img src={mobileLogo} className="mobileLogo" alt="Colin Sandlin Photography"></img>
                    </div>
                    <div className="dropdown-mobile mobile-nav-div" >
                        <p className="dropbtn mobileNav" ><span className="link-numbers">01</span>Photos</p>
                        <div className="dropdown-content-mobile" id="dropdownContentMobile">
                            <a href="/photos/NewZealand" className="mobileNav">New Zealand</a>
                            <a href="/photos/NorthernItaly" className="mobileNav">Northern Italy</a>
                            <a href="/photos/Yosemite" className="mobileNav">Yosemite</a>
                            <a href="/photos/SanDiego" className="mobileNav">San Diego</a>
                            <a href="/photos/Arizona" className="mobileNav">Arizona</a>
                            <a href="/photos/Yellowstone" className="mobileNav">Yellowstone</a>
                            <a href="/photos/Oregon" className="mobileNav">Oregon</a>
                        </div>
                    </div>
                    <div className="mobile-nav-div">
                        <a href="/videos" className="navlink mobileNav"><span className="link-numbers">02</span>Video</a>
                    </div>
                    <div className="mobile-nav-div">
                        <a href="/home" className="navlink mobileNav"><span className="link-numbers">03</span>Prints</a>
                    </div>
                    <div className="mobile-nav-div">
                        <a href="/home" className="navlink mobileNav"><span className="link-numbers">04</span>About Me</a>
                    </div>
                    <div className="mobile-bottom-nav">
                        <IconContext.Provider value={{ style: { fontSize: '19px' } }} >
                            <a href="https://www.colinsandlin.com"><AiFillInstagram className="social-icon" /></a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ style: { fontSize: '17px' } }} >
                            <a href="https://www.colinsandlin.com"><FaYoutube className="social-icon" /></a>
                            <a href="https://www.colinsandlin.com"><FaVimeoV className="social-icon" /></a>
                        </IconContext.Provider>
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