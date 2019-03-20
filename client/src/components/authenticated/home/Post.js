import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <img alt={props.name} src={props.avatar}/>
            <div>
                <h4>{props.name}</h4>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Post