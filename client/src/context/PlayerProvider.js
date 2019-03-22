import React, {Component} from 'react'
import axios from 'axios'

const PlayerContext = React.createContext()

class PlayerProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            avatar: "",
            level: 0,
            questLog: [],
            _id: ""
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    handleSubmit = e => {
        console.log(e)
        e.preventDefault()
        this.getPlayerData(this.state._id)
    }

    getPlayerData = (_id) => {
        console.log(_id)
        axios.get(`/players/${_id}`).then(res => {

            console.log(res)
            this.setState({
                name: res.data.name
            })
        })
    }

    render(){
        return (
            <PlayerContext.Provider
                value={{...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit
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