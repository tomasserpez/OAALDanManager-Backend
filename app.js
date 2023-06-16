const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const danesRoutes = require('./src/routes/danes');
const sequelize = require('./config/database')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API routes
app.use('/api/danes', danesRoutes);

sequelize.sync().then(() => {
  app.listen(8080, () => console.log('Server está corriendo en el puerto 8080'));
}).catch(error => {
  console.log('Error al sincronizar la base de datos: ', error);
});

