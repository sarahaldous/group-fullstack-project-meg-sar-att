import React from "react"
import withPlayer from "../../context/PlayerProvider.js"

const AdminDashboard = (props) => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    value={props.name}
                    onChange={props.handleChange}/>
                
            </form>
        <section className="admin-dashboard-container">
            <h1>Admin's only, go away!</h1>
            <img src="http://notliberal.com/wp-content/uploads/2018/02/adult-1.jpg"/>
        </section>
        </div>
    )
}

export default AdminDashboard
// export default withPlayer(AdminDashboard)