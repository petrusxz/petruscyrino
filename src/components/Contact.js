import React, { Component } from 'react';
import './Contact.css';
import linkedinIcon from './../assets/img/linkedin.png';
import githubIcon from './../assets/img/github.png';
import twitterIcon from './../assets/img/twitter.png';
import mediumIcon from './../assets/img/medium.png';
import codepenIcon from './../assets/img/codepen.png';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="Contact-header">
                    <label>
                        Let's chat and be inspired together.
                    </label>
                    <svg width="200" height="200">
                        <circle cx="92" cy="100" r="85" transform="rotate(-90, 95, 95)" />
                    </svg>
                </div>
                <div className="Contact-me">
                    <h3>Find me</h3>
                    <hr />
                </div>
                <div className="Contact-social">
                    <a href="https://www.linkedin.com/in/petrus-cyrino-37153a116/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="linkedin" />
                    </a>
                    <a href="https://github.com/petrusxz" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="github" />
                    </a>
                    <a href="https://twitter.com/Creatore_" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                    <a href="https://medium.com/@petrus.dev" target="_blank" rel="noopener noreferrer">
                        <img src={mediumIcon} alt="medium" />
                    </a>
                    <a href="https://codepen.io/petrusxz/" target="_blank" rel="noopener noreferrer">
                        <img src={codepenIcon} alt="codepen" />
                    </a>
                </div>
                <div className="Contact-mail">
                    <h3>Or</h3>
                    <a href="mailto:petrusxz@gmail.com" target="_top">
                        Email me
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;