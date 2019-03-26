import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { withPlayer } from './context/PlayerProvider';

class TempNavBar extends Component {
    render(){
    
    var welcomeMessage = `Welcome, ${this.props.name}`
    return (
        <nav className="temp-nav-bar">
            <Link to="/site/home">Home</Link>
            <Link to="/">Logout</Link>
            <Link to="/admin">Admin</Link>  
            <h3>{welcomeMessage}</h3>  
        </nav>
    )
}
}

export default withPlayer(TempNavBar)