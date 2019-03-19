const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
    //  An array of Quest IDs and completed qualification levels
    questLog: {
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("Player", playerSchema)