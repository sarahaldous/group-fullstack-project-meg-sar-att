const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    description:{
        type: String,
    },
    category: {
        type: Array
    },
    youtubeEmbed: {
        type: String
    },
    imageUrl: {
        type: String
    },
    recommendedMLvl: {
        type: String
    },
    xp: {
        type: Number
    },
    sp: {
        type: Number
    },
    usersCompleted: {
        type: Array,
    }
});

module.exports = mongoose.model("Quest", questSchema);