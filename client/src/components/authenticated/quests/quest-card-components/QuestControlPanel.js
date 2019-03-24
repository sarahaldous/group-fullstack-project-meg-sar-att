import React, { Component } from "react"

class QuestControlPanel extends Component {

    //handleAddQuest
    //handleRemoveQuest
    //handleCompleteQuest

    render(){
        return (
            <div className="quest-control-panel">
                <button>Add Quest</button>
                <button>Remove Quest</button>
                <button>Complete Quest</button>
            </div>
        )
        
    }
}

export default QuestControlPanel