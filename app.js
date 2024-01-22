const express = require("express");
const app = express();
const path =require("path");

app.set('view engine', 'ejs');//→ con este linea instalamos nuestro motor de vistas "ejs"
app.set('views', "./views");//→método set se encarga de definir la carpeta p mostrar las vistas q indiquemos al Controller


const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));// con el método "use" le decimos a express que queremos mostrar todos los archivos
// que esten en la carpeta "public"

app.use("/", require("./routes/mainRoutes.js"))

const port= 3000;
app.listen(port, ()=>{
    console.log(`Run Forest Run en http://localhost:${port}`);
});
