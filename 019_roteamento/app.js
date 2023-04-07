const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	let arquivo;

	res.setHeader('Content-Type', 'text/html');

	switch (req.url) {

		case '/':
			res.statusCode = 200;
			arquivo = './index.html';
			break

		case '/index.html':
			res.statusCode = 200;
			arquivo = './index.html';
			break

		case '/contatos':
			res.statusCode = 200;
			arquivo = './contatos.html';
			break;

		default:
			res.statusCode = 404;
			arquivo = './pagErro404.html'
			break;

	}

	console.log(`URL solicitada: ${req.url}`);

	fs.readFile(arquivo, (err, data) => {
		if (err) {
			console.log('Erro');
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	});

});

server.listen(3000, 'localhost', () => {
	console.log('servidor rodando');
});