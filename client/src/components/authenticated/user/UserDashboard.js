import React, {Component} from 'react'
// import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import PlayerLvl from "./PlayerLvl.js"
import PlayerSkillLvls from "./PlayerSkillLvls.js"
import {withPlayer} from "../../../context/PlayerProvider";

class UserDashboard extends Component {

    render() {
        console.log(this.props)
        return (
            <section className="user-dashboard-container">
                <div className="avatar-image-container" style={{backgroundImage:`url(${this.props.avatar})`}}>
                    <h3>Lvl {this.props.level}</h3>
                </div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
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
    }


};

export default withPlayer(UserDashboard)