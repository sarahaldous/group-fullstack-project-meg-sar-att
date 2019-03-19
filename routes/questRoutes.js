const express = require("express")
const questRouter = express.Router()
const Quest = require("../models/questModel.js")


questRouter.route("/")
    .get((req, res, next) => {
        Quest.find((err, quests) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(quests)
        })
    })
    .post((req, res, next) => {
        const newQuest = new Quest(req.body)
        newQuest.save((err, newQuestObj) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newQuestObj)
        })
    })


questRouter.route("./:_id")
    .get( (req, res, next) => {
        Quest.findOne({_id: req.params._id}, (err, quest) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(quest)
        })
    })
    .delete( (req, res, next) => {
        Quest.findOneAndDelete({_id: req.params._id}, (err, deletedQuest) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(202).send(`Quest ${deletedQuest.title} was successfully deleted`)
        })
    })
    .put((req, res, next) => {
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