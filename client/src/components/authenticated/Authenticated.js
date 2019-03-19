import React from 'react'
import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import Home from "./home/HomeDashboard"
import Navbar from './Navbar.js'
// import PersonalFeed from "./social/PersonalFeed.js" //temporarially disabled
import Placeholder from "../Placeholder.js" //delete when fully built out
import UserDashboard from "./user/UserDashboard.js"



const Authenticated = () => {
    return (
        <section className="authenticated-container">
            <Switch>
                <Route exact path="/site/home" component={Home}/>
                <Route exact path="/site/user" component={UserDashboard}/>
                <Route exact path="/site/social" component={Placeholder}/>
            </Switch>
            <Navbar/>
        </section>
    )
}

export default Authenticated