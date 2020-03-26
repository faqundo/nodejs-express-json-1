const express = require("express");
const app = express();
const path = require("path"); // el modulo path nos permite concatenar directorios.
const morgan = require("morgan");

//Settings
app.set("port",5000); //defino el puerto
app.set("views",path.join(__dirname,"views")); // esta linea simplemente dice: aquí esta la carpeta views
app.set("view engine", "ejs"); //motor de plantillas: puedo usar varios: hanerbars , ejs(mas sencillo)

//Middlewares
app.use(morgan("dev")); //use=utiliza /modulo morgan / ejecutalo y quiero utilizar el metodo "dev". (no utilizo el modulo completo)
app.use(express.urlencoded({extended:false})); //IMPORTANTE//no utilizo el modulo completo express sino solo el metodo urlencode:VAMOS A PODER ENTENDER LO QUE VIENE DE LOS FORMULARIOS,que recibe los datos los pasa a JSON, eso hace este modulo. 

//Routes
//las voy a configurar directamente en otro archivo, dentro de la carpeta routes. 
app.use(require("./routes/index"));
//cuando la ruta no exista queremos enviarle un codigo 404


//Static   // carpeta de archivos estaticos. 
app.use(express.static(path.join(__dirname,"public")));

//404 habdler
app.use((req, res, next) => {
            res.status(404).send("404 Not Found");
})


module.exports = app;