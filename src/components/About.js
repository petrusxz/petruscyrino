import React, { Component } from 'react';

import petrusImg from './../assets/img/petrus.jpg';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="About-row">
                    <div>
                        <img src={petrusImg} alt="petrus" />
                    </div>
                    <div className="About-me">
                        <h3>Who am I?</h3>
                        <p>I'm a Full-Stack Web Developer in love with each line of my code.</p>
                        I love to solve problems. I enjoy the challenge of analyzing symptoms, identifying what is wrong, 
                        and finding the solution. I like to bring courage and creativity to problematic situations.
                    </div>
                </div>
                <div className="About-row">
                    <div className="About-expertise">
                        Web
                    </div>
                    <div className="About-expertise">
                        Mobile
                    </div>
                    <div className="About-expertise">
                        Back-end
                    </div>
                    <div className="About-expertise">
                        UI/UX
                    </div>
                </div>
            </div>
        )
    }
}

export default About;