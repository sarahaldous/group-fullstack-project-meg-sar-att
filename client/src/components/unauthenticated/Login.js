import React from 'react'

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="login">
            <input
                type="text"
                name="name"
                placeholder="username"
                value={props.name}
                onChange={props.handleChange}/>
            <button>Log In</button>
            
        </form>
    )
};
export default Login