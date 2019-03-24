import React from 'react'

//COMPONENTS
import QuestCard from './QuestCard.js'

const QuestList = () => {
    //TODO replace hardcoded <QuestCard/>s with map to pull ALL quests
    return (
        <div className="quest-list">
            <QuestCard/>
            {/* <QuestCard/>
            <QuestCard/>
            <QuestCard/>
            <QuestCard/> */}
        </div>
    )
}

export default QuestList