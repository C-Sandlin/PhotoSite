import React, { useState, useEffect } from 'react';
import mainLogo from "../../assets/cs-main-logo.svg";
import "./landing.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { all } from 'q';
import TopNav from '../nav/TopNav';
import BottomNav from '../nav/BottomNav'


function LandingPageHooks() {

    const [active, setActive] = useState('newZealand');


    useEffect(() => {
        window.addEventListener('wheel', handleScroll, true);

        let landingText = document.querySelectorAll('.landing-text');
        landingText.forEach(text => {
            text.addEventListener('mousemove', (e) => {
                if (text.firstElementChild) {
                    text.firstElementChild.style.backgroundPositionX = -(e.offsetY / 5) + "px";
                    text.firstElementChild.style.backgroundPositionY = -(e.offsetX / 5) + "px";
                }
            })
        })
        // checkStatus();
    });

    let checkIntertia = (currentProj, nextProj, prevProj, event) => {
        // check intertia of downward scroll
        if (event.deltaY > 90) {

            if (nextProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('above');

                nextProj.classList.remove('below');
                nextProj.classList.add('current');

                // new stuff

                setActive({ active: `${[nextProj.id.split("-")[0]]}` });
            } else {
                return;
            }
        }

        // check intertia of upward scroll
        if (event.deltaY < -90) {

            if (prevProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('below');

                prevProj.classList.remove('above');
                prevProj.classList.add('current');


                setActive({ active: `${[prevProj.id.split("-")[0]]}` });

            } else {
                return;
            }
        }
    }


    const handleScroll = (event) => {
        let currentProj;
        let nextProj;
        let prevProj;

        if (event.target.tagName === 'DIV' && event.target.classList.contains('landing-text')) {

            currentProj = event.target.parentElement;
            nextProj = currentProj.nextSibling;
            prevProj = currentProj.previousSibling;

            checkIntertia(currentProj, nextProj, prevProj, event);
        }

        if (event.target.tagName === 'P' && event.target.parentElement.classList.contains('landing-text')) {

            currentProj = event.target.parentElement.parentElement;
            nextProj = currentProj.nextSibling;
            prevProj = currentProj.previousSibling;

            checkIntertia(currentProj, nextProj, prevProj, event);
        }
    }

    // const checkStatus = () => {

    //     if (this.state["arizona-proj"] === "active") {
    //         console.log('arizona-active')
    //     }

    // }

    const sendTo = (url) => {
        this.props.history.push(`/photos/${url}`);
    }


    return (
        <div className="outer-landing" id="outer-landing">
            <TopNav />
            <div className="inner-landing" >
                <div className="landing-project current" id="newZealand-proj">
                    <div className="landing-text">
                        <p className="project-title" id="NZTitle" onClick={() => sendTo("newZealand")}>
                            New Zealand
                        </p>
                        <p className="project-subtitle" onClick={() => sendTo("newZealand")}>
                            South Island Road Trip
                        </p>
                    </div>
                </div>
                <div className="landing-project  below" id="sanDiego-proj">
                    <div className="landing-text">
                        <p className="project-title" id="SDTitle" onClick={() => sendTo("sanDiego")}>
                            San Diego
                                </p>
                        <p className="project-subtitle" onClick={() => sendTo("sanDiego")}>
                            La Jolla, Mission Beach, Sunset Cliffs
                                </p>
                    </div>
                </div>
                <div className="landing-project  below" id="arizona-proj">
                    <div className="landing-text">
                        <p className="project-title" id="AZTitle" onClick={() => sendTo("arizona")}>
                            Arizona
                        </p>
                        <p className="project-subtitle" onClick={() => sendTo("arizona")}>
                            Havasupi Falls & The Grand Canyon
                        </p>
                    </div>
                </div>
                <div className="landing-project  below" id="italy-proj">
                    <div className="landing-text">
                        <p className="project-title" id="ITTitle" onClick={() => sendTo("northernItaly")}>
                            Northern Italy
                        </p>
                        <p className="project-subtitle" onClick={() => sendTo("northernItaly")}>
                            South Tyrol<br className="mobile-break"></br> & Venice
                        </p>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
}

export default LandingPageHooks;
