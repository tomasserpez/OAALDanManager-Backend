const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');

const dotenv = require('dotenv');
dotenv.config();

//Config
const databaseConfig = require('./config/database');

// Rutas
const danesRoutes = require('./src/routes/danes');
const usersRoutes = require('./src/routes/user');
const authRoutes = require('./src/routes/auth');


// Configuración de Express
const app = express();
app.set("json spaces", 4);
app.use(cors({origin: process.env.FRONTEND}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


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
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

// Puerto de escucha
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
  console.log(`El servidor se encuentra escuchando en el puerto ${port}`);
});
