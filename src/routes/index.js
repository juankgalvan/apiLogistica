const express=require('express')
const enrutador=express.Router()
const resp=require('../util/rsp')
const controller =  require('../modulos/usuario/controller')

enrutador.post('/login', async (req, res) => {
    try {
        const user = req.body.email;
        const pass = req.body.contrasena;

        // Llama al método log y espera el resultado
        const items = await controller.log(user, pass);  // Asegúrate de reemplazar 'users' con el nombre real de tu tabla

        // Verifica que haya resultados en la consulta
        if (items && items.length > 0) {
            console.log('Loggin successful:', items); // Debugging
            resp.success(req, res, 200, 'Loggin successful');
        } else {
            console.log('Usuario no encontrado'); // Debugging
            resp.success(req, res, 404, 'Usuario no encontrado');
        }
    } catch (error) {
        console.error('Error en el servidor:', error);  // Debugging
        resp.success(req, res, 500, 'Error en el servidor');
    }
});

enrutador.post('/create', (req, res) => {
    const nom = req.body.nombre;
    const ed = req.body.edad;
    const mail = req.body.email;
    const pass = req.body.contrasena;

    controller.reg(nom, ed, mail, pass)
        .then((items) => {
            if (items) {
                resp.success(req, res, 200, 'Registro insertado exitosamente');
            } else {
                resp.success(req, res, 500, 'Error de sistema');
            }
        })
        .catch((error) => {
            console.error(error); // Log de error para depuración
            resp.success(req, res, 500, 'Error al procesar la solicitud');
        });
});

enrutador.post('/contacto', (req,res)=>{
    resp.success(req,res,200,'Exitoso')
})

enrutador.get('/listar', (req,res)=>{
    const getAllUser = controller.getAll().then((items) => {
        resp.success(req, res, 200, items);
    })
})
 
enrutador.get('/byId/:id', (req,res)=>{
    const id = req.params.id
    const getUser = controller.getById(id).then((items) => {
        resp.success(req, res, 200, items);
    })
})

module.exports=enrutador