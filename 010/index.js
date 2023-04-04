// NodeJS módulo File System.
const fs = require('fs');

// reading files.
if (fs.existsSync('./conteudo.txt')) {
	fs.readFile('./conteudo.txt', (err, data) => {
		console.log(data);
	});
}else{
	console.log('Arquivo não encontrado.');
}