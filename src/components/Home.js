import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-welcome">
                    <div className="Home-name">Petrus Cyrino</div>
                    <div className="Home-intro">
                        Trying to build <u>great things</u> every day,
                        even if nobody cares.
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;