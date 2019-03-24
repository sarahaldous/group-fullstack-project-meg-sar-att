import React, { Component } from "react"

class QuestControlPanel extends Component {
    render(){
        <div className="quest-control-panel">
            <button>Add Quest</button>
            <button>Remove Quest</button>
            <button>Complete Quest</button>
            {/* 
                add a toggle between these
                Add should be visible only on the new quests
                Remove and Complete should only be visible on the active quests
                None should show on the complete quests                
            */}
        </div>
    }
}

export default QuestControlPanel