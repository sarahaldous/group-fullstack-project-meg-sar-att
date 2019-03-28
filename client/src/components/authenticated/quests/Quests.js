import React, {Component} from 'react'
import axios from 'axios';

//COMPONENTS
import CompletedQuests from "./CompletedQuests.js"
import CurrentQuests from "./CurrentQuests.js"
import QuestLibrary from "./QuestLibrary.js"

//CONTEXT
import {withPlayer} from "../../../context/PlayerProvider.js"
import {withQuests} from "../../../context/QuestProvider.js"

class Quests extends Component {
    constructor(){
        super()
        this.state = {
            toggle1: false,
            toggle2: true,
            toggle3: false,
            completedDisplayedQuests: [],
            currentDisplayedQuests: [],
            pendingDisplayedQuests: [],
            allQuestData: []
        }
    }

    //---ANIMATION---------------------------//
        noToggleStyles = {
            height: 0,
            paddingBottom: 0
        }

        toggle3Styles = {
            height: "56.8vh",
            paddingBottom: "5vh"
        }

        toggler1 = () => {
            console.log("toggle 1 hit")
            this.setState(prevState =>({
                toggle1: !prevState.toggle1,
                toggle2: !(!prevState.toggle1 && !prevState.toggle3),
                toggle3: false
            }))
        }

        toggler2 = () => {
            console.log("toggle 2 hit")
            this.setState({
                toggle1: false,
                toggle2: true,
                toggle3: false
            })
        }

        toggler3 = () => {
            console.log("toggle 3 hit")
            this.setState(prevState => ({
                toggle1: false,
                toggle2: !(!prevState.toggle1 && !prevState.toggle3),
                toggle3: !prevState.toggle3
            }))
        }

    //---DATA--------------------------------//
        componentDidMount(){

            const dataStatus = this.props.name
                ?   "Player data acquired!"
                :   "Awaiting player data, please wait..."
            
            console.log(dataStatus)

            const userQuestsArray = []
            const mapCompleteIds = this.props.questLog.map(quest => {
                userQuestsArray.push(quest)
            })
            const mapCurrentIds = this.props.questCurrent.map(quest => {
                userQuestsArray.push(quest)
            })

            const allQuestIDsArray = this.props.name 
                ?   this.props.allQuestData.map(quest => {
                        return quest._id
                    })
                :   null
            
            const compareAllToClaimed = this.props.name
                ?   allQuestIDsArray.map(quest => {
                        let isUnique = true
                        for(let i = 0; i < userQuestsArray.length; i++){
                            quest === userQuestsArray[i]
                                ? isUnique = false 
                                : isUnique = isUnique
                        }
                        if(isUnique){
                            return quest
                        }
                    })
                :   null

            const removeUndefinedResults = this.props.name
                ?   compareAllToClaimed.filter(quest => {
                        if(quest !== undefined){
                            return quest
                        }
                    })
                :   null

            const pendingQuestsArray = []
            const populatePendingData = this.props.name
                ?   this.props.allQuestData.map(quest => {
                        for(let i=0; i < removeUndefinedResults.length; i++){
                            if(removeUndefinedResults[i] === quest._id){
                                const grabbedQuest = {
                                    title: quest.title,
                                    summary: quest.summary,
                                    category: quest.category,
                                    youtubeEmbed: quest.youtubeEmbed,
                                    description: quest.description,
                                    recommendedMLvl: quest.recommendedMLvl,
                                    xp: quest.xp,
                                    sp: quest.sp,
                                    _id: quest._id
                                }
                                pendingQuestsArray.push(grabbedQuest)
                            }
                        }
                    })
                :   null

            this.setState({
                completedDisplayedQuests: this.props.detailedQuestLog,
                currentDisplayedQuests: this.props.detailedQuestCurrent,
                pendingDisplayedQuests: pendingQuestsArray,
                allQuestData: this.props.allQuestData
            })
        }



    //---RENDER-------------------------------//
        render(){
            console.log(this.state)
            // console.log(this.props.pendingQuestsList)
            return (
                <div className="quests-container">
                    <div className="quest-library-toggle">
                        <h2 onClick={this.toggler1} >New Quests</h2>
                        <div className="transition" style={this.state.toggle1 ? {height: "56.8vh"} : {height: 0}}>
                            <QuestLibrary 
                                toggled={this.state.toggle1} 
                                pendingQuests={this.state.pendingDisplayedQuests}
                            />
                        </div>
                        {/* {this.state.toggle1 ? <QuestLibrary toggler={this.toggler1} {...this.state} toggled={this.state.toggle1}/> : null }   */}
                    </div>
                    <div className="current-quests-toggle">
                        <h2 onClick={this.toggler2} >Current Quests</h2>
                        <div className="transition" style={this.state.toggle2 ? {height: "56.8vh"} : {height: 0}}>
                            <CurrentQuests 
                                toggled={this.state.toggle2}
                                currentQuests={this.state.currentDisplayedQuests}
                            />
                        </div>
                        {/* {this.state.toggle2 ? <CurrentQuests toggler={this.toggler2} {...this.state} toggled={this.state.toggle2}/> : <div></div>} */}
                    </div>
                    <div className="completed-quests-toggle">
                        <h2 onClick={this.toggler3} >Completed Quests</h2>
                        <div className="transition" style={this.state.toggle3 ? {height: "56.8vh"} : {height: 0}}>
                            <CompletedQuests 
                                toggled={this.state.toggle3}
                                completedQuests={this.state.completedDisplayedQuests}
                            />
                        </div>
                        {/* {this.state.toggle3 ? <CompletedQuests toggler={this.toggler3} {...this.state} toggled={this.state.toggle3}/> : <div></div>} */}
                    </div>
                </div>
            )
        }
}

export default withPlayer(withQuests(Quests))