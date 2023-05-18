const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const danesRoutes = require('./src/routes/danes');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API routes
app.use('/api/danes', danesRoutes);

app.listen(8080, () => console.log('Server está corriendo en el puerto 8080'));
