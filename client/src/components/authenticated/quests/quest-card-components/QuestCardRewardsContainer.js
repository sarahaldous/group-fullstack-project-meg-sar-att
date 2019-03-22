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
    render(){
        console.log(this.props.questRewardMastery)
        const mastery = () => {
            switch(this.props.questRewardMastery){
                case "novice":
                    return noviceIcon
                    break
                case "journeyman":
                    return journeymanIcon
                    break
                case "master":
                    return masterIcon
                    break
                case "grandmaster":
                    return grandMasterIcon
                    break
            }
        }
        const category = () => {
            
            // if(this.props.questCateogry === "career"){
            //     return careerIcon
            // }
        }
        console.log(mastery())
        return (
            <div className="reward-container">
                <div className="xp">
                    <h2>{this.props.questRewardXP}</h2>
                    <p>XP</p>
                </div>
                <img className="mastery-lvl" alt="mastery-lvl" src={mastery()}/>
                <div className="skill-points">
                    <div>
                        <h2>{this.props.questRewardSP}</h2>
                        <p>SP</p>
                    </div>
                    <img alt="category" src={cleaningIcon}/>
                </div>
            </div>
        )
    }
}

export default QuestCardRewardsContainer