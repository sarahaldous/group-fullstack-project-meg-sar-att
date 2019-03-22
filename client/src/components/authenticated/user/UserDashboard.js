import React from 'react'
// import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import PlayerLvl from "./PlayerLvl.js"
import PlayerSkillLvls from "./PlayerSkillLvls.js"

const UserDashboard = (props) => {
    console.log(props)
    return (
        <section className="user-dashboard-container">
            <div className="avatar-image-container" style={{backgroundImage:`url(${props.avatar})`}}>
                <h3>Lvl {props.level}</h3>
            </div>
            <h1>{props.name}</h1>
            <h2>*Player Title*</h2>
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