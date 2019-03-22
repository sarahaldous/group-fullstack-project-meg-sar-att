import React from 'react'
// import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import PlayerLvl from "./PlayerLvl.js"
import PlayerSkillLvls from "./PlayerSkillLvls.js"

const UserDashboard = () => {
    return (
        <section className="user-dashboard-container">
            <div className="avatar-image-container">
                <h3>Lvl 5</h3>
            </div>
            <h1>Player Name</h1>
            <h2>Player Title</h2>
            <PlayerLvl/>
            <div className="player-skill-lvl-container">
                <PlayerSkillLvls/>
                <PlayerSkillLvls/>
                <PlayerSkillLvls/>
                <PlayerSkillLvls/>
                <PlayerSkillLvls/>
                <PlayerSkillLvls/>
    
            </div>
        </section>
    )
};

export default UserDashboard