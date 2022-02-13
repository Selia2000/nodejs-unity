module.exports = (sequelize, Sequelize) =>{
    const Player = sequelize.define("player",{
        pseudo: {
            type: Sequelize.STRING
        },
        score: {
            type: Sequelize.INTEGER
        }
    });
    return Player;
};