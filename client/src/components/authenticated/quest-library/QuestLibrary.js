//WARNING: This page is super duper under construction, don't freak out at all the divs

import React from "react"

const QuestLibrary = () => {

    //TODO route and link to this page so it can be accessed
    //TODO style layout
    //TODO componentize this
    //TODO replace hardcoded <QuestProfile/> with mapped quests
    //TODO add categories tot he Quest Schema
    
    return (
        <section className="quest-library-container">
            <div className="quest-scroll-left"></div>
            <nav className="quest-category-navbar">
                <p>Category</p>
                <p>Category</p>
                <p>Category</p>
                <p>Category</p>
                <p>Category</p>
                <p>Category</p>
            </nav>
            <div className="quest-profile-list">
                <article className="quest-profile">
                    <img className="video-thumbnail"/>
                    <h1>Name of the Quest</h1>
                    <p>quest.summary</p>
                    <div className="subquest-indicator">indicates # of subquests</div>
                    <div className="quest-library-control-panel">buttons for starting/favoriting/sharing for the quest</div>
                </article>
            </div>
            <div className="quest-scroll-right"></div>
        </section>
    )
}

export default QuestLibrary