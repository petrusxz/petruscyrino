import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './Portfolio.css';
import lockIcon from './../assets/img/lock.svg';
import linkIcon from './../assets/img/link.svg';
import npmIcon from './../assets/img/npm.png';

class Portfolio extends Component {
    render() {
        return (
            <div>
               <CSSTransitionGroup
                    transitionName="Appear-animation"
                    transitionAppear={true}
                    transitionAppearTimeout={800}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="Portfolio-header">
                        <h2>
                            While doing what I love the most I found out that the only way to evolve both in life 
                            and professionally is to help others with a light and happy heart.
                        </h2>
                        <hr />
                    </div>
                </CSSTransitionGroup>
               <CSSTransitionGroup
                    transitionName="Appear-animation"
                    transitionAppear={true}
                    transitionAppearTimeout={800}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="Portfolio-content">
                        <h3>NGOs</h3>
                        <hr />
                        <div className="Portfolio-projects">
                            <a href="http://www.apape.com.br/" target="_blank">
                                <img src={linkIcon} alt="link" />
                                <span>APAPE</span>
                                <p>
                                The APAPE was created with the objective of benefiting the animals through the support offered to the protectors of 
                                animals of Pernambuco, in their voluntary, free, amateur, care, protection and animal shelter.
                                </p>
                                <div className="Portfolio-tools">
                                    <span>React.js</span>
                                    <span>PHP</span>
                                </div>
                            </a>
                            <a href="https://cnmp-e53cf.firebaseapp.com/" target="_blank">
                                <img src={linkIcon} alt="link" />
                                <span>CNMP</span><i>Test version</i>
                                <p>
                                The Centro Nordestino de Medicina Popular (CNMP) is a non-profit organization with diverse professional skills and cultural identities. 
                                Working for a society of inclusion, peace, justice and freedom, which guarantees the right to a dignified, healthy and full life for the 
                                entire population.
                                </p>
                                <div className="Portfolio-tools">
                                    <span>Ionic</span>
                                    <span>Firebase</span>
                                    <span>Node.js</span>
                                    <span>Cloud Functions</span>
                                </div>
                            </a>
                            <a href="http://www.petspe.com.br/#/inicio" target="_blank">
                                <img src={linkIcon} alt="link" />
                                <span>Pets PE</span>
                                <p>
                                Joint action to control feline sporotrichosis with the objective of guiding a schedule of actions and achieving certain benefits with 
                                laboratories and veterinarians, such as clinical care, management guidelines and treatment at more affordable prices.
                                </p>
                                <div className="Portfolio-tools">
                                    <span>Ionic</span>
                                    <span>Node.js</span>
                                    <span>PWA</span>
                                </div>
                            </a>
                            <a>
                                <img src={lockIcon} alt="link" />
                                <span>Pro Anima</span><i>In Progress</i>
                                <p>
                                The Instituto Pro Anima is a nonprofit organization with the objective of directing energies and efforts in the education of the population 
                                (awareness of animals feelings, well-being, responsible custody, ethics, laws, collectivity and citizenship) and street animals population 
                                control with castrations and adoption fairs.
                                </p>
                                <div className="Portfolio-tools">
                                    <span>React Native</span>
                                    <span>Redux</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </CSSTransitionGroup>
                <div className="Portfolio-content">
                    <h3>PACKAGES</h3>
                    <hr />
                    <div className="Portfolio-projects">
                        <a href="https://www.npmjs.com/package/generator-ionfire" target="_blank">
                            <img src={linkIcon} alt="link" />
                            <span>IonFire</span>
                            <p>
                            Yeoman generator created to help some of my collegues at University to build an hybrid mobile app with Ionic and Firebase
                            and give birth for their ideas.
                            </p>
                            <img src={npmIcon} alt="npm" />
                        </a>
                        <a href="https://www.npmjs.com/package/generator-ts-node-api" target="_blank">
                            <img src={linkIcon} alt="link" />
                            <span>TSNodeAPI</span>
                            <p>
                            Yeoman generator created to encourage some coworkers to build API's with Node.js, Express.js and MongoDB in the company 
                            I used to work (Created with the collaboration of Caio Souza).
                            </p>
                            <img src={npmIcon} alt="npm" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;