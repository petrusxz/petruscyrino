import React, { Component } from 'react';

import petrusImg from './../assets/img/petrus.jpg';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div>
                    <img src={petrusImg} alt="petrus" />
                </div>
                <div>
                    <p>I'm a Full-Stack Developer in love with each line of my code.</p>
                    I love to solve problems. I enjoy the challenge of analyzing symptoms, identifying what is wrong, and finding the solution. I like to bring courage and creativity to problematic situations.
                </div>
            </div>
        )
    }
}

export default About;