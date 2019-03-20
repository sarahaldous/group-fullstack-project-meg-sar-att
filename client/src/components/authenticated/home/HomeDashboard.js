import React from 'react'

//COMPONENT
import Post from "./Post.js"

//IMAGE
import Dragon from '../../avatars/004-dragon.png'
import Mermaid from '../../avatars/005-mermaid.png'
import Unicorn from '../../avatars/007-unicorn.png'
import Narwhal from '../../avatars/011-narwhal.png'


const HomeDashboard = () => {
    return (
        <section className="home-dashboard">
            <div>
                <Post avatar={Dragon} name="Dragon" title="has reached Journeyman LvL in tax-preparation"/>
                <Post avatar={Mermaid} name="Mermaid" title="has posted a new quest attempt"/>
                <Post avatar={Unicorn} name="Unicorn" title="has posted a new quest attempt"/>
                <Post avatar={Narwhal} name="Narwhal" title="has reached Novice LvL in dish washing"/>
            </div>
            <div className="status-updates">
                <p>You have <b>5</b> new quest validations</p>
                <p>Your <b>folding laundry</b> quest attempt has been validated. You are now a <b>Master Dishwasher</b>.</p>
                <p>You have <b>3</b> unshared quest attempts</p>
            </div>
        </section>
    )
}

export default HomeDashboard