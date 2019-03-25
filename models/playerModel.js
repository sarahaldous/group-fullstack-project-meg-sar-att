const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Evil-2-icon.png"
    },
    level: {
        type: Number,
        default: 0
    },
    //  An array of Quest IDs completed
    questLog: {
        type: Schema.Types.ObjectId
    },
    // An array of Quest IDs currently selected
    questCurrent:{
        type: Schema.Types.ObjectId
    },
    //  Skill categories
    jobbing: {
        type: Number
    },
    moneys: {
        type: Number
    },
    doctoring: {
        type: Number
    },
    housing: {
        type: Number
    },
    foodsies: {
        type: Number
    },
    peopling: {
        type: Number
    },
    goingPlaces: {
        type: Number
    },
    cleaning: {
        type: Number
    }
});

module.exports = mongoose.model("Player", playerSchema);