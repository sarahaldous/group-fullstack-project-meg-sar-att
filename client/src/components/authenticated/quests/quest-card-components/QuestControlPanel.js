import React, { Component } from "react"
import {withPlayer} from "../../../../context/PlayerProvider.js"

class QuestControlPanel extends Component {

    render(){
        return (
            <div className="quest-control-panel">
                <button onClick={this.props.handleAddUserQuest}>Add Quest</button>
                <button>Remove Quest</button>
                <button>Complete Quest</button>
            </div>
        )
        
    }
}

export default withPlayer(QuestControlPanel)