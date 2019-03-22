import React, {Component} from "react"
import {withPlayer} from "../../context/PlayerProvider.js"

class AdminDashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        name="_id"
                        placeholder="Player ID"
                        value={this.props._id}
                        onChange={this.props.handleChange}/>
                    <input type={"submit"} value={"Submit"}/>
                </form>

                <section className="admin-dashboard-container">
                    <h1>Admin's only, go away!</h1>
                    <img src="http://notliberal.com/wp-content/uploads/2018/02/adult-1.jpg" alt={"whatever"}/>
                </section>
            </div>
        )
    }

}

export default withPlayer(AdminDashboard)