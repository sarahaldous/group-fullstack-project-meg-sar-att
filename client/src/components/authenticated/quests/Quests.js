import React, {Component} from 'react'

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

            // Confirms if data is uploaded from Player Provider
            if(this.props.name){
                const numOfInProgress = this.props.questCurrent.length
                const numOfCompleted = this.props.questLog.length
                const numOfTotalQuests = this.props.allQuestData.length
                const numOfRemainingQuests = numOfTotalQuests - numOfCompleted - numOfInProgress

                console.log("Player data has been acquired!")
                console.log(`There are a total of ${numOfTotalQuests} currently in the database.`)
                console.log(`${this.props.name} has completed ${numOfCompleted} quests.`)
                console.log(`${this.props.name} is currently working on ${numOfInProgress} quests.`)
                console.log(`There are currently ${numOfRemainingQuests} quests that the player has not attempted yet.`)
            } else {
                console.log("Awaiting player data, please wait...")
            }

            // Creates array of quest IDs that should not be included in the New Quests tab
            const userQuestsArray = []
            const mapCompleteIds = this.props.questLog.map(quest => {
                userQuestsArray.push(quest)
                return quest
            })
            console.log(mapCompleteIds)
            const mapCurrentIds = this.props.questCurrent.map(quest => {
                userQuestsArray.push(quest)
                return quest
            })
            console.log(mapCurrentIds)

            // Creates an array of all the quest ids in the database to compare against
            const allQuestIDsArray = this.props.name 
                ?   this.props.allQuestData.map(quest => {
                        return quest._id
                    })
                :   null
            
            // Compares the quest ids of the quests the player is current using to all the quest ids
            const compareAllToClaimed = this.props.name
                ?   allQuestIDsArray.map(quest => {
                        let isUnique = true
                        for(let i = 0; i < userQuestsArray.length; i++){
                            if(quest === userQuestsArray[i]){
                                isUnique = false
                            }
                        }
                        if(isUnique){
                            return quest
                        }
                    })
                :   null

            // Removes the undefined data points created in the above method
            const removeUndefinedResults = this.props.name
                ?   compareAllToClaimed.filter(quest => {
                        if(quest !== undefined){
                            return quest
                        }
                    })
                :   null

            // Maps the quest details of all the quests for the New Quests tab
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
            })
        }



    //---RENDER-------------------------------//
        render(){
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
                    </div>
                    <div className="current-quests-toggle">
                        <h2 onClick={this.toggler2} >Current Quests</h2>
                        <div className="transition" style={this.state.toggle2 ? {height: "56.8vh"} : {height: 0}}>
                            <CurrentQuests 
                                toggled={this.state.toggle2}
                                currentQuests={this.state.currentDisplayedQuests}
                            />
                        </div>
                    </div>
                    <div className="completed-quests-toggle">
                        <h2 onClick={this.toggler3} >Completed Quests</h2>
                        <div className="transition" style={this.state.toggle3 ? {height: "56.8vh"} : {height: 0}}>
                            <CompletedQuests 
                                toggled={this.state.toggle3}
                                completedQuests={this.state.completedDisplayedQuests}
                            />
                        </div>
                    </div>
                </div>
            )
        }
}

export default withPlayer(withQuests(Quests))