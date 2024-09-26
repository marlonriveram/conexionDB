const express = require ('express'); // importando express, permite hacer el servidor equivalente a apache en java
const {useApi} = require('./router');
const cors = require('cors');
const app = express(); // servidor
const PORT = process.env.PORT || 3000;

// Middleware para analizar cuerpos en formato JSON
app.use(express.json());
app.use(cors());

useApi(app);
app.get('/',(req,res) =>{
  res.send('mi proyecot en experss')
})

app.listen(PORT,() =>{
  console.log('Escuchando en el puerto'+PORT)
})



