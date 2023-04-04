// NodeJS módulo File System.
const fs = require('fs');

// reading files.
if (fs.existsSync('./conteudos.txt')) {

	const conteudo = fs.readFileSync('./conteudos.txt');

	console.log(conteudo.toString());

} else {
	console.log('Arquivo não encontrado.');
}