getPlayerData = (_id) => {

    typeof _id === 'undefined'

        // No player is logged in
        ?   axios.get(`/players/`).then(res => {
                this.setState({
                    players: res.data
                })
            })

        // Player has logged in
        :   axios.get(`/players/${_id}`).then(res => {

                console.log("Aquiring player data, please wait...")

                const {
                    name, 
                    avatar, 
                    title, 
                    xp, 
                    level, 
                    questLog, 
                    questCurrent, 
                    jobbing, 
                    moneys, 
                    doctoring, 
                    housing, 
                    foodsies, 
                    peopling, 
                    goingPlaces, 
                    cleaning
                } = res.data

                console.log("Player data found.")
                this.setState({
                    name: name,
                    avatar: avatar,
                    title: title,
                    xp: xp,
                    level: level,
                    questLog: questLog,
                    questCurrent: questCurrent,
                    jobbing: jobbing,
                    moneys: moneys,
                    doctoring: doctoring,
                    housing: housing,
                    foodsies: foodsies,
                    peopling: peopling,
                    goingPlaces: goingPlaces,
                    cleaning: cleaning,
                    _id: res.data._id
                }, () => {

                    const isPlayerInfoUpdated = () => {
                        // if player data has been updated
                        if(this.state.name){
                            console.log(`${this.props.name} is currently logged in.`)
                            console.log(`Aquiring player quest data, please wait....`)

                            axios.get("/quests").then(res => {
                                const questData = res.data
                                const mappedQuestArray = []
                                const mappedQuestData = questData.map((quest, i) => {
                                    const questDetails = {
                                        key: i,
                                        title: quest.title,
                                        description: quest.description,
                                        category: quest.category,
                                        youtubeEmbed: quest.youtubeEmbed,
                                        recommendedMLvl: quest.recommendedMLvl,
                                        xp: quest.xp,
                                        sp: quest.sp,
                                        _id: quest._id
                                    }
                                    mappedQuestArray.push(questDetails)
                                })
                                console.log(`${mappedQuestData.length} quests recovered from database.`)

                                this.setState({
                                    allQuestData: mappedQuestArray
                                }, () => {

                                    const isQuestDataUpdated = () => {

                                        // if quest raw data has been updated
                                        if(this.state.allQuestData.length > 0) {

                                            //Populating Complete Quest Array
                                            const completeArray = []
                                            const completeArrayMap = mappedQuestArray.map((quest, i) => {
                                                for(let j=0; j < this.state.questLog.length; j++){
                                                    if(this.state.questLog[j] === quest._id){
                                                        const grabbedQuest = {
                                                            key: i,
                                                            title: quest.title,
                                                            description: quest.description,
                                                            category: quest.category,
                                                            youtubeEmbed: quest.youtubeEmbed,
                                                            recommendedMLvl: quest.recommendedMLvl,
                                                            xp: quest.xp,
                                                            sp: quest.sp,
                                                            _id: quest._id
                                                        }
                                                        completeArray.push(grabbedQuest)
                                                    }
                                                }
                                            })

                                            // Populating Current Quest Array
                                            const currentArray = []
                                            const currentArrayMap = mappedQuestArray.map((quest, i) => {
                                                if (this.state.questCurrent.length === 0){
                                                    console.log("This player is not currently working on any quests.")
                                                    return ""
                                                } else {
                                                    for(let j=0; j < this.state.questCurrent.length; j++){
                                                        if(this.state.questCurrent[j] === quest._id){
                                                            const grabbedQuest = {
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
                                                            currentArray.push(grabbedQuest)
                                                        }
                                                    }
                                                    return currentArray
                                                }
                                            })

                                            // Determin Player's Full XP
                                            const pullCompleteXP = completeArray.map((quest, i) => {
                                                return quest.xp
                                            })

                                            const reduceToXP = pullCompleteXP.reduce((total, num) => total + num)

                                            let jobbing = 0
                                            let moneys = 0
                                            let doctoring = 0
                                            let housing = 0
                                            let foodsies = 0
                                            let peopling = 0
                                            let goingPlaces = 0
                                            let cleaning = 0

                                            const calcSP = () => {
                                                completeArray.forEach((quest, i) => {
                                                    const eachCategory = quest.category.forEach((category, i) => {
                                                        switch(category){
                                                            case "Jobbing":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in jobbing.`)
                                                                jobbing = jobbing += quest.sp
                                                                break
                                                            case "Moneys":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in moneys.`)
                                                                moneys = moneys += quest.sp
                                                                break
                                                            case "Doctoring":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in doctoring.`)
                                                                doctoring = doctoring += quest.sp
                                                                break
                                                            case "Housing":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in housing.`)
                                                                housing = housing += quest.sp
                                                                break
                                                            case "Foodsies":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in foodsies.`)
                                                                foodsies = foodsies += quest.sp
                                                                break
                                                            case "Peopling":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in peopling.`)
                                                                peopling = peopling += quest.sp
                                                                break
                                                            case "Going Places":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in going places.`)
                                                                goingPlaces = goingPlaces += quest.sp
                                                                break
                                                            case "Cleaning":
                                                                console.log(`${this.state.name} has acquired ${quest.sp} sp in cleaning.`)
                                                                cleaning = cleaning += quest.sp
                                                                break
                                                            default:
                                                                break
                                                        }
                                                    })
                                                })
                                            }
                                            calcSP()

                                            const dataStatusMessages = () => {
                                                console.log(`${this.state.questLog.length} quests have been completed by ${this.state.name}.`)
                                                console.log(`${this.state.name} is working on ${this.state.questCurrent.length} quests at this time.`)
                                                console.log(`${this.state.name} has ${jobbing} sp in jobbing, ${moneys} sp in moneys, ${doctoring} sp in doctoring, ${housing} sp in housing, ${foodsies} sp in foodsies, ${peopling} sp in peopling, ${goingPlaces} sp in goingPlaces, and ${cleaning} sp in cleaning.`)
                                            }
                                            dataStatusMessages()

                                            this.setState({
                                                detailedQuestCurrent: currentArray,
                                                detailedQuestLog: completeArray,
                                                xp: reduceToXP,
                                                jobbing: jobbing,
                                                moneys: moneys,
                                                doctoring: doctoring,
                                                housing: housing,
                                                foodsies: foodsies,
                                                peopling: peopling,
                                                goingPlaces: goingPlaces,
                                                cleaning: cleaning,
                                            })

                                        // if quest raw data has not been updated
                                        } else {
                                            console.log("Loading, please wait...")
                                        }
                                    }
                                    isQuestDataUpdated()
                                })
                            })

                        // if player data has not been updated
                        } else {
                            console.log("Loading, please wait...")
                        }
                    }
                    isPlayerInfoUpdated()
                })
            })
}


