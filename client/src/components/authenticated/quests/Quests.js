import React, {Component} from 'react'
import CompletedQuests from "./CompletedQuests.js"
import CurrentQuests from "./CurrentQuests.js"
import QuestLibrary from "./QuestLibrary.js"

class Quests extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle1: false,
            toggle2: true,
            toggle3: false
            }
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
        render() {
            
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
    // return (
    //     <div className="quests-container">
    //         <div className="quest-library-toggle">
    //             <h2 onClick={this.toggler1} className="firstH2">New Quests</h2>
    //             <div className={!this.state.toggle1 ? 'hiddenText' : 'shownText'}>
    //                 {/* <p>
    //                 Pieces of Eight topmast spike fathom marooned gally heave down nipper Plate Fleet chantey. Squiffy keelhaul bilge bilged on her anchor dead men tell no tales deadlights bilge rat bowsprit holystone hearties. Hail-shot wench chase guns lugger Brethren of the Coast run a rig run a shot across the bow rum prow careen.
    //                 </p> */}
    //                 {this.toggler1 ? <QuestLibrary toggler={this.toggler1} {...this.state} toggled={this.state.toggle1}/> : <div></div>}
    //             </div>
    //             {/* <p className={!this.state.toggle1 ? 'hiddenText' : 'shownText'}>Pieces of Eight topmast spike fathom marooned gally heave down nipper Plate Fleet chantey. Squiffy keelhaul bilge bilged on her anchor dead men tell no tales deadlights bilge rat bowsprit holystone hearties. Hail-shot wench chase guns lugger Brethren of the Coast run a rig run a shot across the bow rum prow careen.</p> */}
               

    //         </div>
    //         <div className="current-quests-toggle">
    //             <h2 onClick={this.toggler2} className="secondH2">Current Quests</h2>
    //             {/* <p className={!this.state.toggle2? 'hiddenText' : 'shownText'}>Belaying pin splice the main brace prow keelhaul swing the lead trysail maroon Blimey spike provost. Walk the plank topmast skysail schooner bilged on her anchor lugger gally bounty lugsail rope's end. Prow crack Jennys tea cup run a shot across the bow cog landlubber or just lubber chase guns spike coffer grog blossom sutler.</p> */}
    //                 {this.toggler2 ? <CurrentQuests toggler={this.toggler2} {...this.state} toggled={this.state.toggle2}/> : <div></div>}
    //         </div>
    //         <div className="completed-quests-toggle">
    //             <h2 onClick={this.toggler3} className="thirdH2">Completed Quests</h2>
    //             {/* <p className={!this.state.toggle3? 'hiddenText' : 'shownText'}>Pillage killick black spot chase nipperkin Barbary Coast execution dock take a caulk wherry doubloon. Gold Road lanyard ye Letter of Marque fluke scallywag Cat o'nine tails plunder quarterdeck parley. Case shot tender broadside Letter of Marque yo-ho-ho port killick cable bilge lass.Pillage killick black spot chase nipperkin Barbary Coast execution dock take a caulk wherry doubloon. Gold Road lanyard ye Letter of Marque fluke scallywag Cat o'nine tails plunder quarterdeck parley. Case shot tender broadside Letter of Marque yo-ho-ho port killick cable bilge lass.</p> */}
    //                 {/* <CompletedQuests toggler={this.toggler3} {...this.state} toggled={this.state.toggle3}/> */}
    //                 {this.toggler3 ? <CompletedQuests toggler={this.toggler3} {...this.state} toggled={this.state.toggle3}/> : <div></div>}
    //         </div>
    //     </div>
    //     )
    // }
  
export default Quests

//QuestLibrary = Toggle1
//CurrentQuests = Toggle2
//CompletedQuests = Toggle3