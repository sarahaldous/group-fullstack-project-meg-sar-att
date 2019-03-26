import React, {Component} from 'react'

//IMAGES
   //Mastery Icons
   import grandMasterIcon from '../rank-icons/grandmaster.png'
   import masterIcon from '../rank-icons/master.png'
   import journeymanIcon from '../rank-icons/journeyman.png'
   import noviceIcon from '../rank-icons/novice.png'
   //Category Icons
   import careerIcon from "../category-icons/career.png"
   import financeIcon from "../category-icons/finance.png"
   import healthIcon from "../category-icons/health.png"
   import housingIcon from "../category-icons/housing.png"
   import foodIcon from "../category-icons/food.png"
   import peoplingIcon from "../category-icons/peopling.png"
   import transportationIcon from "../category-icons/transportation.png"
   import cleaningIcon from "../category-icons/cleaning.png"


class QuestCardRewardsContainer extends Component {
   render(props){
       const mastery = () => {
           switch(this.props.recommendedMLvl){
                case "novice":
                    return noviceIcon
                case "journeyman":
                    return journeymanIcon
                case "master":
                    return masterIcon
                case "grandmaster":
                    return grandMasterIcon
                default: 
                    return ""
                    // return console.log("Warning: Failed to identify mastery lvl.")
            }
        }

        const category = () => {
            switch(this.props.category[0]){
                case "cleaning":
                    return cleaningIcon
                case "jobbing":
                    return careerIcon
                case "moneys":
                    return financeIcon
                case "doctoring":
                    return healthIcon
                case "housing":
                    return housingIcon
                case "foodsies":
                    return foodIcon
                case "peopling":
                    return peoplingIcon
                case "goingPlaces":
                    return transportationIcon
                default: 
                    // return console.log("Warning: Failed to identify quest categories.")
                    return ""
            }
        }

        // const mapCategoryIcons = this.props.category.map((category, i) => {
        //     const icon = () => {
        //         switch(category){
        //             case "cleaning":
        //                 return cleaningIcon
        //             case "jobbing":
        //                 return careerIcon
        //             case "moneys":
        //                 return financeIcon
        //             case "doctoring":
        //                 return healthIcon
        //             case "housing":
        //                 return housingIcon
        //             case "foodsies":
        //                 return foodIcon
        //             case "peopling":
        //                 return peoplingIcon
        //             case "goingPlaces":
        //                 return transportationIcon
        //             default: 
        //                 // return console.log("Warning: Failed to identify quest categories.")
        //                 return ""
        //         }
        //     }
        //     return <img alt="category" src={icon()} key={i}/>
        // })

        return (
            <div className="reward-container">
                <div className="xp">
                    <h2>{this.props.xp}</h2>
                    <p>XP</p>
                </div>
                <div className="mastery-container">
                    <img className="mastery-icon" alt="recommended level" src={mastery()}/>
                    <p>{this.props.recommendedMLvl}</p>
                </div>
                <div className="skills-container">
                    <div className="skill-icons">
                        {/* {mapCategoryIcons} */}
                    </div>
                    <div className="skill-points">
                        <h2>{this.props.sp}</h2>
                        <p>SP</p>
                    </div>
                </div>
            </div>
        )
   }
}

export default QuestCardRewardsContainer