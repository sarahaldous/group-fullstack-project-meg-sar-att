import React, {Component} from 'react'
import { Switch, Route } from 'react-router'
// import axios from 'axios'

//COMPONENTS
import TempNavBar from "./TempNavBar.js" //delete when real navbar(s) is implemented
import AdminDashboard from "./components/admin/AdminDashboard.js"
import Authenticated from "./components/authenticated/Authenticated.js"
import LoadingPage from "./components/loading-page/LoadingPage.js"
import PlaceHolder from "./components/Placeholder.js"
import Unauthenticated from "./components/unauthenticated/Unauthenticated.js"
import axios from 'axios';

class App extends Component {
    constructor(){
        super()
        this.state={
            name: "",
            avatar: "",
            level: 0,
            questLog: [],
            title: "",
            summary: "",
            description: "",
            youtubeEmbed: "",
            imageUrl: "",
            qLNovice: [],
            qLJourneyman: [],
            qLMaster: []
        }
    }
    componentDidMount(){
        axios.get("/players").then(response => {
            this.setState({
                players: response.data
            })
        })
        .catch(err => console.log(err))
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newPlayer = {
            name: this.state.name,
            avatar: this.state.avatar,
            level: this.state.level,
            questLog: this.state.questLog
        }
        axios.post("/players", newPlayer).then(response => {
            this.setState(prevState => ({
                players: [...prevState.wizards, response.data],
                name: "",
                avatar: "",
                level: 0,
                questLog: []
            }))
        })
    }
    handleDelete = (_id) => {
        axios.delete(`/players/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                players: prevState.players.filter(player => player._id !== _id)
            }))
        })
    }
    render(){
        return (
            <div className="app-container">
                <TempNavBar/>
                <Switch>
                    <Route exact path="/" component={LoadingPage}/>
                    <Route path="/welcome" component={Unauthenticated}/>
                    <Route path="/admin" component={AdminDashboard}/>
                    <Route path="/waitforit" component={PlaceHolder}/>
                    <Route path="/site" component={Authenticated}/>
                </Switch>
            </div>
        )
    }
}

export default App