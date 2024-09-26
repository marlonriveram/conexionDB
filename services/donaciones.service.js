const { models } = require('../sequelize/sequelize')
class Donaciones {
  constructor(){
  }

  async create(data){
    const newDonate = await models.Donante.create(data)
    return newDonate;
  };

  async findAll(){
    const donates = await models.Donante.findAll();
    return donates;
  };

  async update(data,id){
    const updataData = await models.Donante.update(data,{
      where:{idDonante:id}
    })
    return updataData;
  };

  async delete (id){
    const deletaData = await models.Donante.destroy({
      where:{idDonante:id}
    })
    return deletaData;
  }


};


module.exports = Donaciones;
