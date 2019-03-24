import React, { Component } from 'react'

//COMPONENTS
import QuestCardRewardsContainer from "./quest-card-components/QuestCardRewardsContainer.js"
import QuestControlPanel from "./quest-card-components/QuestControlPanel.js"

//TEMP IMAGES - DELETE WHEN SOCIAL IS FUNCTIONAL
import foxImg from "../../avatars/020-fox.png" //temporary hardcoded image
import charonImg from "../../avatars/022-charon.png" //temporary hardcoded image
import golemImg from "../../avatars/023-golem.png" //temporary hardcoded image


class QuestCard extends Component {
    constructor(){
        super()
        this.state = {
            questID: "",
            questCateogry: "",
            questTitle: "",
            questVideoUrl: "",
            questDescription: "",
            questRewardXP: "",
            questRewardMastery: "",
            questRewardSP: "",
            questPending: false,
            questComplete: false,
            questValidationPhoto: "",
        }
    }

    componentDidMount(){
        //fake hardcoding to hold place for mapped stuff
        const questID = "fakeQuestID"
        const category = "cleaning"
        const updateTitle = "Up Your Laundry Game"
        const videoUrl = "https://www.youtube.com/embed/7wR7Im8n8-s"
        const descriptionTxt = "Ever wondered if there was a way to convert your dumb washing machine and dryer into a smart washer or smart dryer? Well it might be easier than you think."
        const experiencePoints = 20
        const masteryLvl = "grandmaster"
        const skillPoints = 35
        const questPending = false
        const questComplete = true
        const questValidationPhoto = "http://a1.images.reviewed.com/image/fetch/s--dRj6hPJ7--/c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_jpegmini,w_642/https://reviewed-production.s3.amazonaws.com/attachment/5749f62a26cf4360/CPSCSamsung.jpg"

        this.setState ({
            questID: questID,
            questCategory: category,
            questTitle: updateTitle,
            questVideoUrl: videoUrl,
            questDescription: descriptionTxt,
            questRewardXP: experiencePoints,
            questRewardMastery: masteryLvl,
            questRewardSP: skillPoints,
            questPending: questPending,
            questComplete: questComplete,
            questValidationPhoto: questValidationPhoto,
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
                    questID={this.state.questID}
                    questRewardXP={this.state.questRewardXP} 
                    questRewardMastery={this.state.questRewardMastery} 
                    questRewardSP={this.state.questRewardSP}
                    questCategory={this.state.questCategory}
                />
                <QuestControlPanel
                    questID={this.state.questID}
                    questPending={this.state.questPending}
                    questComplete={this.state.questComplete}
                    questValidationPhoto={this.state.questValidationPhoto}
                />
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