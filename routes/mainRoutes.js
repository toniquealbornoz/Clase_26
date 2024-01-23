const mainControllers = require("../controllers/mainController");
const express = require("express");
const router = express.Router();


router.get("/", mainControllers.home)//→ c/ruta tiene un controlador y usa el metodo correspondiente,ej "home", 
//esta ruta responde a la raíz de nuestra app.

router.get("/detalleMenu", mainControllers.detalleMenu)

router.get("/detalle/id", mainControllers.detalle)

router.get("/about", mainControllers.about)

module.exports = router;