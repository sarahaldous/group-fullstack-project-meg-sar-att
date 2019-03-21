import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    return (
        <nav className="user-navbar">
            <Link to="">Dashboard</Link>
            <Link to="">Questlog</Link>
        </nav>
    )
};

export default UserNavbar