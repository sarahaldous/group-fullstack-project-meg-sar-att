// import React, {Component} from 'react'
// import axios from 'axios'

// const PlayerContext = React.createContext()

// class PlayerProvider extends Component{
//     constructor(){
//         super()
//         this.state={
//             name: "",
//             avatar: "",
//             level: 0,
//             questLog: []
//         }
//     }
//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value 
//         })
//     }
//     handleSubmit = e => {
//         e.preventDefault()
//         getPlayerData
//     }
//     getPlayerData = () =>{
//         axios.get("/players/:_id").then(res => {
//             console.log(res)
//             this.setState({
//                 players: res.data
//             })
//         })
//         .catch(err => console.log(err))
//     }
    
    
//     render(){
//         return (
//             <PlayerContext.Provider
//                 value={{...this.state, 
//                 getPlayerData: this.state.getPlayerData}}>
//                 {this.props.children}
//                 </PlayerContext.Provider>
//         )
        
//     }
      
    
// }
// export const withPlayer = C => props => (
//     <PlayerContext.Consumer>
//         {value => <C {...props} {...value} />}
//     </PlayerContext.Consumer>
// )
// export default PlayerProvider