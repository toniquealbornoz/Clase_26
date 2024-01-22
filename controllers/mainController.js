const path = require("path");
const mainControllers = {
home: (req, res )=>{
   return res.render("index.ejs",{
      title: "Benvenuti a Pimienta y Sal"
   })
   },
detalleMenu:(eq, res )=>{
   return res.render("detalleMenu.ejs",{
      title: "Elegí tu Menu"
   })
  },
detalle:(req, res )=>{
   return res.render("detalle.ejs")
  },
}

module.exports= mainControllers;

// renderizar : enviar una vista al usuario
// la funcion que maneja una Peticion recibe 2 parámetros→ (req y res)
// vamos a trabajar con "res" ya que dentro de él se encuentra el método que necesitamos→ render, este
// parámetro recibe un String que será el nombre del archivo que queremos mostrar (la extension ejs es opcional) y 
// ademas tampoco debemos aclarar el nombre de la carpeta, ya que el método "set" se encarga de ese tema.