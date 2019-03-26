import React, {Component} from 'react'

//COMPONENTS
import QuestList from "./QuestList.js"

class QuestLibrary extends Component {
    render(props){
        // console.log("Pending Quests Received:")
        // console.log(this.props.pendingQuests)
        return (
            <div 
                style={this.props.toggled ? {height: "56.5vh"} : {height: 0}} 
                onClick={this.props.toggler} 
                className={`quest-library-container ${!this.props.toggled && "hideableDiv"}`}
            >
                <QuestList listOfQuests={[...this.props.pendingQuests]} questStatus="Pending"/>
                {/* <p>Sesame snaps gummies pastry caramels. Chupa chups sweet gummies jelly beans soufflé dessert. Danish powder cake jelly beans pastry chocolate croissant. Oat cake jelly beans pastry powder muffin dessert. Powder sugar plum topping danish bear claw halvah. Sweet halvah cheesecake cotton candy icing cheesecake jelly ice cream donut. Lollipop chocolate cake bonbon jelly bonbon jujubes gingerbread cake. Macaroon toffee liquorice oat cake tootsie roll. Caramels cookie cookie.</p> */}
            </div>
        )
    }    
}

export default QuestLibrary