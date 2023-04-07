const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
	//Definindo a resposta como um arquivo html.
	res.setHeader('Content-Type', 'text/html');

	//Ler o arquivo html disponível.
	fs.readFile('./paginas/index.html', ({ 'encoding': 'utf-8' }), (err, data) => {
		if (err){
			console.log('Ocorreu algum erro na leitura.');
			res.end();
		}
		else {
			// Escreve o conteúdo html no lado cliente.
			res.write(data);
			res.end();
		}
	});
}).listen(3000, '0.0.0.0', () => {
	console.log('Servidor rodando');
})