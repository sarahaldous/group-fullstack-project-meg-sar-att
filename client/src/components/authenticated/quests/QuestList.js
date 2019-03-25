import React, {Component} from 'react'

//COMPONENTS
import QuestCard from './QuestCard.js'

class QuestList extends Component {
    constructor(){
        super()
        this.state = {
            sortedQuests: []
        }
    }

    //TODO replace hardcoded <QuestCard/>s with map to pull ALL quests
    render(){
        return (
            <div className="quest-list">
                <QuestCard/>
            </div>
        )
    }
}

export default QuestList