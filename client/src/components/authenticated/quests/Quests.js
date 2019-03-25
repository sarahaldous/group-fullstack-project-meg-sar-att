import React, {Component} from 'react'

//COMPONENTS
import CompletedQuests from "./CompletedQuests.js"
import CurrentQuests from "./CurrentQuests.js"
import QuestLibrary from "./QuestLibrary.js"

class Quests extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle1: false,
            toggle2: true,
            toggle3: false,
            completedQuests: [],
            currentQuests: [],
            pendingQuests: []
        }
    }

    //---Animation Stuff---------------------//
        noToggleStyles = {
            height: 0,
            paddingBottom: 0
        }

        toggle3Styles = {
            height: "56.8vh",
            paddingBottom: "5vh"
        }

        toggler1 = () => {
            console.log("toggle 1 hit")
            this.setState(prevState =>({
                toggle1: !prevState.toggle1,
                toggle2: !prevState.toggle1 && !prevState.toggle3 ? false : true,
                toggle3: false
            }))
        }

        toggler2 = () => {
            console.log("toggle 2 hit")
            this.setState({
                toggle1: false,
                toggle2: true,
                toggle3: false
            })
        }

        toggler3 = () => {
            console.log("toggle 3 hit")
            this.setState(prevState => ({
                toggle1: false,
                toggle2: !prevState.toggle1 && !prevState.toggle3 ? false : true,
                toggle3: !prevState.toggle3
            }))
        }

    //---DATA--------------------------//

        componentDidMount(){
            console.log("SORTING QUESTS:")

            //Delete once axios is connected
            const fakeUserCompleteArray = ["quest1001", "quest1010", "quest1015"]
            const fakeUserCurrentArray = ["quest1002", "quest1019", "quest1011"]
            const fakeData = [
                {
                    title: "How to Clean Your Oven",
                    summary: "How to clean your oven with baking soda and vinegar!",
                    category: ["cleaning"],
                    description: "How to clean your oven with baking soda and vinegar!",
                    youtubeEmbed: "https://www.youtube.com/embed/73OVlUSP_yM",
                    recommendedMLvl: "journeyman",
                    _id: "quest1001"
                },{
                    title: "How to Properly Clean Dust Out of a PS4",
                    summary: "Consoles are an investment, treat them well.",
                    category: ["cleaning"],
                    youtubeEmbed: "https://www.youtube.com/embed/RceNsKmh6YQ",
                    description: "Consoles are an investment, treat them well.",
                    recommendedMLvl: "master",
                    _id: "quest1002"
                },{
                    title: "How to Store Vegetables in Fridge",
                    summary: "Let's see how to clean and store vegetables.",
                    category: ["foodsies"],
                    youtubeEmbed: "https://www.youtube.com/embed/F1NzA7jC9Cg",
                    description: "After sorting out the vegetables, we have to clean them one by one. Let's clean ladysfinger first. Fill the bowl upto more than half with water. Mix 1/2 cup vinegar or 2-3 teaspoons salt in the water. Wash the ladysfingers in this water thoroughly. This will eliminnate the need to wash them 2-3 times under running water and also save water. Move these into a strainer and wash them under running water once. Let's wash cluster beans now. Wash them in a similar fashion as ladysfingers. Same with gerkins/tindoora. Always wash vegetables before putting them in the fridge. Let's clean tomatoes now. Put tomatoes in bowl of water and soak them for 5 minutes. Move them into a strainer and wash them under running water. Let's see how to clean carrots. Cut off the ends of carrots. Wash them under running water till all the dirt is gone. Let's see how to clean ginger. Break ginger into pieces and soak it in water for half an hour. If we soak ginger in the beginning, then it will be soaked in the time we clean and store other vegetables. Wash the soaked ginger till all the dirt is gone. Leave them to dry on a kitchen towel. Put the cleaned ladysfingers, cluster beans and gerkins/tindoora in zip lock bags or netted bags and store them in the fridge. Store carrots in an air tight container. Dry the ginger pieces with a cloth and put then in a cover with paper towels as shown. Paper towels absorb the excess water in ginger pieces. Seal the cover such that there is no air in the bag. Let's see how to store vegetables that are to be stored outside. Choose a shelf that gets ample light and air. This will keep the vegetables fresh for a longer period of time. Here I put onions and potatoes in the bottom shelf. On the upper shelf I put cleaned tomatoes. Capsicum also could be stored here by putting them in a net bag as shown. Put garlics in a basket or any open container as shown. ",
                    recommendedMLvl: "novice",
                    _id: "quest1003"
                },{
                    title: "How to Make Better Ramen",
                    summary: "How to take packaged ramen up to an actual meal.",
                    category: ["foodsies"],
                    youtubeEmbed: "https://www.youtube.com/embed/",
                    description: "How to take packaged ramen up to an actual meal.",
                    recommendedMLvl: "novice",
                    _id: "quest1004"
                },{
                    title: "Easy Homemade Sandwich Bread Recipe {made from scratch}",
                    summary: "It's so easy to make your own sandwich bread at home, and that way you know there are no preservatives, dough conditioners, or other artificial ingredients. This is a homemade sandwich recipe made from scratch.",
                    category: ["foodsies"],
                    youtubeEmbed: "https://www.youtube.com/embed/X5NsLbPL_VI",
                    description: "It's so easy to make your own sandwich bread at home, and that way you know there are no preservatives, dough conditioners, or other artificial ingredients. This is a homemade sandwich recipe made from scratch.",
                    recommendedMLvl: "master",
                    _id: "quest1005"
                },{
                    title: "Choosing a Health Insurance Plan",
                    summary: "Before you start to evaluate your health plan options this open enrollment season, make sure you fully understand different types of health plans available.",
                    category: ["doctoring"],
                    youtubeEmbed: "https://www.youtube.com/embed/K-KdJD8ne4c",
                    description: "Before you start to evaluate your health plan options this open enrollment season, make sure you fully understand different types of health plans available.",
                    recommendedMLvl: "journeyman",
                    _id: "quest1006"
                },{
                    title: "Ankle sprains 101",
                    summary: 'Each year over a million people have new ankle sprains, and these are just the people who came to seek medical help," says Dr. Glenn Shi, a Mayo Clinic orthopedic surgeon. "There are far more [sprains] that people are treating at home.',
                    category: ["doctoring"],
                    youtubeEmbed: "https://www.youtube.com/embed/JAb2nqxeP8Q",
                    description: 'Each year over a million people have new ankle sprains, and these are just the people who came to seek medical help," says Dr. Glenn Shi, a Mayo Clinic orthopedic surgeon. "There are far more [sprains] that people are treating at home.',
                    recommendedMLvl: "journeyman",
                    _id: "quest1007"
                },{
                    title: "How to Evaluate a Burn | First Aid Training",
                    summary: "How to Evaluate a Burn | First Aid Training",
                    category: ["doctoring"],
                    youtubeEmbed: "https://www.youtube.com/embed/mYWHrRjYoMo",
                    description: "How to Evaluate a Burn | First Aid Training",
                    recommendedMLvl: "journeyman",
                    _id: "quest1008"
                },{
                    title: "Plan and Shop 1 Week of Healthy Meals",
                    summary: "It only takes me about 20 min to plan everything, and then all I have to do is grocery shop - super easy & it makes ALL the difference when it comes to eating healthy & leading a healthy lifestyle",
                    category: ["moneys", "foodsies", "doctoring"],
                    youtubeEmbed: "https://www.youtube.com/embed/v=Xfb7IMwxcAA",
                    description: "It only takes me about 20 min to plan everything, and then all I have to do is grocery shop - super easy & it makes ALL the difference when it comes to eating healthy & leading a healthy lifestyle",
                    recommendedMLvl: "journeyman",
                    _id: "quest1009"
                },{
                    title: "How to Evaluate a Rental Apartment",
                    summary: "The time to discover peeling paint, creaky floorboards, or that the place was built on a cursed burial ground is before you sign on the dotted line.",
                    category: ["housing"],
                    youtubeEmbed: "https://www.youtube.com/embed/v_8W58LMHrs",
                    description: "The time to discover peeling paint, creaky floorboards, or that the place was built on a cursed burial ground is before you sign on the dotted line.",
                    recommendedMLvl: "novice",
                    _id: "quest1010"
                },{
                    title: "Renting a place: how much can you afford?",
                    summary: "When you’re thinking about renting your own place, there’s a lot to figure out. But the most important is how much you can comfortably afford to spend. So, before you start searching for a place to rent, think through everything you’ll have to pay for, which may include more than just the monthly rent. ",
                    category: ["moneys", "housing"],
                    youtubeEmbed: "https://www.youtube.com/embed/grb45dCSA7Q",
                    description: "When you’re thinking about renting your own place, there’s a lot to figure out. But the most important is how much you can comfortably afford to spend. So, before you start searching for a place to rent, think through everything you’ll have to pay for, which may include more than just the monthly rent. ",
                    recommendedMLvl: "novice",
                    _id: "quest1011"
                },{
                    title: "Should I buy a house or continue to rent?",
                    summary: "For those of you who are unsure about whether buying or renting is the better choice.",
                    category: ["moneys", "housing"],
                    youtubeEmbed: "https://www.youtube.com/embed/grb45dCSA7Q",
                    description: "For those of you who are unsure about whether buying or renting is the better choice.",
                    recommendedMLvl: "journeyman",
                    _id: "quest1012"
                },{
                    title: "How To Find Your Passion",
                    summary: "One of the most common questions i receive is about how to find ones passion. We're going to dive deep into a simple yet effective way to finding your very own passion!",
                    category: ["jobbing"],
                    youtubeEmbed: "https://www.youtube.com/embed/6pgaJb2Wwhs",
                    description: "One of the most common questions i receive is about how to find ones passion. We're going to dive deep into a simple yet effective way to finding your very own passion!",
                    recommendedMLvl: "master",
                    _id: "quest1013"
                },{
                    title: "How to Change Careers when You're Lost",
                    summary: "How to Change Careers when You're Lost",
                    category: ["career"],
                    youtubeEmbed: "https://www.youtube.com/embed/TUtx-wC5mqA",
                    description: "How to Change Careers when You're Lost",
                    recommendedMLvl: "journeyman",
                    _id: "quest1014"
                },{
                    title: "7 Early Signs of A Toxic Relationship",
                    summary: "What if the person we fall for isn't who we really think they are? Here are 7 early signs of a potentially toxic relationship.",
                    category: ["peopling", "doctoring"],
                    youtubeEmbed: "https://www.youtube.com/embed/HDNMvuQrcGk",
                    description: "What if the person we fall for isn't who we really think they are?",
                    recommendedMLvl: "novice",
                    _id: "quest1015"
                },{
                    title: "Asking For Space In Relationship",
                    summary: "Sometimes you can get so sucked in to day to day grind of your relationship that you tend to lose sight of what is truly important, why you decided to date each other or get married in the first place. Seeing the big picture can often help put everything in perspective and help you fix some of the communication issues that you’ve been struggling with.",
                    category: ["peopling"],
                    youtubeEmbed: "https://www.youtube.com/embed/7QTLYtQxeB0",
                    description: "Sometimes you can get so sucked in to day to day grind of your relationship that you tend to lose sight of what is truly important, why you decided to date each other or get married in the first place. Seeing the big picture can often help put everything in perspective and help you fix some of the communication issues that you’ve been struggling with.",
                    recommendedMLvl: "master",
                    _id: "quest1016"
                },{
                    title: "5 Signs that You Need Therapy!",
                    summary: "If you are struggling, consider an online counseling session with a licensed professional at BetterHelp. They offer a cost friendly alternative to traditional therapy. ​I hope you all find this helpful and gives you hope for finding the support you need at a price you can afford.",
                    category: ["doctoring"],
                    youtubeEmbed: "https://www.youtube.com/embed/AqnGLiWt_34",
                    description: "If you are struggling, consider an online counseling session with a licensed professional at BetterHelp. They offer a cost friendly alternative to traditional therapy. ​I hope you all find this helpful and gives you hope for finding the support you need at a price you can afford.",
                    recommendedMLvl: "journeyman",
                    _id: "quest1017"
                },{
                    title: "How to Test Drive a Car",
                    summary: "How to inspect and buy a used car. Learn how to go for a test drive so you don't get stuck with a bad car. I show you how to test drive a used car, negotiate a good deal and inspect the title of the used car.",
                    category: ["moneys", "goingPlaces"],
                    youtubeEmbed: "https://www.youtube.com/embed/drbhNLvYxGQ",
                    description: "How to inspect and buy a used car. Learn how to go for a test drive so you don't get stuck with a bad car. I show you how to test drive a used car, negotiate a good deal and inspect the title of the used car.",
                    recommendedMLvl: "journeyman",
                    _id: "quest1018"
                },{
                    title: "STEP BY STEP GUIDE TO GETTING A PASSPORT ",
                    summary: "Hey everyone! AsToldByBanks here. In this video I explain the process to getting a passport!",
                    category: ["goingPlaces"],
                    youtubeEmbed: "https://www.youtube.com/embed/TRrCrg1L0U",
                    description: "Hey everyone! AsToldByBanks here. In this video I explain the process to getting a passport!",
                    recommendedMLvl: "journeyman",
                    _id: "quest1019"
                }
            ]

            
        }

    render(){
        return (
            <div className="quests-container">
                <div className="quest-library-toggle">
                    <h2 onClick={this.toggler1} >New Quests</h2>
                    <div className="transition" style={this.state.toggle1 ? {height: "56.8vh"} : {height: 0}}>
                        <QuestLibrary toggled={this.state.toggle1}/>
                    </div>
                    {/* {this.state.toggle1 ? <QuestLibrary toggler={this.toggler1} {...this.state} toggled={this.state.toggle1}/> : null }   */}
                </div>
                <div className="current-quests-toggle">
                    <h2 onClick={this.toggler2} >Current Quests</h2>
                    <div className="transition" style={this.state.toggle2 ? {height: "56.8vh"} : {height: 0}}>
                        <CurrentQuests toggled={this.state.toggle2}/>
                    </div>
                    {/* {this.state.toggle2 ? <CurrentQuests toggler={this.toggler2} {...this.state} toggled={this.state.toggle2}/> : <div></div>} */}
                </div>
                <div className="completed-quests-toggle">
                    <h2 onClick={this.toggler3} >Completed Quests</h2>
                    <div className="transition" style={this.state.toggle3 ? {height: "56.8vh"} : {height: 0}}>
                        <CompletedQuests toggled={this.state.toggle3}/>
                    </div>
                    {/* {this.state.toggle3 ? <CompletedQuests toggler={this.toggler3} {...this.state} toggled={this.state.toggle3}/> : <div></div>} */}
                </div>
            </div>
        )
    }
}

export default Quests

// questCategoryArray = ["jobbing", "moneys", "doctoring", "housing", "foodsies", "peopling", "goingPlaces", "cleaning"]

// ,{
//     title: "",
//     summary: "",
//     category: [""],
//     youtubeEmbed: "https://www.youtube.com/embed/",
//     description: "",
//     recommendedMLvl: ""
// }