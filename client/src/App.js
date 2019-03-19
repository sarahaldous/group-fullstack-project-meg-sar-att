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

class App extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return (
            <div className="app-container">
                <TempNavBar/>
                <Switch>
                    {/* <Route path="/" component={LoadingPage}/> */}
                    <Route path="/welcome" component={Unauthenticated}/>
                    <Route path="/admin" component={AdminDashboard}/>
                    <Route path="/site/waitforit" component={PlaceHolder}/>
                    <Route path="/site/home" component={Authenticated}/>
                </Switch>
            </div>
        )
    }
}

export default App