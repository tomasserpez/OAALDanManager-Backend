const Dan = require('../models/dan');

// Obtenemos el listado de todos los danes
exports.getAllDanes = async (req,res) => {
  try{
    const danes = await Dan.find();
    res.status(200).json(danes);
  }catch(error){
    console.error("Error al obtener todos los danes: ", error);
    res.status(500).json({ message: 'Error en el servidor...' });
  }
};

// Obtenemos el listado de ID de los danes
exports.getAllIdDanes = async (req,res) => {
  try{
    const danes = await Dan.find({}, '_id');
    res.status(200).json(danes);
  }catch(error){
    console.error("Error al obtener todos los danes: ", error);
    res.status(500).json({ message: 'Error en el servidor...' });
  }
};

// Obtener dan por ID
exports.getDanById = async (req,res)=>{
  try{
    const dan = await Dan.findById(req.params.id);
    if(!dan){
      return res.status(404).json({ message: 'El dan no fue encontrado.' });
    }
    res.status(200).json(dan);
  }catch(error){
    console.error("Error al obtener dan por id: ", error);
    res.status(500).json({ message: 'Error en el servidor...' });
  }
};

// Obtenemos dan por su DNI
exports.getDanByDni = async (req,res)=>{
  try{
    const danes = await Dan.find({ dni: req.params.dni });
    if(danes.length === 0){
      return res
        .status(404)
        .json({ message: 'No se encontró ningun dan con ese DNI' });
    }
    res.status(200).json(danes);
  }catch(error){
    console.error("Error al obtener dan por DNI: ", error);
    res.status(500).json({ message: 'Error en el servidor...' });
  }
};

// Agregamos un dan
exports.createDan = async (req,res) => {
  try{
    const dan = await Dan.create(req.body);
    res.status(201).json(dan);
  }catch(error){
    console.error("Error al agregar un dan: ",error);
    res.status(500).json({ message: 'Error en el servidor...' });
  }
};

// Actualizamos un dan
exports.updateDan = async (req,res) => {
  try{
    const dan = await Dan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if(!dan){
      return res.status(404).json({ message:'Dan no encontrado' });
    }
    res.status(200).json(dan);
  }catch(error){
    console.error("Error al actualizar un dan: ", error);
    res.status(500).json({ message: 'Error en el servidor...' });
  }
};

// Eliminar un dan por su ID
exports.deleteDan = async (req,res) => {
  try{
    const dan = await Dan.findByIdAndRemove(req.params.id);
    if(!dan){
      return res.status(404).json({ message: "Dan no encontrado" });
    }
    res.status(204).end();
  }catch(error){
    console.error("Error al eliminar un dan: ", error);
    res.status(500).json({ message: 'Error en el servidor...' });
  }
};