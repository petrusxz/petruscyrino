import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './About.css';

import petrusImg from './../assets/img/petrus.jpg';
import webIcon from './../assets/img/web.svg';
import mobileIcon from './../assets/img/mobile.svg';
import backendIcon from './../assets/img/back-end.svg';

class About extends Component {
    render() {
        return (
            <div>
                <div className="About-container">
                    <CSSTransitionGroup
                        transitionName="Appear-animation"
                        transitionAppear={true}
                        transitionAppearTimeout={800}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <div className="About-header">
                            <img src={petrusImg} alt="petrus" />
                            <hr />
                            <div className="About-me">
                                <h3>Hello,</h3>
                                I would like to introduce you an Application Developer compromised with his dream 
                                to create amazing experiences and the propensity to miss sleep in the process, but never without a cup of coffee.
                            </div>
                        </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="Appear-animation"
                        transitionAppear={true}
                        transitionAppearTimeout={800}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <div className="About-row">
                            <div className="About-expertise">
                                <h3>Front-end Developer</h3>
                                <hr />
                                <p>
                                    Working with the client side it's like letting my mind run free in an open field.
                                    My perfectionism feels comfortable when gathering all the components needed to give life to ideas.
                                </p>
                            </div>
                            <div className="About-expertise">
                                <h3>Back-end Developer</h3>
                                <hr />
                                <p>
                                    I like to work with applications that have consistency and a well-assembled core.
                                    I believe that details are important even under the hood, so we can keep the
                                    engine powerful, tight and clean.
                                </p>
                            </div>
                        </div>
                    </CSSTransitionGroup>
                </div>
                <div className="About-skills">
                    <div className="About-skills-intro">
                        <h1>A language-agnostic developer</h1>
                        <h2>
                            I'm always thrilled when learning new techniques and mastering an important skill.
                            Here are some technologies that I have been trying to master recently:
                        </h2>
                    </div>
                    <div className="About-skills-card">
                        <div>
                            <img src={webIcon} alt="web" />
                            <label>Web</label>
                            <span>Angular</span>
                            <span>RxJS</span>
                            <span>Karma & Jasmine</span>
                            <span>React.js</span>
                            <span>Jest</span>
                        </div>
                        <div>
                            <img src={mobileIcon} alt="mobile" />
                            <label>Mobile</label>
                            <span>Ionic Framework</span>
                            <span>Cordova</span>
                            <span>React Native</span>
                            <span>Redux</span>
                        </div>
                        <div>
                            <img src={backendIcon} alt="backend" />
                            <label>Back-end</label>
                            <span>Node.js</span>
                            <span>Mocha & Chai</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>ASP.Net Core 2</span>
                        </div>
                    </div>
                </div>
                <div className="About-resume">
                    <h3>Want to know more about my experience?</h3>
                    <a href="assets/docs/Petrus_CV.pdf" download>
                        Download my CV
                    </a>
                </div>
            </div>
        )
    }
}

export default About;