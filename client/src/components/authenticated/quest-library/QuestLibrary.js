//WARNING: This page is super duper under construction, don't freak out at all the divs

import React, {Component} from "react"


class QuestLibrary extends Component {
    constructor(){
        super()
        this.state = {
            isToggled: false
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }
    render(){
        return (
            // this.props.render({ isToggled: this.state.isToggled, toggler: this.toggler })
    
        
            <section className="quest-library-container">
                <button class="collapsible" className="active">This Will Collapse</button>
                <div class="content">
                <p>This had better work. Otherwise, I'll be sad.</p>
                </div>
            </section>
        )
    }
}

export default QuestLibrary


 //TODO route and link to this page so it can be accessed
    //TODO style layout
    //TODO componentize this
    //TODO replace hardcoded <QuestProfile/> with mapped quests
    //TODO add categories tot he Quest Schema
{/* <div className="quest-scroll-left"></div>
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
            <div className="quest-scroll-right"></div> */}