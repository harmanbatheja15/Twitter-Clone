import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';
import db from './firebase';
import FlipMove from 'react-flip-move';
import './Feed.css';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">

            {/* Header */}
            <div className="feed__header">
                <MoreHorizIcon className="feed__headerMenu" />
                <h2>Home</h2>
                <IconButton color="primary" size="small">
                    <OfflineBoltOutlinedIcon />
                </IconButton>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            
            <FlipMove>
                {
                    posts.map(post => (
                        <Post key={post.text} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text} avatar={post.avatar} image={post.image} />
                    ))
                }
            </FlipMove>

        </div>
    );
}

export default Feed;
