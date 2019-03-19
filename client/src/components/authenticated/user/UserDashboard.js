import React from 'react'
import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import UserBadgesList from "./UserBadgesList.js"
import UserCharSheet from "./UserCharSheet.js"
import UserSocial from "./UserSocial.js"
import UserQuestLog from "./UserQuestLog.js"

const UserDashboard = () => {
    return (
        <section className="user-dashboard-container">
            <img alt="avatar" src="https://sportsandthemind.com/wp-content/uploads/2014/04/Avatar-1.png"/>
            <h1>Name</h1>
            <h2>Title</h2>
            <UserCharSheet/>
            <UserBadgesList/>
            <UserSocial/>

            <Switch>
                <Route path="" component={}/>
                <Route path="" component={}/>
            </Switch>
            <UserQuestLog/>
        </section>
    )
}

export default UserDashboard