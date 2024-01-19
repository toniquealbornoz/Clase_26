const express = require("express");
const app = express();
const path =require("path");

app.set('view engine', 'ejs');
app.set('views', "./views");


const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.use("/", require("./routes/mainRoutes.js"))

const port= 3000;
app.listen(port, ()=>{
    console.log(`Run Forest Run en http://localhost:${port}`);
});
