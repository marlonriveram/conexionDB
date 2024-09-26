const { Donante,DONANTE_TABLA,donanteSchemas } = require('./donate.model')
function setUpModel(sequelize){
  Donante.init(donanteSchemas,Donante.config(sequelize)); // inicializar modelo

};


module.exports = setUpModel;
