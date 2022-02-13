const db = require("../models");
const Player = db.players;

const Op = db.Sequelize.Op;

//create a player
exports.create = (req,res) => {
    //validate resquest
    if(!req.body.pseudo){
        res.status(400).send({
            message:"pseudo is empty"
        });
        return;
    }

    //create a player
    const player = {
        pseudo: req.body.pseudo,
        score: req.body.score
    };

    //save player in the database 
        Player.create(player)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the player"

                });
            });
};

//find
exports.findAll = (req, res) => {
    Player.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.statut(500).send({
                message:
                    err.message || "some error occured while retreiving player"

            });
        });
};