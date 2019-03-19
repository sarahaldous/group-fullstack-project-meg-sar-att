const express = require("express")
const adultingRouter = express.Router()
const Quest = require("../models/questModel.js")
const Player = require("../models/playerModel.js")

//    GET ALL    //    //    GET ALL    //
    //Players
adultingRouter.get("/players", (req, res, next) => {
    Player.find((err, players) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(players)
    })
})

    //  Quests
adultingRouter.get("/quests", (req, res, next) => {
    Quest.find((err, quests) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(quests)
    })
})

//    GET ONE    //    //    GET ONE    //
    //  Get One Player
adultingRouter.get("/players/:_id", (req, res, next) => {
    Player.findOne({_id: req.params._id}, (err, player) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(player)
    })
})

    //  Get One Quest
adultingRouter.get("/quests/:_id", (req, res, next) => {
    Quest.findOne({_id: req.params._id}, (err, quest) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(quest)
    })
})

//    POST NEW    //    //    POST NEW    //
    // Post NEW Player
adultingRouter.post("/players", (req, res, next) => {
    const newPlayer = new Player(req.body)
    newPlayer.save((err, newPlayerObj) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPlayerObj)
    })
})

    // Post NEW Quest
adultingRouter.post("/quests", (req, res, next) => {
    const newQuest = new Quest(req.body)
    newQuest.save((err, newQuestObj) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newQuestObj)
    })
})

//    DELETE    //    //    DELETE    //
    // Delete One Player
adultingRouter.delete("/players/:_id", (req, res, next) => {
    Player.findOneAndDelete({_id: req.params._id}, (err, deletedPlayer) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`Player ${deletedPlayer.name} was successfully deleted`)
    })
})

    // Delete One Quest
adultingRouter.delete("/quests/:_id", (req, res, next) => {
    Quest.findOneAndDelete({_id: req.params._id}, (err, deletedQuest) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`Quest ${deletedQuest.title} was successfully deleted`)
    })
})

//    UPDATE ONE    //    //    UPDATE ONE    //
    // Update One Player
adultingRouter.put("/players/:_id", (req, res, next) => {
    Player.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedPlayer) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPlayer)
        })
})

// Update One Quest
adultingRouter.put("/quests/:_id", (req, res, next) => {
    Quest.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedQuest) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedQuest)
        })
})

module.exports = adultingRouter