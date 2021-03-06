import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.js'
import Top_Block from '../components/Profile_top_block.js'
import Link_item from '../components/Link_item.js'
import Review_item from '../components/Review_item.js'

function Profile_freelancer() {
    return (
        <div id="Profile_hirer">
            <Header />
            <div className="switcher container2">
                <div className="switcher-box">
                    <div className="switcher-item">
                        <Link to="/profile/freelancer/view">Freelancer</Link>
                    </div>
                    <div className="switcher-item">
                        <Link to="/profile/hirer/view" id="nonactive">Hirer</Link>
                    </div>
                    <div className="switcher-active"></div>
                </div>
            </div>
            <div className="big-block container2">
                <Top_Block />
                <div className="common-block links-outer">
                    <div className="common-header">
                        <div className="common-title">
                            Links
                        </div>
                        <button className="common-btn">
                            <img src="../../images/Profile/edit.png" alt="" />
                        </button>
                    </div>
                    <div className="common-content links">
                        <Link_item />
                        <Link_item />
                        <Link_item />
                        <Link_item />
                        <Link_item />
                        <Link_item />
                    </div>
                </div>
                <div className="common-block">
                    <div className="common-header">
                        <div className="common-title">
                            Reviews
                        </div>
                    </div>
                    <div className="common-content portfolio">
                        <Review_item />
                        <Review_item />
                        <Review_item />
                        <Review_item />
                        <Review_item />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile_freelancer;