import React from 'react'

//COMPONENTS
import QuestList from "./QuestList.js"

const CurrentQuests = (props) => {
    console.log(props)
    return (
        <div style={props.toggled ? {height: "58vh"} : {height: 0}} onClick={props.toggler} className={`current-quests-container ${!props.toggled && "hideableDiv"}`}>
            <QuestList/>
            {/* <p>Marzipan marzipan cheesecake chocolate bar gummi bears cotton candy. Fruitcake sweet liquorice apple pie sweet lemon drops soufflé. Sugar plum donut halvah muffin cotton candy pudding cheesecake gummies. Tiramisu oat cake sesame snaps sugar plum pie jujubes topping cookie ice cream. Topping pudding marshmallow carrot cake marzipan brownie. Cheesecake bonbon brownie lollipop bonbon macaroon toffee. Toffee powder sugar plum gummies halvah. Jelly beans jujubes gingerbread chocolate cake pudding. Macaroon pudding pastry cookie gingerbread.</p> */}
        </div>
    )
}

export default CurrentQuests