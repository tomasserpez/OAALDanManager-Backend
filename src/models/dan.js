// Definimos el modelo de datos y clase de dan

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');


class Dan extends Model{}

Dan.init(
  {
    NombreApellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NroDan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NroMiembro: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FechaUltimoExamen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FechaProximoExamen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NroAF: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TipoDeAlumno:{
      type: DataTypes.STRING,
      allowNull: true
    },
    dni:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Telefono:{
      type: DataTypes.STRING,
      allowNull: true
    },
    Email:{
      type: DataTypes.STRING,
      allowNull: true
    },
    CodigoPostal:{
      type: DataTypes.STRING,
      allowNull: false
    },
    QueDojoPertenece:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Provincia:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'danes',
    modelName: 'Dan',
    timestamps: false,
  }
);

module.exports = Dan;
