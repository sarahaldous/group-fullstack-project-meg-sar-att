import React, {Component} from 'react'
import axios from 'axios'

const PlayerContext = React.createContext()

class PlayerProvider extends Component {
    constructor(props){
        super(props)
        this.state={
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
            ? axios.get(`/players/`).then(res => {
                this.setState({
                    players: res.data
                })
            })
            : axios.get(`/players/${_id}`).then(res => {
                const {name, avatar, title, xp, level, questLog, questCurrent,
                jobbing, moneys, doctoring, housing, foodsies, peopling, goingPlaces, cleaning} = res.data
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
                },() => {
                    axios.get("/quests").then(res => {
                        const questData = res.data
                        const mappedQuestData = questData.map((quest, i) => {
                            return {
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
                        })

                        //Populating Complete Quest Array
                        const completeArray = []
                        const completeArrayMap = mappedQuestData.map((quest, i) => {
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
                        const currentArrayMap = mappedQuestData.map((quest, i) => {
                            if (this.state.questCurrent.length === 0){
                                console.log("This player is not currently working on any quests.")
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
                            }
                        })

                        // Determin Player's Full XP
                        const pullCompleteXP = completeArray.map((quest, i) => {
                            return quest.xp
                        })

                        const reduceToXP = pullCompleteXP.reduce((total, num) => total + num)
                        // const currentLvl = reduceToXp / 50
                        
                        let jobbing = 0
                        let moneys = 0
                        let doctoring = 0
                        let housing = 0
                        let foodsies = 0
                        let peopling = 0
                        let goingPlaces = 0
                        let cleaning = 0
                        
                        const calcSP = completeArray.forEach((quest, i) => {
                            const eachCategory = quest.category.forEach((category, i) => {
                                switch(category){
                                    case "Jobbing":
                                        jobbing = quest.sp
                                    case "Moneys":
                                        moneys = quest.sp
                                    case "Doctoring":
                                        doctoring = quest.sp
                                    case "Housing":
                                        housing = quest.sp
                                    case "Foodsies":
                                        foodsies = quest.sp
                                    case "Peopling":
                                        peopling = quest.sp
                                    case "Going Places":
                                        goingPlaces = quest.sp
                                    case "Cleaning":
                                        cleaning = quest.sp
                                    default:
                                        console.log("No category found")
                                }
                            })
                        })

                        this.setState({
                            allQuestData: mappedQuestData,
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
                            // level: currentLvl,
                        })

                    })
                })
            })
    }
    
    handleAddUserQuest = (quest_id) => {
        axios.put(`players/${this.state._id}`,
            {type:"questCurrent", quest_id:quest_id}).then( res => {
                this.setState(prevState => ({
                    questCurrent: prevState.questCurrent.map(quest =>
                    quest._id === quest_id ? res.data : quest)
                }))
        })
    }

    handleRemoveUserQuest = (quest_id) => {
        axios.put(`players/remove/${this.state._id}`,
            {type:"questCurrent",quest_id: quest_id}).then(res => {
                this.setState(prevState => ({
                    questCurrent: prevState.questCurrent.map(quest =>
                        quest._id === quest_id ? quest : res.data)
                }))
            })
    }

    handleCompleteUserQuest = (quest_id) => {
        console.log(quest_id)
        axios.put(`players/${this.state._id}`,
            {type:"questLog",quest_id:quest_id}).then( res => {
            this.setState(prevState => ({
                questLog: prevState.questLog.map(quest =>
                    quest._id === quest_id ? res.data : quest)
            }))
        })
        axios.put(`players/remove/${this.state._id}`,
            {type:"questCurrent",quest_id: quest_id}).then(res => {
            this.setState(prevState => ({
                questCurrent: prevState.questCurrent.map(quest =>
                    quest._id === quest_id ? quest : res.data)
            }))
        })
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
                    getPlayerQuestandLvlData: this.getPlayerQuestandLvlData,
                    handleAddUserQuest: this.handleAddUserQuest,
                    handleRemoveUserQuest: this.handleRemoveUserQuest,
                    handleCompleteUserQuest: this.handleCompleteUserQuest
                }}>
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