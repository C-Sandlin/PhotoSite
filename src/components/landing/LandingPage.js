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

        // check intertia of downward scroll
        if (event.deltaY > 120) {
            let nextProj = currentProj.nextSibling;

            if (nextProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('not-current');

                nextProj.classList.remove('not-current');
                nextProj.classList.add('current');
            } else {
                return;
            }
        }

        // check intertia of upward scroll
        if (event.deltaY < -120) {
            let prevProj = currentProj.previousSibling;

            if (prevProj !== null) {
                currentProj.classList.remove('current');
                currentProj.classList.add('not-current');

                prevProj.classList.remove('not-current');
                prevProj.classList.add('current');
            }
        }
    }

    render() {
        return (
            <>
                <div className="outer-landing" id="outer-landing">
                    <div className="inner-landing" >
                        <div className="landing-project current" id="newZealand-proj">
                        </div>
                        <div className="landing-project  not-current" id="italy-proj">
                        </div>
                    </div>
                </div>
            </>
        )
    };
}
