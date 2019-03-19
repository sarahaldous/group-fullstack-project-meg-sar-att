const express = require("express")
const playerRouter = express.Router()
const Player = require("../models/playerModel.js")

//    GET ALL    //    //    GET ALL    //
//Players
playerRouter.get("/", (req, res, next) => {
    Player.find((err, players) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(players)
    })
})

//    GET ONE    //    //    GET ONE    //
//  Get One Player
playerRouter.get("/:_id", (req, res, next) => {
    Player.findOne({_id: req.params._id}, (err, player) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(player)
    })
})

//    POST NEW    //    //    POST NEW    //
// Post NEW Player
playerRouter.post("/", (req, res, next) => {
    const newPlayer = new Player(req.body)
    newPlayer.save((err, newPlayerObj) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPlayerObj)
    })
})

//    DELETE    //    //    DELETE    //
// Delete One Player
playerRouter.delete("/:_id", (req, res, next) => {
    Player.findOneAndDelete({_id: req.params._id}, (err, deletedPlayer) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`Player ${deletedPlayer.name} was successfully deleted`)
    })
})

//    UPDATE ONE    //    //    UPDATE ONE    //
// Update One Player
playerRouter.put("/:_id", (req, res, next) => {
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