
module.exports = app => {
app.use('/api/users',require('../controller/user.controller'));
app.use('/api/tpdocuments',require('../controller/tp_document.controller'));
app.use('/api/countries',require('../controller/country.controller'));
app.use('/api/roles',require('../controller/role.controller'));

}



