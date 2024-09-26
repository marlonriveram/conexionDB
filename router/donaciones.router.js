const experss = require('express');
const router = experss.Router(); // router
const donates = require('../services/donaciones.service')
const service = new donates();

// rutas
router.get('/',async (req,res) =>{
  try {
    const donates = await service.findAll();
    res.json(donates);
  } catch (error) {
  }
})
router.post('/',async (req,res) =>{
  try {
    const body = req.body;
    const newDonate = await service.create(body);
    res.json(newDonate);
  } catch (error) {
  }
})
router.patch('/:id',async (req,res) =>{
  try {
    const {id} = req.params;
    const body = req.body;
    const updataData = await service.update(body,id);
    res.json(updataData);
  } catch (error) {
  }
})
router.delete('/:id',async (req,res) =>{
  try {
    const {id} = req.params;
    const deleteData = await service.delete(id);
    res.json(deleteData);
  } catch (error) {
  }
})

module.exports=router;
