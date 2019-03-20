const express = require("express")
const playerRouter = express.Router()
const Player = require("../models/playerModel.js")

// Get all players
playerRouter.route("/")
    .get((req, res, next) => {
        Player.find((err, players) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(players)
        })
    })
// Post NEW Player
    .post((req, res, next) => {
        const newPlayer = new Player(req.body)
        newPlayer.save((err, newPlayerObj) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newPlayerObj)
        })
    })

//    ONE PLAYER MANIPULATION
//  Get One Player
playerRouter.route("/:_id")
    .get( (req, res, next) => {
        Player.findOne({_id: req.params._id}, (err, player) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(player)
        })
    })
// Delete One Player
    .delete((req, res, next) => {
        Player.findOneAndDelete({_id: req.params._id}, (err, deletedPlayer) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(202).send(`Player ${deletedPlayer.name} was successfully deleted`)
        })
    })
// Update One Player
    .put((req, res, next) => {
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

module.exports = playerRouter