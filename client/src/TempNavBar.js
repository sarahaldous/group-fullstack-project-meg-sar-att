import React from 'react'
import {Link} from 'react-router-dom'

const TempNavBar = () => {
    return (
        <nav className="temp-nav-bar">
            <Link to="/site/home">Home</Link>
            <Link to="/site/waitforit">Dashboard</Link>
            <Link to="/site/waitforit">Quests</Link>
            <Link to="/site/waitforit">Community</Link>
            <Link to="/welcome">Logout</Link>
            <Link to="/admin">Admin</Link>    
        </nav>
    )
}

export default TempNavBar