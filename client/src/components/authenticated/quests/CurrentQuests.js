import React, {Component} from 'react'

//COMPONENTS
import QuestList from "./QuestList.js"

class CurrentQuests extends Component {
    render(props){
        console.log("Current Quests has Received:")
        console.log(this.props.currentQuests)
        return (
            <div 
                style={this.props.toggled ? {height: "58vh"} : {height: 0}} 
                onClick={this.props.toggler} 
                className={`current-quests-container ${!this.props.toggled && "hideableDiv"}`}
            >
                <QuestList listOfQuests={[...this.props.currentQuests]} questStatus="Current"/>
                {/* <p>Marzipan marzipan cheesecake chocolate bar gummi bears cotton candy. Fruitcake sweet liquorice apple pie sweet lemon drops soufflé. Sugar plum donut halvah muffin cotton candy pudding cheesecake gummies. Tiramisu oat cake sesame snaps sugar plum pie jujubes topping cookie ice cream. Topping pudding marshmallow carrot cake marzipan brownie. Cheesecake bonbon brownie lollipop bonbon macaroon toffee. Toffee powder sugar plum gummies halvah. Jelly beans jujubes gingerbread chocolate cake pudding. Macaroon pudding pastry cookie gingerbread.</p> */}
            </div>
        )
    }
}

export default CurrentQuests