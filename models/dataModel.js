// Importa os módulos fs (File System) e path do Node.js
const fs = require('fs');
const path = require('path');

// Função para obter dados do arquivo JSON
function getData() {
  // pega o caminho do arquivo data.json
  const filePath = path.resolve(__dirname, 'data.json');
  try {
    // Lê o conteúdo do arquivo de forma síncrona
    const rawData = fs.readFileSync(filePath);
    // Converte os dados JSON em um objeto JavaScript
    return JSON.parse(rawData);
  } catch (error) {
    // Caso ocorra um erro será gerado um log com a mensagem e o erro em sequencia.
    console.error('Erro ao ler o arquivo JSON:', error);
    return null;
  }
}

// Função para filtrar os dados
function filterData(data) {
  // Criação de um objeto vazio para armazenar os planos filtrados
  const filteredPlans = {};

  // Iteração sobre as datas dos planos
  data.plans.forEach((plan) => {
    // Obtém o nome da localidade do plano
    const localityName = plan.localidade.nome;
    // Obtém a data de início do plano e converte em um objeto Date
    const planStartDate = new Date(plan.schedule.startDate);

    // Verifica se a localidade já existe em 'filteredPlans'
    if (!(localityName in filteredPlans)) {
      // Se não existir, adiciona o plano atual ao objeto 'filteredPlans'
      filteredPlans[localityName] = plan;
    } else {
      // Se a localidade já existir em 'filteredPlans', compara as datas de início dos planos
      const existingPlan = filteredPlans[localityName];
      const existingStartDate = new Date(existingPlan.schedule.startDate);

      // Se a data de início do plano atual for anterior à data de início do plano existente, substitui o plano existente
      if (planStartDate < existingStartDate) {
        filteredPlans[localityName] = plan;
      }
    }
  });

  // Retorna o nome do aparelho e os planos filtrados
  return {
    Aparelho: data.Aparelho,
    plans: Object.values(filteredPlans),
  };
}

// Exporta as duas funções, 'getData' e 'filterData'
module.exports = {
  getData,
  filterData,
};
