const donaciones = require ('./donaciones.router'); //importando

function useApi (app) {
  app.use('/donaciones',donaciones);
}

module.exports = {useApi}; //exportando
