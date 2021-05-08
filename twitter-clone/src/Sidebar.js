import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button, Avatar, IconButton } from '@material-ui/core';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">

            <Link to="/">
                <IconButton color="primary">
                    <TwitterIcon className="sidebar__twitterIcon" />
                </IconButton>
            </Link>

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

            <div className="sidebar__footer">

                <Avatar src="https://harmanbatheja15.github.io/harmanbatheja/Harman.png" />

                <div className="sidebar__footerElement">
                    <h4>Harman Batheja</h4>
                    <p>@BathejaHarman</p>
                </div>
                
                <MoreHorizIcon />
                
            </div>
            
        </div>
    );
}

export default Sidebar;
