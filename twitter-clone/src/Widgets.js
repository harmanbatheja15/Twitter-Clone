import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Button } from '@material-ui/core';
import './Widgets.css';

const Widgets = () => {

    const [text, setText] = useState('Following');

    const showUnfollow = () => {
        setText('Unfollow');
    }

    const hideUnfollow = () => {
        setText('Following');
    }

    return (
        <div className="widgets">

            <div className="widgets__searchContainer">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="whatsHappening">

                <h3>What's happening</h3>

                <div className="news">
                    <div className="news__text">
                        <p>COVID-19 · LIVE</p>
                        <h5>COVID-19 SOS: Here's a list of resources</h5>
                    </div>
                    <img src="https://pbs.twimg.com/semantic_core_img/1385604999271444487/-471ZvUW?format=jpg&name=240x240" alt="News 1" />
                </div>

                <div className="news">
                    <div className="news__text">
                        <p>COVID-19 · LIVE</p>
                        <h5>COVID-19 vaccination for 18-45 age group is now open</h5>
                    </div>
                    <img src="https://pbs.twimg.com/semantic_core_img/1388125245949677569/0MxMnNu5?format=jpg&name=240x240" alt="News 1" />
                </div>

                <div className="news">
                    <div className="news__text">
                        <p>IPL 2021</p>
                        <h5>The Indian Premier League is postponed due to COVID-19, says BCCI</h5>
                        <div>
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>

                <div className="news">
                    <div className="news__text">
                        <p>IPL 2021</p>
                        <h5>The Indian Premier League is postponed due to COVID-19, says BCCI</h5>
                        <div>
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>

                <div className="news">
                    <div className="news__text">
                        <p>IPL 2021</p>
                        <h5>The Indian Premier League is postponed due to COVID-19, says BCCI</h5>
                        <div>
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>

                <h4 className="showMore">Show More</h4>

            </div>

            {/* Who To Follow */}

            <div className="whoToFollow">

                <h3>Who to follow</h3>

                <div className="accounts">
                    <div className="accounts__text">
                        <h5>Snapdragon India{" "} <VerifiedUserIcon className="tickIcon" /></h5>
                        <p>@Snapdragon_IN</p>
                    </div>
                    <Button variant="outlined">Follow</Button>
                </div>

                <div className="accounts">
                    <div className="accounts__text">
                        <h5>Rajnath Singh{" "} <VerifiedUserIcon className="tickIcon" /></h5>
                        <p>@rajnathsingh</p>
                    </div>
                    <Button variant="outlined" className="followingBtn" onMouseOver={showUnfollow} onMouseOut={hideUnfollow}>{text}</Button>
                </div>

                <div className="accounts">
                    <div className="accounts__text">
                        <h5>Ravi Shankar Prasad</h5>
                        <p>@rsprasad</p>
                    </div>
                    <Button variant="outlined">Follow</Button>
                </div>

                <h4 className="showMore">Show More</h4>

            </div>

            <div className="widgets__footer">
                <p>Terms of Service · Privacy Policy · Cookie Policy · Ads info · More <br /> ··· © 2021 Twitter, Inc.</p>
            </div>

        </div>
    );
}

export default Widgets;
