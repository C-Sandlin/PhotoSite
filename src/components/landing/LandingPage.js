import React from 'react';
import mainLogo from "../../assets/cs-main-logo.svg";
import "./landing.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import { all } from 'q';
import TopNav from '../nav/TopNav';


export default class LandingPage extends React.Component {

    state = {
        'newZealand-proj': "active",
        'sanDiego-proj': "inactive",
        'italy-proj': "inactive",
        'arizona-proj': "inactive"
    }

    componentDidMount = () => {
        window.addEventListener('wheel', this.handleScroll, true);

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

        if (event.target.tagName === 'P' && event.target.parentElement.classList.contains('landing-text')) {

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
                    <TopNav />
                    <div className="inner-landing" >
                        <div className="landing-project current" id="newZealand-proj">
                            <div className="landing-text">
                                <p className="project-title" id="NZTitle">New<br class="mobile-break"></br> Zealand</p>
                                <p className="project-subtitle">South Island Road Trip</p>
                            </div>
                        </div>
                        <div className="landing-project  below" id="sanDiego-proj">
                            <div className="landing-text">
                                <p className="project-title" id="SDTitle">San<br class="mobile-break"></br> Diego</p>
                                <p className="project-subtitle">La Jolla, Mission Beach, Sunset Cliffs</p>
                            </div>
                        </div>
                        <div className="landing-project  below" id="arizona-proj">
                            <div className="landing-text">
                                <p className="project-title" id="AZTitle">Arizona</p>
                                <p className="project-subtitle">Havasupi Falls & The Grand Canyon</p>
                            </div>
                        </div>
                        <div className="landing-project  below" id="italy-proj">
                            <div className="landing-text">
                                <p className="project-title" id="ITTitle">Northern <br class="mobile-break"></br>Italy</p>
                                <p className="project-subtitle">South Tyrol & Venice</p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    };
}
