import React, {Component} from "react"
import {withPlayer} from "../../context/PlayerProvider.js"
import UserDashboard from "../authenticated/user/UserDashboard";

class AdminDashboard extends Component {
    constructor(){
        super()
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <span>Leave blank and just hit submit if you want all players back</span> <br/>
                <span>Sample player ID: <br/>5c92e473a352cd622ed31850</span>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        name="_id"
                        placeholder="Player ID"
                        value={this.props._id}
                        onChange={this.props.handleChange}/>
                    <input type={"submit"} value={"Submit"}/>
                </form>
                {this.props.name.length > 0 &&
                <h4>{this.props.name}</h4>}
                {this.props.name.length > 0 &&
                <UserDashboard {...this.props}/>}


            </div>
        )
    }

}

export default withPlayer(AdminDashboard)