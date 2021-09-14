const User = require('../../models/user.models');
const TpDocument = require('../../models/tp_document.model');
const Role = require('../../models/role.model');

//relacion 1 a 1

// añadimos una clave foranea a la tabla user
TpDocument.hasOne(User);

//Esta es la union entre tablas
User.belongsTo(TpDocument);


//relacion muchos a muchos
//se va a crear una tabla intermedia
/* User.belongsToMany(Role, { through: "user_role"}); */
