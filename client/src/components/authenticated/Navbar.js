import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/site/home">Home</Link>
            <Link to="/site/dashboard">User Dashboard</Link>
            <Link to="/site/interact">Personal Feed</Link>
        </nav>
    )
}

export default Navbar