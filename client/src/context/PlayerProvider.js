import React, {Component} from 'react'
import axios from 'axios'

const PlayerContext = React.createContext()

class PlayerProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            avatar: "",
            title: "",
            level: 0,
            questLog: [],
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
        // this.setState( prevState => ({
        //     togPlayerData : !prevState.togPlayerData
        // }))
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
        console.log(_id)
        axios.get(`/players/${_id}`).then(res => {
            console.log(res)
            _id.length > 0
                ? this.setState({
                    name: res.data.name,
                    avatar: res.data.avatar,
                    title: res.data.name,
                    level: res.data.level,
                    questLog: res.data.questLog,
                    _id: res.data._id
                })
                : this.setState({
                    players: res.data
                })
        })
    }

    render(){
        console.log(this.state)
        return (
            <PlayerContext.Provider
                value={{...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    togglerPlayerData: this.togglerPlayerData,
                    togglerQuestData: this.togglerQuestData
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