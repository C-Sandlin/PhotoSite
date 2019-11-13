import React from 'react';
import mainLogo from "../../assets/cs-main-logo.svg";
// import { IoIosCloseCircleOutline, IoIosArrowDown } from "react-icons/io";
// import { IconContext } from "react-icons";
import "./landing.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { all } from 'q';


export default class LandingPage extends React.Component {

    state = {
        'newZealand-proj': "active",
        'sanDiego-proj': "inactive",
        'italy-proj': "inactive",
        'arizona-proj': "inactive"
    }

    componentDidMount = () => {
        window.addEventListener('wheel', this.handleScroll, true);
        this.checkStatus();
    }

    componentWillUnmount = () => {
        window.removeEventListener('wheel', this.handleScroll);
    }

    handleScroll = (event) => {
        let currentProj;
        let nextProj;
        let prevProj;
        var newState = {};

        let checkIntertia = () => {
            // check intertia of downward scroll
            if (event.deltaY > 90) {

                if (nextProj !== null) {
                    currentProj.classList.remove('current');
                    currentProj.classList.add('above');

                    nextProj.classList.remove('below');
                    nextProj.classList.add('current');

                    // new stuff
                    newState[nextProj.id] = "active";
                    newState[currentProj.id] = "inactive"
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

                    newState[prevProj.id] = "active";
                    newState[currentProj.id] = "inactive"
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

            checkIntertia();
        }

        if (event.target.tagName === 'A' && event.target.parentElement.classList.contains('landing-text')) {

            currentProj = event.target.parentElement.parentElement;
            nextProj = currentProj.nextSibling;
            prevProj = currentProj.previousSibling;

            checkIntertia();
        }

    }

    checkStatus = () => {

        if (this.state["arizona-proj"] === "active") {
            console.log('arizona-active')
        }

    }

    render() {

        return (
            <>
                <div className="outer-landing" id="outer-landing">
                    <div className="inner-landing" >
                        <div className="landing-project current" id="newZealand-proj">
                            <div className="landing-text">
                                <a href="home" className="project-title">New Zealand</a>
                                <a href="home" className="project-subtitle">South Island Road Trip</a>
                            </div>
                        </div>
                        <div className="landing-project  below" id="sanDiego-proj">
                            <div className="landing-text">
                                <a href="home" className="project-title">San Diego</a>
                                <a href="home" className="project-subtitle">California</a>
                            </div>
                        </div>
                        <div className="landing-project  below" id="arizona-proj">
                            <div className="landing-text">
                            </div>
                        </div>
                        <div className="landing-project  below" id="italy-proj">
                            <div className="landing-text">
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}
