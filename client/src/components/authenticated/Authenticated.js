import React from 'react'
import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import Home from "./home/HomeDashboard"
import Navbar from './Navbar.js'
// import PersonalFeed from "./feed/PersonalFeed.js"
import UserDashboard from "./user-dashboard/UserDashboard.js"

import Placeholder from "../Placeholder.js"

const Authenticated = () => {
    return (
        <section className="authenticated-container">
            <Switch>
                <Route path="/site/home" component={Home}/>
                <Route path="/site/dashboard" component={UserDashboard}/>
                <Route path="/site/interact" component={Placeholder}/>
            </Switch>
            <Navbar/>
        </section>
    )
}

export default Authenticated