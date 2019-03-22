import React from 'react'

//COMPONENTS
import CompletedQuests from "./CompletedQuests.js"
import CurrentQuests from "./CurrentQuests.js"
import QuestLibrary from "./QuestLibrary.js"

const Quests = () => {
    return (
        <div className="quests-container">
            <div className="quest-library-toggle">
                <h2>New Quests</h2>
                <QuestLibrary/>
            </div>
            <div className="current-quests-toggle">
                <h2>Current Quests</h2>
                <CurrentQuests/>
            </div>
            <div className="completed-quests-toggle">
                <h2>Completed Quests</h2>
                <CompletedQuests/>
            </div>
        </div>
    )
}

export default Quests