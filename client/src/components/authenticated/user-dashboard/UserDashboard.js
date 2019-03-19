import React from 'react'

//COMPONENTS
import UserBadgesList from "./UserBadgesList.js"
import UserCharSheet from "./UserCharSheet.js"
import UserSocial from "./UserSocial.js"

const UserDashboard = () => {
    return (
        <section className="user-dashboard-container">
            <img alt="avatar" src="https://sportsandthemind.com/wp-content/uploads/2014/04/Avatar-1.png"/>
            <h1>Name</h1>
            <h2>Title</h2>
            <UserCharSheet/>
            <UserBadgesList/>
            <UserSocial/>
        </section>
    )
}

export default UserDashboard