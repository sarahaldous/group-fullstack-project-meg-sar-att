import React, { Component } from "react"
import {withPlayer} from "../../../../context/PlayerProvider";

class QuestControlPanel extends Component {

    render(){
        return (
            <div className="quest-control-panel">
                <button onClick={ () => this.props.handleAddUserQuest(this.props.quest_id)}>Add Quest</button>
                <button onClick={ () => this.props.handleRemoveUserQuest (this.props.quest_id)}>Remove Quest</button>
                <button onClick={ () => this.props.handleCompleteUserQuest(this.props.quest_id)}>Complete Quest</button>
            </div>
        )
    }
}

export default withPlayer(QuestControlPanel)