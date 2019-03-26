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
        // console.log(`${this.props.status} Quest Card Recieved Data:`)
        // console.log(`title: ${this.props.title}`)
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
                    _id={this.props._id}
                    xp={this.props.xp}
                    recommendedMLvl={this.props.recommendedMLvl}
                    sp={this.props.sp}
                    category={this.props.category}
                />
                <QuestControlPanel
                    _id={this.props._id}
                    xp={this.props.xp}
                    sp={this.props.sp}
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