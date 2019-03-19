const express = require("express")
const questRouter = express.Router()
const Quest = require("../models/questModel.js")

//  Quests
questRouter.get("/", (req, res, next) => {
    Quest.find((err, quests) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(quests)
    })
})

//  Get One Quest
questRouter.get("/:_id", (req, res, next) => {
    Quest.findOne({_id: req.params._id}, (err, quest) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(quest)
    })
})

// Post NEW Quest
questRouter.post("/", (req, res, next) => {
    const newQuest = new Quest(req.body)
    newQuest.save((err, newQuestObj) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newQuestObj)
    })
})

// Delete One Quest
questRouter.delete("/:_id", (req, res, next) => {
    Quest.findOneAndDelete({_id: req.params._id}, (err, deletedQuest) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`Quest ${deletedQuest.title} was successfully deleted`)
    })
})

// Update One Quest
questRouter.put("/:_id", (req, res, next) => {
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

module.exports = questRouter