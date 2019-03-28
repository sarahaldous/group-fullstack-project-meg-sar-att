import React, {Component} from 'react'
import axios from 'axios'

const PlayerContext = React.createContext()

class PlayerProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            playerStatusUpdateComplete: false,
            lvlRange: [
                {
                    title: "Novice",
                    xpRequirement: 50
                },{
                    title: "Journeyman",
                    xpRequirement: 150
                },{
                    title: "Master",
                    xpRequirement: 300
                },{
                    title: "Grandmaster",
                    xpRequirement: 600
                }
            ],
            name: "",
            avatar: "",
            title: "",
            xp: 0,
            level: 0,
            questLog: [],
            detailedQuestLog: [],
            questCurrent: [],
            detailedQuestCurrent: [],
            pendingQuestsList: [],
            jobbing: 0,
            moneys: 0,
            doctoring: 0,
            housing: 0,
            foodsies: 0,
            peopling: 0,
            goingPlaces: 0,
            cleaning: 0,
            _id: "",
            players: [],
            togPlayerData: false,
            togQuestData: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.getPlayerData(this.state._id)
        this.setState( prevState => ({
            togPlayerData : !prevState.togPlayerData
        }))
    }

    togglerPlayerData = () => {
        this.setState(prevState => ({
            togPlayerData: !prevState.togPlayerData
        }))
    }

    togglerQuestData = () => {
        this.setState(prevState => ({
            togQuestData: !prevState.togQuestData
        }))
    }

    getPlayerData = (_id) => {

        typeof _id === 'undefined'
    
            // No player is logged in
            ?   axios.get(`/players/`).then(res => {
                    this.setState({
                        players: res.data
                    })
                })
    
            // Player has logged in
            :   axios.get(`/players/${_id}`).then(res => {
    
                    console.log("Aquiring player data, please wait...")
    
                    const {
                        name, 
                        avatar, 
                        title, 
                        xp, 
                        level, 
                        questLog, 
                        questCurrent, 
                        jobbing, 
                        moneys, 
                        doctoring, 
                        housing, 
                        foodsies, 
                        peopling, 
                        goingPlaces, 
                        cleaning
                    } = res.data
    
                    console.log("Player data found.")
                    this.setState({
                        name: name,
                        avatar: avatar,
                        title: title,
                        xp: xp,
                        level: level,
                        questLog: questLog,
                        questCurrent: questCurrent,
                        jobbing: jobbing,
                        moneys: moneys,
                        doctoring: doctoring,
                        housing: housing,
                        foodsies: foodsies,
                        peopling: peopling,
                        goingPlaces: goingPlaces,
                        cleaning: cleaning,
                        _id: res.data._id
                    }, () => {
    
                        const isPlayerInfoUpdated = () => {
                            // if player data has been updated
                            if(this.state.name){
                                console.log(`${this.props.name} is currently logged in.`)
                                console.log(`Aquiring player quest data, please wait....`)
    
                                axios.get("/quests").then(res => {
                                    const questData = res.data
                                    const mappedQuestArray = []
                                    const mappedQuestData = questData.map((quest, i) => {
                                        const questDetails = {
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
                                        mappedQuestArray.push(questDetails)
                                    })
                                    console.log(`${mappedQuestData.length} quests recovered from database.`)
    
                                    this.setState({
                                        allQuestData: mappedQuestArray
                                    }, () => {
    
                                        const isQuestDataUpdated = () => {
    
                                            // if quest raw data has been updated
                                            if(this.state.allQuestData.length > 0) {
    
                                                //Populating Complete Quest Array
                                                const completeArray = []
                                                const completeArrayMap = mappedQuestArray.map((quest, i) => {
                                                    for(let j=0; j < this.state.questLog.length; j++){
                                                        if(this.state.questLog[j] === quest._id){
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
    
                                                // Populating Current Quest Array
                                                const currentArray = []
                                                const currentArrayMap = mappedQuestArray.map((quest, i) => {
                                                    if (this.state.questCurrent.length === 0){
                                                        console.log("This player is not currently working on any quests.")
                                                        return ""
                                                    } else {
                                                        for(let j=0; j < this.state.questCurrent.length; j++){
                                                            if(this.state.questCurrent[j] === quest._id){
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
                                                        return currentArray
                                                    }
                                                })
    
                                                // Determin Player's Full XP
                                                const pullCompleteXP = completeArray.map((quest, i) => {
                                                    return quest.xp
                                                })
    
                                                const reduceToXP = pullCompleteXP.reduce((total, num) => total + num)
    
                                                let jobbing = 0
                                                let moneys = 0
                                                let doctoring = 0
                                                let housing = 0
                                                let foodsies = 0
                                                let peopling = 0
                                                let goingPlaces = 0
                                                let cleaning = 0
    
                                                const calcSP = () => {
                                                    completeArray.forEach((quest, i) => {
                                                        const eachCategory = quest.category.forEach((category, i) => {
                                                            switch(category){
                                                                case "jobbing":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in jobbing.`)
                                                                    jobbing = jobbing += quest.sp
                                                                    break
                                                                case "moneys":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in moneys.`)
                                                                    moneys = moneys += quest.sp
                                                                    break
                                                                case "doctoring":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in doctoring.`)
                                                                    doctoring = doctoring += quest.sp
                                                                    break
                                                                case "housing":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in housing.`)
                                                                    housing = housing += quest.sp
                                                                    break
                                                                case "foodsies":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in foodsies.`)
                                                                    foodsies = foodsies += quest.sp
                                                                    break
                                                                case "peopling":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in peopling.`)
                                                                    peopling = peopling += quest.sp
                                                                    break
                                                                case "goingPlaces":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in going places.`)
                                                                    goingPlaces = goingPlaces += quest.sp
                                                                    break
                                                                case "cleaning":
                                                                    console.log(`${this.state.name} has acquired ${quest.sp} sp in cleaning.`)
                                                                    cleaning = cleaning += quest.sp
                                                                    break
                                                                default:
                                                                    break
                                                            }
                                                        })
                                                    })
                                                }
                                                calcSP()
    
                                                const dataStatusMessages = () => {
                                                    console.log(`${this.state.questLog.length} quests have been completed by ${this.state.name}.`)
                                                    console.log(`${this.state.name} is working on ${this.state.questCurrent.length} quests at this time.`)
                                                    console.log(`${this.state.name} has ${jobbing} sp in jobbing, ${moneys} sp in moneys, ${doctoring} sp in doctoring, ${housing} sp in housing, ${foodsies} sp in foodsies, ${peopling} sp in peopling, ${goingPlaces} sp in goingPlaces, and ${cleaning} sp in cleaning.`)
                                                }
                                                dataStatusMessages()
    
                                                this.setState({
                                                    detailedQuestCurrent: currentArray,
                                                    detailedQuestLog: completeArray,
                                                    xp: reduceToXP,
                                                    jobbing: jobbing,
                                                    moneys: moneys,
                                                    doctoring: doctoring,
                                                    housing: housing,
                                                    foodsies: foodsies,
                                                    peopling: peopling,
                                                    goingPlaces: goingPlaces,
                                                    cleaning: cleaning,
                                                    playerStatusUpdateComplete: true,
                                                })
    
                                            // if quest raw data has not been updated
                                            } else {
                                                console.log("Loading, please wait...")
                                            }
                                        }
                                        isQuestDataUpdated()
                                    })
                                })
    
                            // if player data has not been updated
                            } else {
                                console.log("Loading, please wait...")
                            }
                        }
                        isPlayerInfoUpdated()
                    })
                })

        if (this.state.playerStatusUpdateComplete) {
            axios.put(`/players/${this.state._id}`,{
                xp: this.xp,
                jobbing: this.jobbing,
                moneys: this.moneys,
                doctoring: this.doctoring,
                housing: this.housing,
                foodsies: this.foodsies,
                peopling: this.peopling,
                goingPlaces: this.goingPlaces,
                cleaning: this.cleaning
            }).then(res => {
                console.log(res.data)
            })
        }
    }

    handleAddUserQuest = (quest_id) => {
        console.log("This feature is temporarially disabled.")
        // axios.put(`players/${this.state._id}`,
        //     {
        //         type:"questCurrent", 
        //         quest_id:quest_id
        //     }).then( res => {
        //         this.setState(prevState => ({
        //             questCurrent: prevState.questCurrent.map(quest =>
        //             quest._id === quest_id ? res.data : quest)
        //         }))
        //     })
    }

    handleRemoveUserQuest = (quest_id) => {
        console.log("This feature is temporarially disabled.")
        // axios.put(`players/remove/${this.state._id}`,
        //     {type:"questCurrent",quest_id: quest_id}).then(res => {
        //         this.setState(prevState => ({
        //             questCurrent: prevState.questCurrent.map(quest =>
        //                 quest._id === quest_id ? quest : res.data)
        //         }))
        //     })
    }

    handleCompleteUserQuest = (quest_id) => {
        console.log("This feature is temporarially disabled.")
        // console.log(quest_id)
        // axios.put(`players/${this.state._id}`,
        //     {type:"questLog",quest_id:quest_id}).then( res => {
        //     this.setState(prevState => ({
        //         questLog: prevState.questLog.map(quest =>
        //             quest._id === quest_id ? res.data : quest)
        //     }))
        // })
        // axios.put(`players/remove/${this.state._id}`,
        //     {type:"questCurrent",quest_id: quest_id}).then(res => {
        //     this.setState(prevState => ({
        //         questCurrent: prevState.questCurrent.map(quest =>
        //             quest._id === quest_id ? quest : res.data)
        //     }))
        // })
    }

    render(){
        return (
            <PlayerContext.Provider
                value={{...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    togglerPlayerData: this.togglerPlayerData,
                    togglerQuestData: this.togglerQuestData,
                    getPlayerData: this.getPlayerData,
                    handleAddUserQuest: this.handleAddUserQuest,
                    handleRemoveUserQuest: this.handleRemoveUserQuest,
                    handleCompleteUserQuest: this.handleCompleteUserQuest
                }}
            >
                {this.props.children}
            </PlayerContext.Provider>
        )
    }
}

export const withPlayer = C => props => (
    <PlayerContext.Consumer>
        {value => <C {...props} {...value} />}
    </PlayerContext.Consumer>
)
export default PlayerProvider