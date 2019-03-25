import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
//COMPONENTS
import Home from "./home/HomeDashboard.js"
import Navbar from './Navbar.js'
import Quests from "./quests/Quests.js"
import UserDashboard from "./user/UserDashboard.js"
import {withPlayer} from "../../context/PlayerProvider.js";


class Authenticated extends Component {
    componentDidMount(){
        const idCaller = this.props.location.pathname.slice(11)
        this.props.getPlayerData(idCaller)
        console.log(this.props)
    }

    render() {
        return (
            <section className="authenticated-container">
                <Switch>
                    <Route exact path="/site/home" component={Home}/>
                    <Route exact path="/site/user/:userID" render= {(rProps) => <UserDashboard {...this.props} {...rProps}/> }/>
                    <Route exact path="/site/quests" component={Quests}/>
                </Switch>
                <Navbar/>
            </section>
        )
    }
}

export default withPlayer(Authenticated)