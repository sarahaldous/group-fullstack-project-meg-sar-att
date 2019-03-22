import React from "react"
import { Link } from "react-router-dom"

const WelcomeFooter = () => {
    return (
        <footer className="welcome-footer">
            <Link to="/welcome/about">About</Link>
            <Link to="/welcome/login">Login</Link>
            <Link to="/welcome/signup">Sign Up</Link>
        </footer>
    )
};

export default WelcomeFooter