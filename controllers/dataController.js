// Importa o módulo 'dataModel' que contém as funções 'getData' e 'filterData'
const dataModel = require('../models/dataModel');

// Controller para filtrar dados
function filterData(req, res) {
  // Chama a função 'getData' do módulo 'dataModel' para obter os dados do arquivo JSON
  const data = dataModel.getData();

  // Chama a função 'filterData' do módulo 'dataModel' para filtrar os dados obtidos
  const filteredData = dataModel.filterData(data);

  // Envia a resposta HTTP em formato JSON contendo os dados filtrados
  res.json(filteredData);
}

// Exporta a função 'filterData'
module.exports = {
  filterData,
};
