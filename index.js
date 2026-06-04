//variables de entorno
require ("dotenv").config();
//configurtacion de las rutas
const bookRoutes = require("./routes/book.routes");
const authorRoutes = require("./routes/author.routes");


// Paso 1: Cargar el módulo Express 
const express = require("express"); 
// Esto importa la librería y la guarda en la variable 'express' 

// Paso 2: Crear instancia de la app 
const app = express(); 
// express() es una función que retorna un objeto app 
// Este objeto 'app' ES tu servidor 


//traigo la configuración desde el archivo config.js
const config = require("./config/config");

// Paso 3: Definir constantes 
//const PORT = 3000; 
// Convención: usar constantes en MAYÚSCULAS 
// Puerto: número que identifica tu aplicación (1-65535) 
// Puertos comunes: 3000, 8080, 5000 


// Paso 4: Configurar middleware (opcional pero recomendado) 
app.use(express.json()); 
// Permite que Express entienda JSON en el body 
// SIN esto: req.body = undefined 
// CON esto: req.body = objeto parseado 

// Registrar rutas
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);


// Paso 5: Definir rutas 
app.get("/", (req, res) => { 
  res.json({ message: "Hello World" }); 
}); 
// get() = método HTTP 
// "/" = ruta raíz 
// (req, res) => {...} = handler (función que se ejecuta) 

//health endpoint
app.get("/health", (req, res) =>{
    res.status(200).json({
        status: "ok",
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    })
});





// Paso 6: Escuchar en el puerto 
app.listen(config.PORT, () => { 
  console.log(`Server running on port ${config.PORT} in ${config.NODE_ENV} mode`); 
}); 
// listen() inicia el servidor 
// El callback se ejecuta cuando el servidor está listo 