const { Op } = require('sequelize'); // Paquete para la interacción de la base de datos
const Dan = require('../models/dan'); // Modelo de datos de un Dan


// Obtener el listado de todos los danes
exports.getAllDanes = async (req,res)=>{
  try{
    const danes = await Dan.findAll();
    res.status(200).json(danes);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: 'Error en el servidor...'});
  }
};


// Obtener un dan segun su ID
exports.getDanById = async (req,res) => {
  try{
    const dan = await Dan.findByPk(req.params.id);
    if(!dan){
      return res.status(404).json({message: 'El dan no fue encontrado...'});
    }
    res.status(200).json(dan);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: 'Error en el servidor...'});
  }
};

// Obtener un dan segun su NombreApellido
exports.getDanByNombreApellido = async (req, res) => {
  try{
    const nombreApellido = req.params.nombreApellido;
    const danes = await Dan.findAll({
      where: {
        NombreApellido: nombreApellido
      }
    });
    
    if(dan.length === 0){
      return res.status(404).json({message: "No se encontró ningun dan bajo ese nombre."});
    }

    res.status(200).json(danes);
  } catch(error){
    console.error(error);
    res.status(500).json({message: "Error en el servidor..."});
  }
};


// Agregar un dan
exports.createDan = async (req,res) => {
  try{
    const { NombreApellido, Dan, NroMiembro, FechaUltimoExamen, FechaNacimiento, Nacionalidad, Direccion, NroAF } = req.body; // Para crear un dan se necesita esa información.
    const dan = await Dan.create({ NombreApellido, Dan, NroMiembro, FechaUltimoExamen, FechaProximoExamen, FechaNacimiento, Nacionalidad, Direccion, NroAF });
    res.status(201).json(dan);
  }
  catch(error){
    console.error(error);
    if(error.name == "SequelizeUniqueConstraintError"){
      res.status(400).json({message: "El dan ya se encuentra cargado..."});
    }else{
      res.status(500).json({message: "Error en el servidor..."});
    }
  }
};

// Actualizar un Dan segun su ID
exports.updateDan = async (req, res) => {
  try{
    const dan = await Dan.findByPk(req.params.id);
    if(!dan){
      return res.status(404).json({message: "Dan no encontrado..."});
    }
    const {
      NombreApellido,
      Dan,
      NroMiembro,
      FechaUltimoExamen,
      FechaProximoExamen,
      FechaNacimiento,
      Nacionalidad,
      Direccion,
      NroAF
    } = req.body;
    
    dan.NombreApellido = NombreApellido || dan.NombreApellido;
    dan.Dan = Dan || dan.Dan;
    dan.NroMiembro = NroMiembro || dan.NroMiembro;
    dan.FechaUltimoExamen = FechaUltimoExamen || dan.FechaUltimoExamen;
    dan.FechaProximoExamen = FechaProximoExamen || dan.FechaProximoExamen;
    dan.FechaNacimiento = FechaNacimiento || dan.FechaNacimiento;
    dan.Nacionalidad = Nacionalidad || dan.Nacionalidad;
    dan.Direccion = Direccion || dan.Direccion;
    dan.NroAF = NroAF || dan.NroAF;
    await dan.save();
    req.status(200).json(dan);

    }
  catch(error){
    console.error(error);
    if(error.name==="SequelizeUniqueConstraintError"){
      res.status(400).json({message: "El dan ya existe..."});
    }else{
      res.status(500).json({message: "Error en el servidor..."});
    }
  }
};

// Actualizamos un dan segun su nombre y apellido

exports.updateDanByNombreApellido = async (req,res)=>{
  try{

    const nombreApellido = req.params.nombreApellido;
    const dan = await Dan.findOne({
      where: {
        NombreApellido: nombreApellido
      }
    });
    if(!dan){
      return res.status(404).json({message: "El dan buscado no fue encontrado..."});
    }

    const {
      Dan,
      NroMiembro,
      FechaUltimoExamen,
      FechaProximoExamen,
      FechaNacimiento,
      Nacionalidad,
      Direccion,
      NroAF,
      Observacion,
      TipoDeAlumno
    } = req.body;

    dan.Dan = Dan || dan.Dan;
    dan.NroMiembro = NroMiembro || dan.NroMiembro;
    dan.FechaUltimoExamen = FechaUltimoExamen || dan.FechaUltimoExamen;
    dan.FechaProximoExamen = FechaProximoExamen || dan.FechaProximoExamen;
    dan.FechaNacimiento = FechaNacimiento || dan.FechaNacimiento;
    dan.Nacionalidad = Nacionalidad || dan.Nacionalidad;
    dan.Direccion = Direccion || dan.Direccion;
    dan.NroAF = NroAF || dan.NroAF;
    dan.Observacion = Observacion || dan.Observacion;
    dan.TipoDeAlumno = TipoDeAlumno || dan.TipoDeAlumno;

    await dan.save();

    res.status(200).json(dan);
  }
  catch(error){
    console.error(error);
    res.status(500).json({message: "Error en el servidor..."});
  }
};

// Eliminamos un dan

exports.deleteDan = async (req,res)=>{
  try{
    const dan = await Dan.findByPk(req.params.id);
    if(!dan){
      return res.status(404).json({message: "Dan no encontrado..."});
    }
    await dan.destroy();
    res.status(204).end();
  }catch(error){
    console.error(error);
    res.status(500).json({message: "Error en el servidor..."});
  }
};

