import React from 'react'

//COMPONENTS
import QuestList from "./QuestList.js"

const CompletedQuests = (props) => {
    console.log(props)
    let isToggled = props.toggle3
    return (
        <div style={props.toggled ? {height: "58vh"} : {height: 0}} onClick={props.toggler} className={`completed-quests-container ${!props.toggled && "hideableDiv"}`}>
        
        {/* //     ? {overflowY: "hidden", height: 0, transitionDuration: "1s", zIndex: 3} 
        //     : {overflowY: "visible", height: 300, transitionDuration: "1s", zIndex: 1}} */}
            <QuestList/>
            {/* <p  className={isToggled ? 'textShowing':"hideableDiv" }  >Topping candy sweet roll dessert caramels oat cake donut. Candy canes bonbon marshmallow oat cake. Brownie powder brownie pudding gummies sweet bonbon croissant powder. Tiramisu biscuit cupcake. Sweet roll icing macaroon donut wafer chupa chups icing. Lollipop halvah donut muffin dessert. Marshmallow tart toffee bear claw candy. Candy chupa chups tiramisu sugar plum dessert toffee muffin danish toffee. Pie pie gummi bears. Sweet roll dessert marzipan tiramisu.</p> */}
            {/* <p  style={!isToggled 
            ? {overflowY: "hidden", opacity: 0, transitionDuration: "1s"} 
            : {overflowY: "visible", opacity: 1, transitionDuration: "1s"}} >Topping candy sweet roll dessert caramels oat cake donut. Candy canes bonbon marshmallow oat cake. Brownie powder brownie pudding gummies sweet bonbon croissant powder. Tiramisu biscuit cupcake. Sweet roll icing macaroon donut wafer chupa chups icing. Lollipop halvah donut muffin dessert. Marshmallow tart toffee bear claw candy. Candy chupa chups tiramisu sugar plum dessert toffee muffin danish toffee. Pie pie gummi bears. Sweet roll dessert marzipan tiramisu.</p> */}
        </div>
    )
}

export default CompletedQuests