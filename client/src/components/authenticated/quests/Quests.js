import React from 'react'

//COMPONENTS
import CompletedQuests from "./CompletedQuests.js"
import CurrentQuests from "./CurrentQuests.js"
import QuestLibrary from "./QuestLibrary.js"

const Quests = () => {
    return (
        <div className="quest-list">
            <div className="quest-library-toggle">
                <h1>New Quests</h1>
                <QuestLibrary/>
            </div>
            <div className="current-quests-toggle">
                <h1>Current Quests</h1>
                <CurrentQuests/>
            </div>
            <div className="completed-quests-toggle">
                <h1>Completed Quests</h1>
                <CompletedQuests/>
            </div>
        </div>
    )
}

export default Quests