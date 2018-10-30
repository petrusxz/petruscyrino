import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import petrusImg from './../assets/img/petrus.jpg';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
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
                                I would like to introduce you an Application Developer from Brazil that loves 
                                so much his profession in a way that it's easy to lose a good night of sleep 
                                to talking with you about it, but never without a cup of coffee.
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
                                My perfectionism feels comfortable when gathering all the components needed to 
                                build an awesome application.
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
                            I'm always thrilled when learning new facts and mastering an important skill, 
                            but here are some technologies that I have been trying to master recently:
                        </h2>
                    </div>
                    <div className="About-skills-card">
                        <div>Angular</div>
                        <div>Karma</div>
                        <div>Jasmine</div>
                        <div>Ionic</div>
                        <div>RxJS</div>
                        <div>React</div>
                        <div>Jest</div>
                        <div>Redux</div>
                        <div>Node.js</div>
                        <div>Express.js</div>
                    </div>
                </div>
                <div className="About-resume">
                    <h3>Want to find more about me as a professional?</h3>
                    <span>
                        Download my CV
                    </span>
                </div>
            </div>
        )
    }
}

export default About;