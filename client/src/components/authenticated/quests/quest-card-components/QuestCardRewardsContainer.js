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
        const masteryIcon = () => {
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
                    // return ""
                    return console.log("Warning: Failed to identify mastery lvl.")
            }
        }

        const categoryIcon = () => {
            for(let i = 0; i < this.props.category.length; i++){
                switch(this.props.category[i]){
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
                        // return ""
                        return console.log("Warning: Failed to identify quest categories.")
                }
            }
        }


        return (
            <div className="reward-container">
                <div className="xp">
                    <h2>{this.props.xp}</h2>
                    <p>XP</p>
                </div>
                <div className="mastery-container">
                    <img className="mastery-icon" alt="recommended level" src={masteryIcon()}/>
                    <p>{this.props.recommendedMLvl}</p>
                </div>
                <div className="skills-container">
                    <div className="skill-icons">
                        <img className="mastery-icon" alt="recommended level" src={categoryIcon()}/>
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