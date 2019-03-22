import React, {Component} from 'react'
import axios from 'axios'

const PlayerContext = React.createContext();

class PlayerProvider extends Component{
    constructor(){
        super();
        this.state={
            name: "",
            avatar: "",
            level: 0,
            questLog: [],
            _id: ""
        //    fixme replace hardcoded ID above once state of logged in user established
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(e)
        this.getPlayerData(this.state._id)
    };
    getPlayerData = _id => {
        axios.get(`/players/${_id}`).then(res => {
            console.log(res);
            this.setState({
                name: res.data.name
            })
        })
        .catch(err => console.log(err))
    };


    render(){
        return (
            <PlayerContext.Provider
                value={{...this.state, 
                getPlayerData: this.getPlayerData,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit}}>
                {this.props.children}
                </PlayerContext.Provider>
        )
    }
      
    
}
export const withPlayer = C => props => (
    <PlayerContext.Consumer>
        {value => <C {...props} {...value} />}
    </PlayerContext.Consumer>
);
export default PlayerProvider