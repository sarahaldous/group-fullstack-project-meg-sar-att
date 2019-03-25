const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    category: {
        type: String
    },
    description: {
        type: String
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
    qLNovice: {
        type: String,
        playerIDs: Schema.Types.ObjectId
    },
    qLJourneyman: {
        type: String,
        playerIDs: Schema.Types.ObjectId
    },
    qLMaster: {
        type: String,
        playerIDs: Schema.Types.ObjectId
    },qLGrandMaster: {
        type: String,
        playerIDs: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model("Quest", questSchema);