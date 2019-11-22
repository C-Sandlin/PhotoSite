import React from 'react';
import "./BottomNav.scss"
import { FaVimeoV, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";

function BottomNav() {
    return (
        <div className="BottomNav">
            <div className="left-container">
                <h6>All images property of Colin Sandlin</h6>
            </div>
            <div className="right-container">
                <IconContext.Provider value={{ style: { fontSize: '19px' } }} >
                    <a href="https://www.colinsandlin.com"><AiFillInstagram className="social-icon" /></a>
                </IconContext.Provider>
                <IconContext.Provider value={{ style: { fontSize: '17px' } }} >
                    <a href="https://www.colinsandlin.com"><FaYoutube className="social-icon" /></a>
                    <a href="https://www.colinsandlin.com"><FaVimeoV className="social-icon" /></a>
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default BottomNav;