import React from 'react';
import mainLogo from "../../assets/cs-main-logo.svg";
// import { IoIosCloseCircleOutline, IoIosArrowDown } from "react-icons/io";
// import { IconContext } from "react-icons";
import "./landing.scss";


export default class LandingPage extends React.Component {

    componentDidMount = () => {
        document.getElementById('outer-landing').addEventListener('wheel', this.handleScroll, true);
    }

    componentWillUnmount = () => {
        window.getElementById('outer-landing').removeEventListener('wheel', this.handleScroll);
    }

    handleScroll = (event) => {
        let currentProj = event.target;
        let nextProj = currentProj.nextSibling;
        let prevProj = currentProj.previousSibling;

        // check intertia of downward scroll
        if (event.deltaY > 120) {

            if (nextProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('above');

                nextProj.classList.remove('below');
                nextProj.classList.add('current');
            } else {
                return;
            }
        }

        // check intertia of upward scroll
        if (event.deltaY < -120) {

            if (prevProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('below');

                prevProj.classList.remove('above');
                prevProj.classList.add('current');
            }
        }
    }

    render() {
        return (
            <>
                <div className="outer-landing" id="outer-landing">
                    <div className="inner-landing" >
                        <div className="landing-project above" id="newZealand-proj">
                        </div>
                        <div className="landing-project  current" id="sanDiego-proj">
                        </div>
                        <div className="landing-project  below" id="arizona-proj">
                        </div>
                        <div className="landing-project  below" id="italy-proj">
                        </div>
                    </div>
                </div>
            </>
        )
    };
}
