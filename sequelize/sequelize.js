const { Sequelize } = require ('sequelize'); // importamos sequelize
const { config } = require('../config/config'); // estamos importando la configuracion de la carpeta config donde esta el puerto y la url
const setUpModel = require('../db/models');

const options = {
  dialect:'postgres', // el gestor de base de datos a usar
  logging: true, // loggin de sequelize esta encendido en dev
}

const sequelize = new Sequelize (config.dbUrl,options);

setUpModel(sequelize);
module.exports=sequelize;
