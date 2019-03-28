const express = require("express");
const playerRouter = express.Router();
const Player = require("../models/playerModel.js");

// Get all players
playerRouter.route("/")
    .get((req, res, next) => {
        console.log("Players GET")
        Player.find((err, players) => {
            if(err){
                res.status(500);
                return next(err)
            }
            return res.status(200).send(players)
        })
    })
// Post NEW Player
    .post((req, res, next) => {
        const newPlayer = new Player(req.body);
        newPlayer.save((err, newPlayerObj) => {
            if(err){
                res.status(500);
                return next(err)
            }
            return res.status(201).send(newPlayerObj)
        })
    });

//    ONE PLAYER MANIPULATION
playerRouter.route("/:_id")
//  Get One Player
    .get((req, res, next) => {
        Player.findOne({_id: req.params._id}, (err, player) => {
            if(err){
                res.status(500);
                return next(err)
            }
            return res.status(200).send(player)
        })
    })
// Update One Player (experiment version)
    .put((req, res, next) => {
        Player.findOneAndUpdate({_id: req.params._id}, (err, updatePlayer) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPlayer.name)
        })
    })
// Delete One Player
    .delete((req, res, next) => {
        Player.findOneAndDelete({_id: req.params._id}, (err, deletedPlayer) => {
            if(err){
                res.status(500);
                return next(err)
            }
            return res.status(202).send(`Player ${deletedPlayer.name} was successfully deleted`)
        })
    })



// PREVIOUS VERSION OF .PUT - COMMENT SAVED IN CASE EXPERIMENT FAILS (3/27/2019 - Meghan)
// // Update One Player
//     .put((req, res, next) => {
//         console.log(req.body)
//         console.log(req.params)
//         if (req.body.type === "questCurrent") {
//             Player.findOneAndUpdate(
//                 {_id: req.params._id},
//                 {$push: {"questCurrent": req.body.quest_id}},
//                 {new: true},
//                 (err, updatedPlayer) => {
//                     if(err){
//                         res.status(500);
//                         return next(err)
//                     }
//                     return res.status(201).send(updatedPlayer)
//                 })
//         } else {
//             Player.findOneAndUpdate(
//                 {_id: req.params._id},
//                 {$push: {"questLog": req.body.quest_id}},
//                 {new: true},
//                 (err, updatedPlayer) => {
//                     if(err){
//                         res.status(500);
//                         return next(err)
//                     }
//                     return res.status(201).send(updatedPlayer)
//                 })
//         }
//     })

// //    ONE PLAYER Quest remove MANIPULATION
// playerRouter.route("/remove/:id")

//     .put((req, res, next) => {
//         console.log(req.body)
//         console.log(req.params)
//         if (req.body.type === "questLog") {
//             Player.findOneAndUpdate(
//                 {_id: req.params._id},
//                 {$pull: {"questLog": req.body.quest_id}},
//                 {new: true},
//                 (err, updatedPlayer) => {
//                     if (err) {
//                         res.status(500);
//                         return next(err)
//                     }
//                     return res.status(201).send(updatedPlayer)
//                 })
//         } else {
//             Player.findOneAndUpdate(
//                 {_id: req.params._id},
//                 {$pull: {"questCurrent": req.body.quest_id}},
//                 {new: true},
//                 (err, updatedPlayer) => {
//                     if (err) {
//                         res.status(500);
//                         return next(err)
//                     }
//                     return res.status(201).send(updatedPlayer)
//                 })
//         }
//     })



module.exports = playerRouter;