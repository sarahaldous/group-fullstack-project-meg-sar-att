import React, { Component } from 'react'

//COMPONENTS
import QuestCardRewardsContainer from "./quest-card-components/QuestCardRewardsContainer.js"

//IMAGES
import lockedIcon from "./lock.png"
import starIcon from "./star.png"
//TEMP IMAGES - DELETE WHEN SOCIAL IS FUNCTIONAL
import foxImg from "../../avatars/020-fox.png" //temporary hardcoded image
import charonImg from "../../avatars/022-charon.png" //temporary hardcoded image
import golemImg from "../../avatars/023-golem.png" //temporary hardcoded image


class QuestCard extends Component {
    constructor(){
        super()
        this.state = {
            questCateogry: "",
            questTitle: "",
            questVideoUrl: "",
            questDescription: "",
            questRewardXP: "",
            questRewardMastery: "",
            questRewardSP: "",
        }
    }

    componentDidMount(){
        //fake hardcoding to hold place for mapped stuff
        const category = "cleaning"
        const updateTitle = "Up Your Laundry Game"
        const videoUrl = "https://www.youtube.com/embed/7wR7Im8n8-s"
        const descriptionTxt = "Ever wondered if there was a way to convert your dumb washing machine and dryer into a smart washer or smart dryer? Well it might be easier than you think."
        const experiencePoints = 20
        const masteryLvl = "grandmaster"
        const skillPoints = 35

        this.setState ({
            questCategory: category,
            questTitle: updateTitle,
            questVideoUrl: videoUrl,
            questDescription: descriptionTxt,
            questRewardXP: experiencePoints,
            questRewardMastery: masteryLvl,
            questRewardSP: skillPoints,
        })
    }

    render(){
        
        return (
            <div className="quest-card">
                <h3>{this.state.questTitle}</h3>
                <iframe 
                    title={this.state.questTitle}
                    src={this.state.questVideoUrl}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="quest-card-video"
                />
                <p>{this.state.questDescription}</p>
                <QuestCardRewardsContainer 
                    questRewardXP={this.state.questRewardXP} 
                    questRewardMastery={this.state.questRewardMastery} 
                    questRewardSP={this.state.questRewardSP}
                    questCategory={this.state.questCategory}
                />
                <div className="quest-tree-container">
                    <h4 className="required-quest-header">Required Quests</h4>
                    <div className="pre-req-quests">
                        <p>Reading clothing tags</p>
                        <p>Sorting by color and weight</p>
                        <p>Washer/Dryer maintence</p>
                    </div>
                    <h4 className="unlocks-quest-header">Unlocks</h4>
                    <div className="next-unlocked-quests">
                        <p>None</p>
                    </div>
                </div>
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
                <div className="community-progress-container">
                    <img alt="other-player" src={foxImg}/>
                    <img alt="other-player" src={charonImg}/>
                    <img alt="other-player" src={golemImg}/>
                    <p> and 42 others have completed this quest </p>
                </div>
                
            </div>
        )
    }
}

export default QuestCard