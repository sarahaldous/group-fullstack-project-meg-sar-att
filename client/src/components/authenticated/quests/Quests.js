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
            completedQuests: [],
            currentQuests: [],
            pendingQuests: [],
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
    async componentDidMount(){
            // console.log(this.props)
            const getAllQuestData = () => {
                axios.get("/quests").then(res => {
                    const questData = res.data

                    //Delete the following once axios is connected - copied from Minotaur
                    // const tempCompleteUserQuests = ["5c99559ca3527706e066a205","5c99559ca3527706e066a206","5c99559ca3527706e066a207"]
                    // const tempCurrentUserQuests = ["5c99559ca3527706e066a20b","5c99559ca3527706e066a20c"]

                    const tempCompleteUserQuests = this.props.questLog
                    const tempCurrentUserQuests = this.props.questCurrent

                    this.setState({
                        allQuestData: questData,
                        currentQuests: tempCurrentUserQuests,
                        completedQuests: tempCompleteUserQuests
                    },() => {
                        // console.log(this.state.allQuestData)

                        
                        const allQuestData = this.state.allQuestData
                        // console.log("Axios request complete. Quest data ready for sorting.")

                        //Populating Complete Quest Array
                        const completeArray = []
                        const completeArrayMap = allQuestData.map((quest, i) => {
                            for(let i=0; i < this.state.completedQuests.length; i++){
                                if(this.state.completedQuests[i] === quest._id){
                                    const grabbedQuest = {
                                        key: i,
                                        title: quest.title,
                                        description: quest.description,
                                        category: quest.category,
                                        youtubeEmbed: quest.youtubeEmbed,
                                        recommendedMLvl: quest.recommendedMLvl,
                                        xp: quest.xp,
                                        sp: quest.sp,
                                        _id: quest._id
                                    }
                                    completeArray.push(grabbedQuest)
                                }
                            }
                        })
                        // console.log(completeArray)

                        // Populating Current Quest Array
                        const currentArray = []
                        const currentArrayMap = allQuestData.map((quest, i) => {
                            for(let i=0; i < this.state.currentQuests.length; i++){
                                if(this.state.currentQuests[i] === quest._id){
                                    const grabbedQuest = {
                                        key: i,
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
                                    currentArray.push(grabbedQuest)
                                }
                            }
                        })
                        // console.log(currentArray)

                        const pendingArray = []
                        const pendingArrayMap = () => {
                            const claimedQuests = [...this.state.completedQuests, ...this.state.currentQuests]
                            const pendingIdArrayMap = allQuestData.map((quest, i) => {
                                return quest._id
                            })
                            const mapClaimedOut = pendingIdArrayMap.map(questID => {
                            let isUnique = true
                            for(let j = 0; j < claimedQuests.length; j++){
                                questID === claimedQuests[j] ? isUnique = false : isUnique = isUnique
                            }
                            if(isUnique){
                                return questID
                            }
                            })
                            const sortClaimedOut = mapClaimedOut.filter(questID => {
                                if(questID !== undefined){
                                    return questID
                                }
                            })
                            const pendingArrayMap = allQuestData.map((quest, i) => {
                                for(let i=0; i < sortClaimedOut.length; i++){
                                    if(sortClaimedOut[i] === quest._id){
                                        const grabbedQuest = {
                                            key: i,
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
                                        pendingArray.push(grabbedQuest)
                                    }
                                }
                            })
                        }
                        pendingArrayMap()
                        // console.log(pendingArray)
                        this.setState({
                            completedQuests: completeArray,
                            currentQuests: currentArray,
                            pendingQuests: pendingArray
                        })
                    })
                    
                })
            }
            await getAllQuestData()
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
                                pendingQuests={this.state.pendingQuests}
                            />
                        </div>
                        {/* {this.state.toggle1 ? <QuestLibrary toggler={this.toggler1} {...this.state} toggled={this.state.toggle1}/> : null }   */}
                    </div>
                    <div className="current-quests-toggle">
                        <h2 onClick={this.toggler2} >Current Quests</h2>
                        <div className="transition" style={this.state.toggle2 ? {height: "56.8vh"} : {height: 0}}>
                            <CurrentQuests 
                                toggled={this.state.toggle2}
                                currentQuests={this.state.currentQuests}
                            />
                        </div>
                        {/* {this.state.toggle2 ? <CurrentQuests toggler={this.toggler2} {...this.state} toggled={this.state.toggle2}/> : <div></div>} */}
                    </div>
                    <div className="completed-quests-toggle">
                        <h2 onClick={this.toggler3} >Completed Quests</h2>
                        <div className="transition" style={this.state.toggle3 ? {height: "56.8vh"} : {height: 0}}>
                            <CompletedQuests 
                                toggled={this.state.toggle3}
                                completedQuests={this.state.completedQuests}
                            />
                        </div>
                        {/* {this.state.toggle3 ? <CompletedQuests toggler={this.toggler3} {...this.state} toggled={this.state.toggle3}/> : <div></div>} */}
                    </div>
                </div>
            )
        }
}

export default withPlayer(withQuests(Quests))