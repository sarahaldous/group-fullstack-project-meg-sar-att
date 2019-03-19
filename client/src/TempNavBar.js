import React from 'react'
import {Link} from 'react-router-dom'

const TempNavBar = () => {
    return (
        <nav className="temp-nav-bar">
            <Link to="/site/home">Home</Link>
            <Link to="/welcome/about">Logout</Link>
            <Link to="/admin">Admin</Link>    
        </nav>
    )
}

export default TempNavBar