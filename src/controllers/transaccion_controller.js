const transaccionController = {};
const transaccion = require('../Transaccion.json')

transaccionController.getAll = (req,res)=>{
    //logica para listar todos los cursos
    res.json(transaccion);
}
transaccionController.create = (req,res)=>{
    //logica para crear un nuevo objeto
    const id= transaccion.length+1;
    const newTransaccion = req.body;
    newTransaccion["id"]= id; 
    transaccion.push(newTransaccion);
    res.json(newTransaccion);
}
transaccionController.update = (req,res)=>{
    //logica para actualizar un curso
    res.json({"mensaje":"objeto actualizado"});
}
transaccionController.delete = (req,res)=>{
    //logica para eliminar
    res.json({"mensaje":"objeto eliminado"});
}


module.exports = transaccionController
