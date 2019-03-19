import React from 'react'
import { Switch, Route } from 'react-router'

//COMPONENTS
import Login from './Login.js'
import SignUp from './SignUp.js'
import WelcomeAbout from './WelcomeAbout.js'
import WelcomeFooter from './WelcomeFooter.js'

const Unauthenticated = () => {
    return(
        <section className="unauthenticated-container">
            <Switch>
                <Route exact path="/welcome/about" component={WelcomeAbout}/>
                <Route exact path="/welcome/login" component={Login}/>
                <Route exact path="/welcome/signup" component={SignUp}/>
            </Switch>
            <WelcomeFooter/>       
        </section>
    )
}

export default Unauthenticated