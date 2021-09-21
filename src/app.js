const escreve = require('../modules/escrever');

module.exports = (emails, caminho) => {
  const json = JSON.stringify(emails, ',', 2);
  escreve(caminho, json);
}
