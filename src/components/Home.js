import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <CSSTransitionGroup
                transitionName="Appear-animation"
                transitionAppear={true}
                transitionAppearTimeout={800}
                transitionEnter={false}
                transitionLeave={false}>
                    <div className="Home-welcome">
                        <div className="Home-name">Petrus Cyrino</div>
                        <div className="Home-intro">
                            A <u>Software Craftsman</u> in love with his code, always prone to find a distinct way of thinking
                            and that tries to build <u>great things</u> every day,
                            even if nobody cares.
                        </div>
                    </div>
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Home;