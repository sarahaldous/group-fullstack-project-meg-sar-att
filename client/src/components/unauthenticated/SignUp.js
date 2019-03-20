import React from "react"

const SignUp = (props) => {
    return (
        //Placeholder sign-up form. Redo with needed new user attributes from model/route.
        <form className="sign-up">
            <input
                type="text"
                name="name"
                placeholder="Username"
                value={props.name}
                onChange={props.handleChange}/>
            <input
                type="text"
                name="avatar"
                placeholder="Avatar"
                value={props.avatar}
                onChange={props.handleChange}/>
            <input
                type="text"
                name="password"
                placeholder="Password"
                value={props.password}
                onChange={props.handleChange}/>
            <input
                type="text"
                name="password"
                placeholder="Confirm Password"
                value={props.password}
                onChange={props.handleChange}/>
           
            <button>Sign Up</button>
        </form>
    )
};

export default SignUp