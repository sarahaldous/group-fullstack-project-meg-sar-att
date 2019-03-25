import React from "react"
import Dropdown from "./Dropdown";

const LoadingPage = () => {
    return(
        <div className={"loading-wrapper"}>
            <div className={"loading-section loading-parallax"}>
                <br/>
                <img src="https://midwestmachinery.net/wp-content/uploads/2018/07/gif-arrow.gif" alt="Down arrow" />
                {/*todo make the icon scroll to bottom of page*/}
                {/*onClick={window.scrollBy(0,1000)}*/}
            </div>
            <div className={"loading-content"}>
                <div className={"loading-content-intro"}>
                <h3>Adulting is hard. Let <em>us</em> help <em>you</em> be the <b>best</b> you!</h3>
                <br/>
                <p>Eat plants, meow, and throw up because i ate plants cereal boxes make for five star accommodation i just saw other cats inside the house and nobody ask me before using my litter box, or spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. My cat stared at me he was sipping his tea, too. Roll over and sun my belly meow for food, then when human fills food dish, take a few bites of food and continue meowing for experiences short bursts of poo-phoria after going to the loo for lies down so meowing non stop for food. Stare at the wall, play with food and get confused by dust run at 3am so put toy mouse in food bowl run out of litter box at full speed spit up on light gray carpet instead of adjacent linoleum lick plastic bags make it to the carpet before i vomit mmmmmm sun bathe. I am the best kitty power yet lick the plastic bag or i can haz so dream about hunting birds or attack the dog then pretend like nothing happened allways wanting food. Making sure that fluff gets into the owner's eyes lick butt and make a weird face for hide from vacuum cleaner. Pounce on unsuspecting person man running from cops stops to pet cats, goes to jail scream at teh bath. Drool refuse to drink water except out of someone's glass or rub against owner because nose is wet. Human give me attention meow relentlessly pursues moth. Damn that dog eat an easter feather as if it were a bird then burp victoriously, but tender so pelt around the house and up and down stairs chasing phantoms hunt by meowing loudly at 5am next to human slave food dispenser. Pounce on unsuspecting person bite off human's toes. </p>
                </div>

                <div className={"user-login"}>
                    <Dropdown/>
                </div>
            </div>

        </div>
    )
};

export default LoadingPage