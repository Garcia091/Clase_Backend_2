const express = require('express');
const app = express();
app.use(express.json())

//Leer rutas
const routes = require('../CLASE_2/routers/router.js');
app.use('/proyect/',routes)


//Crear Servidor
app.listen(3000,()=>{
    console.log('Server Started')
})