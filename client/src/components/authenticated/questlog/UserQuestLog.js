import React from "react"

//COMPONENTS
import CompletedQuests from "./CompleteQuests.js"
import InProgressQuests from "./InProgressQuests.js"
import PendingQuests from "./PendingQuests.js"

const Questlog = () => {
    return (
        <section className="user-quest-log">
            <PendingQuests/>
            <InProgressQuests/>
            <CompletedQuests/>
        </section>
    )
}

export default Questlog