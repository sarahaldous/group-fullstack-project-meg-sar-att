import React, {Component} from 'react'
import axios from "axios"

//COMPONENTS
import PlayerLvl from "./PlayerLvl.js"
import PlayerSkillLvls from "./PlayerSkillLvls.js"

//CONTEXT
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
                <PlayerLvl xp={this.props.xp} questLog={this.props.questLog}/>
                <div className="player-skill-lvl-container">
                    <PlayerSkillLvls category={"Jobbing"} sp={this.props.jobbing}/>
                    <PlayerSkillLvls category={"Moneys"} sp={this.props.moneys}/>
                    <PlayerSkillLvls category={"Doctoring"} sp={this.props.doctoring}/>
                    <PlayerSkillLvls category={"Housing"} sp={this.props.housing}/>
                    <PlayerSkillLvls category={"Foodsies"} sp={this.props.foodsies}/>
                    <PlayerSkillLvls category={"Peopling"} sp={this.props.peopling}/>
                    <PlayerSkillLvls category={"Going Places"} sp={this.props.goingPlaces}/>
                    <PlayerSkillLvls category={"Cleaning"} sp={this.props.cleaning}/>
                </div>
            </section>
        )
    }


};

export default withPlayer(UserDashboard)