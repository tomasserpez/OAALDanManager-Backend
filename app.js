const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const databaseConfig = require('./config/database');
const danesRoutes = require('./src/routes/danes');

// Configuración de Express
const app = express();
app.use(express.json());
app.use(cors({origin: process.env.FRONTEND}));

// Configuración de la conexión de la base de datos
mongoose.connect(databaseConfig.url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Conexión a la base de datos establecida!');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos: ', error);
    process.exit(1);
  });

// Rutas
app.use('/danes', danesRoutes);

// Puerto de escucha
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
  console.log(`El servidor se encuentra escuchando en el puerto ${port}`);
});
