const mongoose = require('mongoose');

const danSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true
  },
  apellido:{
    type: String,
    required: true
  },
  sexo:{
    type: String,
    required: true
  },
  nroDan:{
    type: Number,
    required: true
  },
  nroMiembro:{
    type: Number,
    required: false
  },
  membership:{
    type: Number,
    required: false
  },
  nroAF:{
    type: Number,
    required: false
  },
  fechaUltimoExamen:{
    type: Date,
    required: true
  },
  fechaProximoExamen:{
    type: Date,
    required: false
  },
  fechaNacimiento:{
    type: Date,
    required: false
  },
  nacionalidad:{
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: false
  },
  queDojoPertenece:{
    type: String,
    required: false
  },
  pais:{
    type: String,
    required: true
  },
  provincia:{
    type: String,
    required: true
  },
  direccion:{
    type: String,
    required: false
  },
  codigoPostal:{
    type: String,
    required: false
  },
  telefono:{
    type: String,
    required: false
  },
  email:{
    type: String,
    required: false
  },
  tipoAlumno:{
    type: String,
    required: false
  },
  observacion:{
    type: String,
    required: false
  }
});

const Dan = mongoose.model('Dan', danSchema);
module.exports = Dan;