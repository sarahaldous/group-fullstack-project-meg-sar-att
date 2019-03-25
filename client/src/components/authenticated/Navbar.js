import React from 'react'
import { Link, withRouter } from 'react-router-dom'

//IMAGES
import QuestIcon from "./001-shield.png"
import SocialIcon from "./003-like.png"
import UserIcon from "./002-user.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/site/home"><img alt="social" src={SocialIcon}/></Link>
            <Link to={`/site/user/profile`}><img alt="user-dashboard" src={UserIcon}/></Link>
            <Link to="/site/quests"><img alt="quest-library" src={QuestIcon}/></Link>
        </nav>
    )
};

export default withRouter(Navbar)