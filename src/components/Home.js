import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-welcome">
                    <div className="Home-name">Petrus Cyrino</div>
                    <div className="Home-intro">
                        A <u>Software Craftsman</u> in love with his code, always prone to find a distinct way of thinking
                        and trying to build <u>great things</u> every day,
                        even if nobody cares.
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;