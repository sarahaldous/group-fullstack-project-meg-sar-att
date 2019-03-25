import React, {Component} from "react"
import axios from "axios";


const QuestContext = React.createContext()

class QuestProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            summary: "",
            category: "",
            description: "",
            youtubeEmbed: "",
            imageUrl: "",
            recommendedMLvl: "",
            qLNovice: "",
            qLJourneyman: "",
            qLMasterqLGrandMaster: ""
        }
    }

    // questCategoryArray = ["jobbing", "moneys", "doctoring", "housing", "foodsies", "peopling", "goingPlaces", "cleaning"]

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.getQuestData(this.state._id)
    }

    togglerPlayerData = () => {
        this.setState(prevState => ({
            togPlayerData: !prevState.togPlayerData
        }))
    }

    togglerQuestData = () => {
        this.setState(prevState => ({
            togQuestData: !prevState.togQuestData
        }))
    }

    getQuestData = (_id) => {
        console.log(_id)
        axios.get(`/quests/$(_id)`).then(res => {
            console.log(res)
            _id.length > 0
                ? this.setState({
                    title: res.data.title,
                    summary: res.data.summary,
                    category: res.data.category,
                    description: res.data.description,
                    youtubeEmbed: res.data.youtubeEmbed,
                    imageUrl: res.data.imageUrl,
                    recommendedMLvl: res.data.recommendedMLvl,
                    qLNovice: res.data.qLNovice,
                    qLJourneyman: res.data.qLJourneyman,
                    qLMasterqLGrandMaster: res.data.qLMasterqLGrandMaster,
                    _id: res.data._id
                })
                : this.setState({
                    quests: res.data
                })
        })
    }

    render(){
        console.log(this.state)
        return (
            <QuestContext.Provider
                value={{...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit
                }}
            >
                {this.props.children}
            </QuestContext.Provider>
        )
    }
}

export const withQuests= C => props => (
    <QuestsContext.Consumer>
        {value => <C {...props} {...value} />}
    </QuestsContext.Consumer>
)

export default QuestProvider