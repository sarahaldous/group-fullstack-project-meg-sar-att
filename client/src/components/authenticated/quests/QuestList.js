import React, {Component} from 'react'

//COMPONENTS
import QuestCard from './QuestCard.js'

class QuestList extends Component {
    render(props){
        console.log(`Quest List has recieved ${this.props.questStatus} Quest Data:`)
        console.log(this.props.listOfQuests)
        const mappedQuests = this.props.listOfQuests.map((quest, i) => {
            return  <QuestCard
                        status={this.props.questStatus}
                        key={i}
                        title={quest.title}
                        summary={quest.summary}
                        category={quest.category}
                        youtubeEmbed={quest.youtubeEmbed}
                        description={quest.description}
                        recommendedMLvl={quest.recommendedMLvl}
                        xp={quest.xp}
                        sp={quest.sp}
                        _id={quest._id}
                    />
        })

        return (
            <div className="quest-list">
                {mappedQuests}
            </div>
        )
    }
}

export default QuestList