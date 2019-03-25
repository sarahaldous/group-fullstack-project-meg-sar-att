import React, {Component} from 'react'

//COMPONENT
import Post from "./Post.js"
import {withPlayer} from "../../../context/PlayerProvider";
//IMAGE
import Dragon from '../../avatars/004-dragon.png'
import Mermaid from '../../avatars/005-mermaid.png'
import Unicorn from '../../avatars/007-unicorn.png'
import Narwhal from '../../avatars/011-narwhal.png'



class HomeDashboard extends Component {
    constructor(){
        super();
        this.state = {
            greeting: "",
        }
    }

    componentDidMount(){
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        let greeting = "";
        if (currentHour < 12) {
            greeting = "Good morning"
        } else if (currentHour > 12 && currentHour < 16) {
            greeting = "Good afternoon"
        } else if (currentHour > 16) {
            greeting = "Good evening"
        } else {
            greeting = "Hello"
        }
        this.setState({
            greeting: greeting,
        })
    }

    render(){
        console.log(this.props)
        //Update to autopopulate player name
        return (
            <section className="home-dashboard">
                <h5>{this.state.greeting}, {this.props.name}</h5>
                <div>
                    <Post avatar={Dragon} name="Dragon" title="has reached Journeyman LvL in tax-preparation"/>
                    <Post avatar={Mermaid} name="Mermaid" title="has posted a new quest attempt"/>
                    <Post avatar={Unicorn} name="Unicorn" title="has posted a new quest attempt"/>
                    <Post avatar={Narwhal} name="Narwhal" title="has reached Novice LvL in dish washing"/>
                </div>
                <div className="status-updates">
                    <p>You have <b>5</b> new quest validations</p>
                    <p>Your <b>folding laundry</b> quest attempt has been validated. You are now a <b>Master Dishwasher</b>.</p>
                    <p>You have <b>3</b> unshared quest attempts</p>
                </div>
            </section>
        )
    }
}

export default withPlayer(HomeDashboard)