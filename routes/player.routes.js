module.exports = app => {
    const players = require("../controllers/player.controller.js");

    var router = require("express").Router();

    //create a player
    router.post("/", players.create);

    //Retreive all players
    router.get("/", players.findAll);


    app.use('/api/players', router);
};