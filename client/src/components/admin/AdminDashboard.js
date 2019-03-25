import React, {Component} from "react"
import {withPlayer} from "../../context/PlayerProvider.js"
import UserDashboard from "../authenticated/user/UserDashboard";

class AdminDashboard extends Component {
    // constructor(){
    //     super()
    // }

    render() {
        console.log(this.props)
        return (
            <div className={"admin-dashboard-container"}>
                <div className={"adminQuery"}>
                <h4>Player query</h4>
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
                </div>
                <hr/>
                <div className={"adminResults"}>
                    {typeof this.props.name === "undefined"
                    ? null
                    :   /*if individual user retrieved*/
                        this.props.name.length > 0 &&
                        <UserDashboard {...this.props}/>}
                        {/*if all users retrieved*/}
                        {this.props.players.length > 0 &&
                        this.props.players.map(player =>
                        <UserDashboard {...player} key={player._id}/>)
                        }
                </div>
            </div>
        )
    }
}

export default withPlayer(AdminDashboard)