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
    title: {
        type: String
    },
    xp: {
        type: Number
    },
    level: {
        type: Number,
        default: 0
    },
    //  An array of Quest IDs completed
    questLog: {
        type: [String],
        default: []
    },
    // An array of Quest IDs currently selected
    questCurrent:{
        type: [String],
        default: []
    },
    //  Skill categories
    jobbing: {
        type: Number,
        default: 0
    },
    moneys: {
        type: Number,
        default: 0
    },
    doctoring: {
        type: Number,
        default: 0
    },
    housing: {
        type: Number,
        default: 0
    },
    foodsies: {
        type: Number,
        default: 0
    },
    peopling: {
        type: Number,
        default: 0
    },
    goingPlaces: {
        type: Number,
        default: 0
    },
    cleaning: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Player", playerSchema);