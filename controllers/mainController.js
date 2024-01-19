const path = require("path");
const mainControllers = {
home: (req, res )=>{
    res.render("index.ejs")
}
}

module.exports= mainControllers;