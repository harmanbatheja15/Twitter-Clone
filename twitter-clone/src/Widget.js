import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import './Widget.css';

const Widget = () => {
    return (
        <div className="widgets">

            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            
            <div className="widgets__widgetContainer">

                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed sourceType="profile" screenName="cleverqazi" options={{ height: 400 }} />

                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{ text: "#reactjs is awesome", via: "cleverqazi" }} />

            </div>

        </div>
    );
}

export default Widget;
