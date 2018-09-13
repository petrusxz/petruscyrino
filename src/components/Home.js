import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-welcome">
                    Trying to build
                    <br /><u>great things</u> every day,
                    <br />even if nobody cares.
                </div>
            </div>
        )
    }
}

export default Home;