import React, {Component} from 'react'
import axios from 'axios'

const PlayerContext = React.createContext()

class PlayerProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "",
            avatar: "",
            title: "",
            xp: 0,
            level: 0,
            questLog: [],
            questCurrent: [],
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
        })
    })
    }

    handleAddUserQuest = () => {
        
        console.log("The Add Quest button has been pushed")
    }

    // handleRemoveUserQuest = () => {
    // }

    // handleCompleteUserQuest = () => {
    // }

    render(){
        console.log(this.state)
        return (
            <PlayerContext.Provider
                value={{...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    togglerPlayerData: this.togglerPlayerData,
                    togglerQuestData: this.togglerQuestData,
                    getPlayerData: this.getPlayerData
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