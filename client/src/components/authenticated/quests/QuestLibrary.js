import React from 'react'

//COMPONENTS
import QuestList from "./QuestList.js"

const QuestLibrary = () => {
    //map all quests to quest-list
    return (
        <div className="quest-library-container">
            <QuestList/>
        </div>
    )
}

export default QuestLibrary