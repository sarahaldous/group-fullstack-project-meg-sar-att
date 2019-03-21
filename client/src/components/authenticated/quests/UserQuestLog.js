import React from "react"
import { Switch, Route } from "react-router-dom"

//COMPONENTS
import CompletedQuests from "./CompleteQuests.js"
import InProgressQuests from "./InProgressQuests.js"
import QuestLibrary from "./QuestLibrary.js"

const Questlog = () => {
    return (
        <section className="user-quest-log">
            <Switch>
                <Route path="/site/user/inprogressquests" component={InProgressQuests}/>
                <Route path="/site/user/completedquests" component={CompletedQuests}/>
                <Route path="/site/quests" component={QuestLibrary}/>
            </Switch>
        </section>
    )
}

export default Questlog