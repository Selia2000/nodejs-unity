const express = require("express");

const app = express();

//parse request of content-type application/json
app.use(express.json());

//parse request of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

const db = require("./models");
//normal use doesn't delete the database data 
//db.sequelize.sync();

//drop existing tables and re-sync database
db.sequelize.sync({force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//simple route
app.get("/",(req,res) =>{
    res.json({message: "Welcome to my app"});
});

require("./routes/player.routes")(app);


//set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});