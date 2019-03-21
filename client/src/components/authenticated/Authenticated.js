import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

//COMPONENTS
import Home from "./home/HomeDashboard"
import Navbar from './Navbar.js'
// import Placeholder from "../Placeholder.js" //delete when fully built out
import Quests from "./quests/Quests.js"
import UserDashboard from "./user/UserDashboard.js"



class Authenticated extends Component {
    constructor(){
        super()
        this.state = {
            currentUser: "5c912820c3af0d15ea2ac642",
        }
    }
    render() {
        return (
            <section className="authenticated-container">
                <Switch>
                    <Route exact path="/site/home" component={Home}/>
                    <Route exact path="/site/user" component={UserDashboard}/>
                    <Route exact path="/site/quests" component={Quests}/>
                </Switch>
                <Navbar/>
            </section>
        )
     
    }
    

}

export default Authenticated