import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'

function Moderator_freelancer() {
    return (
        <div id="Main_freelancer">
            <Header />
            <div className="switcher container2">
                <div className="switcher-box">
                    <div className="switcher-item">
                        <Link to="/main/freelancer">Freelancer</Link>
                    </div>
                    <div className="switcher-item">
                        <Link to="/main/hirer" id="nonactive">Hirer</Link>
                    </div>
                    <div id="switcher-active"></div>
                </div>
            </div>
            <nav className="content-nav container2">
                <Link to="/main/freelancer/jobs" className="nav-link">Jobs</Link>
                <Link to="/main/freelancer/browse" className="nav-link">Browse job</Link>
                <Link to="/main/freelancer/requests" className="nav-link">Requests</Link>
            </nav>
            <div className="content container2" id="main-default">
                Choose category...
            </div>
        </div>
    );
}

export default Moderator_freelancer;