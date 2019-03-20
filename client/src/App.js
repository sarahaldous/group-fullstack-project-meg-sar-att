import React, {Component} from 'react'
import { Switch, Route } from 'react-router'
// import axios from 'axios'

//COMPONENTS
import TempNavBar from "./TempNavBar.js" //delete when real navbar(s) is implemented
import AdminDashboard from "./components/admin/AdminDashboard.js"
import Authenticated from "./components/authenticated/Authenticated.js"
// import LoadingPage from "./components/loading-page/LoadingPage.js"
import PlaceHolder from "./components/Placeholder.js"
import Unauthenticated from "./components/unauthenticated/Unauthenticated.js"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state={
           
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
    //Players 
    
    //Quests
    componentDidMount(){
        axios.get("/quests").then(response => {
            this.setState({
                quests: response.data
            })
        })
        .catch(err => console.log(err))
    }
    //Players
    
    //Quests
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    //Quests
    handleSubmit = e => {
        e.preventDefault()
        const newQuest = {
            title: this.state.title,
            summary: this.state.summary,
            description: this.state.description,
            youtubeEmbed: this.state.youtubeEmbed,
            imageUrl: this.state.imageUrl,
            qLNovice: [],
            qLJourneyman: [],
            qLMaster: []
            
        }
        axios.post("/quests", newQuest).then(response => {
            this.setState(prevState => ({
                quests: [...prevState.quests, response.data],
                title: "",
                summary: "",
                description: "",
                youtubeEmbed: "",
                imageUrl: "",
                qLNovice: [],
                qLJourneyman: [],
                qLMaster: []
            }))
             
        })
    }
    // player
    
    // player
    handleDelete = (_id) => {
        axios.delete(`/players/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                players: prevState.players.filter(player => player._id !== _id)
            }))
        })
    }
    // quests
    handleDelete = (_id) => {
        axios.delete(`/quests/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                quests: prevState.quests.filter(quest => quest._id !== _id)
            }))
        })
    }
    render(){
        return (
            <div className="app-container">
                <TempNavBar/>
                <Switch>
                    {/* <Route path="/" component={LoadingPage}/> */}
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