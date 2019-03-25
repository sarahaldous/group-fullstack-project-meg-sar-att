import React, { Component } from 'react'

//COMPONENTS
import QuestCardRewardsContainer from "./quest-card-components/QuestCardRewardsContainer.js"
import QuestControlPanel from "./quest-card-components/QuestControlPanel.js"

//TEMP IMAGES - DELETE WHEN SOCIAL IS FUNCTIONAL
import foxImg from "../../avatars/020-fox.png" //temporary hardcoded image
import charonImg from "../../avatars/022-charon.png" //temporary hardcoded image
import golemImg from "../../avatars/023-golem.png" //temporary hardcoded image


class QuestCard extends Component {
    render(props){
        
        return (
            <div className="quest-card">
                <h3>{this.props.title}</h3>
                <iframe 
                    title={this.props.title}
                    src={this.props.youtubeEmbed}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="quest-card-video"
                />
                <p>{this.props.description}</p>
                <QuestCardRewardsContainer 
                    questID={this.props._id}
                    questRewardXP={this.props.xp}
                    questRecommendedMLvl={this.props.recommendedMLvl}
                    questRewardSP={this.props.sp}
                    questCategory={this.props.category}
                />
                <QuestControlPanel
                    questID={this.props._id}
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