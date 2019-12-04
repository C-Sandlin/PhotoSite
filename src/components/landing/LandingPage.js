import React from 'react';
import mainLogo from "../../assets/cs-main-logo.svg";
import "./landing.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { all } from 'q';
import TopNav from '../nav/TopNav';
import BottomNav from '../nav/BottomNav'


export default class LandingPage extends React.Component {

    state = {
        newZealand: "active",
        sanDiego: "inactive",
        italy: "inactive",
        arizona: "inactive"
    }

    componentDidMount = () => {
        window.addEventListener('wheel', this.handleScroll, true);

        let mobileProj = document.querySelectorAll('.landing-project');
        mobileProj.forEach(proj => {
            proj.addEventListener('touchstart', this.handleStart, true);
        })
        mobileProj.forEach(proj => {
            proj.addEventListener('touchend', this.handleEnd, true);
        })

        let landingText = document.querySelectorAll('.landing-text');
        landingText.forEach(text => {
            text.addEventListener('mousemove', (e) => {
                if (text.firstElementChild) {
                    text.firstElementChild.style.backgroundPositionX = -(e.offsetY / 5) + "px";
                    text.firstElementChild.style.backgroundPositionY = -(e.offsetX / 5) + "px";
                }
            })
        })
        this.checkStatus();
    }

    componentWillUnmount = () => {
        window.removeEventListener('wheel', this.handleScroll);
    }

    handleSwipe = (event) => {
        let currentProj;
        let nextProj;
        let prevProj;
        var newState = {};

        if (event.target.tagName === 'DIV' && event.target.classList.contains('landing-text')) {
            currentProj = event.target.parentElement;
            nextProj = currentProj.nextSibling;
            prevProj = currentProj.previousSibling;
        }

        if (event.target.tagName === 'P' && event.target.parentElement.classList.contains('landing-text')) {
            currentProj = event.target.parentElement.parentElement;
            nextProj = currentProj.nextSibling;
            prevProj = currentProj.previousSibling;
        }

        if (this.state.ts > this.state.te) {
            if (nextProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('above');

                nextProj.classList.remove('below');
                nextProj.classList.add('current');


                newState[nextProj.id.split("-")[0]] = "active";
                newState[currentProj.id.split("-")[0]] = "inactive"
                this.setState(newState);
                this.checkStatus();
            } else {
                return;
            }
        } else if (this.state.ts < this.state.te) {
            if (prevProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('below');

                prevProj.classList.remove('above');
                prevProj.classList.add('current');

                newState[prevProj.id.split("-")[0]] = "active";
                newState[currentProj.id.split("-")[0]] = "inactive"
                this.setState(newState);
                this.checkStatus();

            } else {
                return;
            }
        }
    }

    handleStart = (event) => {
        let ts;
        ts = event.touches[0].clientY;
        this.setState({ ts: ts });
    }


    handleEnd = (event) => {
        let te;
        te = event.changedTouches[0].clientY;
        this.setState({ te: te });
        this.handleSwipe(event);
    }


    handleScroll = (event) => {
        let currentProj;
        let nextProj;
        let prevProj;
        var newState = {};


        let checkInertia = () => {
            // check intertia of downward scroll
            if (event.deltaY > 90) {

                if (nextProj !== null) {
                    currentProj.classList.remove('current');
                    currentProj.classList.add('above');

                    nextProj.classList.remove('below');
                    nextProj.classList.add('current');

                    // new stuff
                    newState[nextProj.id.split("-")[0]] = "active";
                    newState[currentProj.id.split("-")[0]] = "inactive"
                    this.setState(newState);
                    this.checkStatus();
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

                    newState[prevProj.id.split("-")[0]] = "active";
                    newState[currentProj.id.split("-")[0]] = "inactive"
                    this.setState(newState);
                    this.checkStatus();

                } else {
                    return;
                }
            }
        }

        if (event.target.tagName === 'DIV' && event.target.classList.contains('landing-text')) {

            currentProj = event.target.parentElement;
            nextProj = currentProj.nextSibling;
            prevProj = currentProj.previousSibling;

            checkInertia();
        }

        if (event.target.tagName === 'P' && event.target.parentElement.classList.contains('landing-text')) {

            currentProj = event.target.parentElement.parentElement;
            nextProj = currentProj.nextSibling;
            prevProj = currentProj.previousSibling;

            checkInertia();
        }

    }

    checkStatus = () => {

        if (this.state["arizona-proj"] === "active") {
            console.log('arizona-active')
        }

    }

    sendTo = (location) => {
        this.props.history.push(`/photos/${location}`);
    }

    render() {
        return (
            <>
                <div className="outer-landing" id="outer-landing">
                    <TopNav />
                    <div className="inner-landing" >
                        <div className="landing-project current" id="newZealand-proj">
                            <div className="landing-text">
                                <p className="project-title" id="NZTitle" onClick={() => this.sendTo("newZealand")}>
                                    New Zealand
                                </p>
                                <p className="project-subtitle" onClick={() => this.sendTo("newZealand")}>
                                    South Island Road Trip
                                </p>
                            </div>
                        </div>
                        <div className="landing-project  below" id="sanDiego-proj">
                            <div className="landing-text">
                                <p className="project-title" id="SDTitle" onClick={() => this.sendTo("sanDiego")}>
                                    San Diego
                                </p>
                                <p className="project-subtitle" onClick={() => this.sendTo("sanDiego")}>
                                    La Jolla, Mission Beach, Sunset Cliffs
                                </p>
                            </div>
                        </div>
                        <div className="landing-project  below" id="arizona-proj">
                            <div className="landing-text">
                                <p className="project-title" id="AZTitle" onClick={() => this.sendTo("arizona")}>
                                    Arizona
                                </p>
                                <p className="project-subtitle" onClick={() => this.sendTo("arizona")}>
                                    Havasupi Falls & The Grand Canyon
                                </p>
                            </div>
                        </div>
                        <div className="landing-project  below" id="italy-proj">
                            <div className="landing-text">
                                <p className="project-title" id="ITTitle" onClick={() => this.sendTo("northernItaly")}>
                                    Northern Italy
                                </p>
                                <p className="project-subtitle" onClick={() => this.sendTo("northernItaly")}>
                                    South Tyrol & Venice
                                </p>
                            </div>
                        </div>
                    </div>
                    <BottomNav />
                </div>
            </>
        )
    };
}
