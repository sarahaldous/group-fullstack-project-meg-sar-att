import React, {Component} from "react"
import {withPlayer} from "../../context/PlayerProvider.js"

class AdminDashboard extends Component {

    render () {
        console.log(this.props)

        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Player Name"
                        value={this.props.name}
                        onChange={this.props.handleChange}/>
                    <input type={"Submit"} onClick={this.props.handleSubmit}/>
                </form>



                <section className="admin-dashboard-container">
                    <h1>Admin's only, go away!</h1>
                    <img src="http://notliberal.com/wp-content/uploads/2018/02/adult-1.jpg" alt={"fallback picture"}/>
                </section>
            </div>
        )
    }
};

export default withPlayer(AdminDashboard)