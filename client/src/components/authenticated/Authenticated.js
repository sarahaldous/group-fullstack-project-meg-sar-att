import React from 'react'
import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import Home from "./home/HomeDashboard"
import Navbar from './Navbar.js'
import UserQuestLog from "./quests/UserQuestLog.js"
// import Placeholder from "../Placeholder.js" //delete when fully built out
import UserDashboard from "./user/UserDashboard.js"



const Authenticated = () => {
    return (
        <section className="authenticated-container">
            <Switch>
                <Route exact path="/site/home" component={Home}/>
                <Route exact path="/site/user" component={UserDashboard}/>
                <Route exact path="/site/user/inprogressquests" component={UserQuestLog}/>
            </Switch>
            <Navbar/>
        </section>
    )
}

export default Authenticated