import React, { Component } from "react"

class QuestControlPanel extends Component {

    render(){
        console.log(this.props)
        return (
            <div className="quest-control-panel">
                <button onClick={this.props.handleAddUserQuest}>Add Quest</button>
                <button>Remove Quest</button>
                <button>Complete Quest</button>
            </div>
        )
    }
}

export default QuestControlPanel