const fs = require('fs');

// Esse método tem 2 argumentos //Caminho //conteúdo do arquivo
fs.appendFile('./arquivoNovo.txt', ' Executada por último função assincrona.', {
	'encoding': 'utf-8',
}, (err) => {
	console.log('Dado inserido com sucesso');
	if (err)
		console.log(err);
});

fs.appendFileSync('./arquivoNovo.txt', ' Vai ser executado primeiro, porque essa função é sincrona.');