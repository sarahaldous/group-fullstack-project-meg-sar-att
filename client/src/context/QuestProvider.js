import React, {Component} from "react"
import axios from "axios";

const QuestContext = React.createContext()

class QuestProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            summary: "",
            category: [],
            description: "",
            youtubeEmbed: "",
            imageUrl: "",
            recommendedMLvl: "",
            xp: 0,
            sp: 0,
            usersCompleted: [],
            quests: []
        }
    }

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
                    xp: res.data.xp,
                    sp: res.data.sp,
                    usersCompleted: res.data.usersCompleted,
                    _id: res.data._id
                })
                : this.setState({
                    quests: res.data
                })
        })
    }

    getAllQuestData = () =>{
        axios.get("/quests").then(res =>{
            // console.log(res.data)
            const mappedAllQuests = res.data.map((quest, i) => {
                return {
                    key: i,
                    title: quest.title,
                    summary: quest.summary,
                    category: quest.category,
                    youtubeEmbed: quest.youtubeEmbed,
                    description: quest.description,
                    recommendedMLvl: quest.recommendedMLvl,
                    xp: quest.xp,
                    sp: quest.sp,
                    _id: quest._id
                }
            })
            console.log(mappedAllQuests)
            this.setState({
                allQuestData: mappedAllQuests
            })
        })
    }

    render(){
        console.log(this.state)
        return (
            <QuestContext.Provider
                value={{...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    getAllQuestData: this.getAllQuestData
                }}
            >
                {this.props.children}
            </QuestContext.Provider>
        )
    }
}

export const withQuests = C => props => (
    <QuestContext.Consumer>
        {value => <C {...props} {...value} />}
    </QuestContext.Consumer>
)
export default QuestProvider