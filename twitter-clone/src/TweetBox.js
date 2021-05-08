import React, { useState } from 'react';
import { Avatar, Button, IconButton } from '@material-ui/core';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import GifIcon from '@material-ui/icons/Gif';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import PublicIcon from '@material-ui/icons/Public';
import db from './firebase';
import './TweetBox.css';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {

        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Harman Batheja',
            username: 'BathejaHarman',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://harmanbatheja15.github.io/harmanbatheja/Harman.png'
        })

        setTweetMessage("");
        setTweetImage("");

    }

    const showWhoCanReply = () => {
        return (
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 10px 10px 70px' }}>
                <PublicIcon />
                <h5>Everyone Can Reply</h5>
            </div>
        );
    }

    return (
        <div className="tweetBox">

            <form>

                <div className="tweetBox__input">

                    <Avatar src="https://harmanbatheja15.github.io/harmanbatheja/Harman.png" />
                    
                    <input type="text" placeholder="What's Happening?" value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} onClick={showWhoCanReply()} />
                    
                </div>

                {/* {showWhoCanReply()} */}

                <input type="text" placeholder="Enter image URL" value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__imageInput" />

                <div className="tweetBox__icons">

                    <IconButton color="primary" className="tweetBox__iconsContainer">
                        <PhotoSizeSelectActualOutlinedIcon fontSize="small" className="icons" />
                    </IconButton>

                    <IconButton color="primary" className="tweetBox__iconsContainer">
                        <GifIcon fontSize="small" className="icons" />
                    </IconButton>

                    <IconButton color="primary" className="tweetBox__iconsContainer">
                        <PollOutlinedIcon fontSize="small" className="icons" />
                    </IconButton>

                    <IconButton color="primary" className="tweetBox__iconsContainer">
                        <SentimentSatisfiedOutlinedIcon fontSize="small" className="icons" />
                    </IconButton>

                    <IconButton color="primary" className="tweetBox__iconsContainer">
                        <ScheduleOutlinedIcon fontSize="small" className="icons" />
                    </IconButton>

                    <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton" disabled={tweetMessage === '' && tweetImage === ''}>Tweet</Button>

                </div>
                
            </form>

        </div>
    );
}

export default TweetBox;
