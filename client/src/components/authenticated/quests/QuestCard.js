import React from 'react'

//IMAGES
import lockedIcon from "./lock.png"
import starIcon from "./star.png"
import grandMaster from './rank-icons/grandmaster.png'
import master from './rank-icons/master.png'
import journeyman from './rank-icons/journeyman.png'
import novice from './rank-icons/novice.png'
//TEMP IMAGES - DELETE WHEN SOCIAL IS FUNCTIONAL
import foxImg from "../../avatars/020-fox.png" //temporary hardcoded image
import charonImg from "../../avatars/022-charon.png" //temporary hardcoded image
import golemImg from "../../avatars/023-golem.png" //temporary hardcoded image
import cleaningIcon from "./category-icons/cleaning.png" //temporary hardcoded image


const QuestCard = () => {
    //TODO this is HUGE, component it
    return (
        <div className="quest-card">
            <h3>Up Your Laundry Game</h3>
            <iframe 
                title="DIY Smart Washer and Dryer on a Budget"
                src="https://www.youtube.com/embed/7wR7Im8n8-s" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                className="quest-card-video"
            />
            <p>Every wondered if there was a way to convert your dumb washing machine and dryer into a smart washer or smart dryer? Well it might be easier than you think.</p>
            <div className="reward-container">
                <div className="xp">
                    <h2>20</h2>
                    <p>XP</p>
                </div>
                <img className="mastery-lvl" alt="mastery-lvl" src={grandMaster}/>
                <div className="skill-points">
                    <div>
                        <h2>30</h2>
                        <p>SP</p>
                    </div>
                    <img alt="category" src={cleaningIcon}/>
                </div>
            </div>
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

export default QuestCard