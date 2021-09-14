const express = require('express');
const app = express();
const sequelize = require('./src/db/db');
require('./src/db/asociations/asociations');



/******************************Middleware de express para poder rellenar el req.body*********************************** */




app.use(express.json());
app.use(express.urlencoded({extend:false}));


/*********************************Routes**************************************** */
require('./src/routes/index')(app);


/********************Conexion al puerto**************************** */

const PORT = process.env.PORT || 3000;


app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);

    /********************Autenticacion y conexion a la base de datos********************* */
    sequelize.sync({force:false}).then(()=>{
    console.log("Se ha conectado correctamente");
    }).catch(error=>{
    console.log("Se ha producido un error", error);
    });
});

