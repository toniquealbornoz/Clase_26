const path = require("path");


const menuList=[{
   id: 1,
   nombre: "Carpaccio fresco",
   descripcion: "Entrada Carpaccio de salmón con cítricos",
   precio: "U$S 65.50",
   imagen: "Carpaccio-de-salmon.jpg"
},
{
   id: 2,
   nombre: "Risotto de berenjena",
   descripcion: "Risotto de berenjena y queso de cabra",
   precio: "U$S 47.00",
   imagen: "Risotto-berenjena-queso-cabra.jpg"
},
{
   id: 3,
   nombre: "Mousse de arroz",
   descripcion: "Mousse de arroz con leche y aroma de azahar",
   precio: "U$S 27.50",
   imagen: "Mousse-de-arroz-con-leche.jpg"
},
{
   id: 4,
   nombre: "Espárragos blancos",
   descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
   precio: "U$S 37.50",
   imagen: "esparragos.png"
},
]


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
   return res.render("detalle.ejs",{
      title:"Selecciona tu Menu",
      menuList: menuList,
   })
  },
about: (req, res )=>{
   return res.render("index.ejs",{
      title: "Acerca de la Empresa"
   })
   },
}

module.exports= mainControllers;

// renderizar : enviar una vista al usuario
// la funcion que maneja una Peticion recibe 2 parámetros→ (req y res)
// vamos a trabajar con "res" ya que dentro de él se encuentra el método que necesitamos→ render, este
// parámetro recibe un String que será el nombre del archivo que queremos mostrar (la extension ejs es opcional) y 
// ademas tampoco debemos aclarar el nombre de la carpeta, ya que el método "set" se encarga de ese tema.