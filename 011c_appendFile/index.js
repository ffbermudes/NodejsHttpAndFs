const fs = require('fs');

// Esse método tem 2 argumentos //Caminho //conteúdo do arquivo
fs.appendFile('./arquivoNovos.txt', ' Executada por último função assincrona.', () => {
	console.log('Dado inserido com sucesso');
});

fs.appendFileSync('./arquivoNovo.txt', ' Vai ser executado primeiro, porque essa função é sincrona.');