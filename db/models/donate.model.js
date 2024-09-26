const { Model,DataTypes,Sequelize } = require('sequelize');

const DONANTE_TABLA = 'donates';

const donanteSchemas ={
  idDonante:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    field:'id_donate'
  },
  nombreDonante:{
    allowNull:false,
    type:DataTypes.STRING,
    field:'name_donate'
  },
  tipoDonacion:{
    allowNull:false,
    type:DataTypes.STRING,
    field:'type_donation'
  },
  correoDonante:{
    type:DataTypes.STRING,
    field:'email_donate',
    unique:true
  },
  celularDonante:{
    type:DataTypes.STRING,
    field:'phone_donate',
    unique:true
  },
  direccionDonante:{
    type:DataTypes.STRING,
    field:'address_donate'
  },
  createdAt:{
    field:'created_at',
    type:DataTypes.DATE,
    defaultValue:Sequelize.NOW,
  },

};

class Donante extends Model{  // modelo
  static associations(){

  };

  static config(sequelize){
    return{
      sequelize,
      tableName:DONANTE_TABLA, // nombre de la tabla
      modelName:'Donante', // nombre del modelo
      timestamps:false
    }
  }
};

module.exports = { Donante,DONANTE_TABLA,donanteSchemas};
