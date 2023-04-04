//modulo nativo node.js para servidores.
const http = require('http');
const host = '172.19.205.35';
const porta = 4000;

const server = http.createServer((req, res) => {
	console.log(req.url);
	res.setHeader('Content-Type', 'text/plain; charset= utf-8;');
	res.end(roots(req.url));
}).listen(porta, host, () => console.log('Servidor rodando'));

//Direcionamentos
function roots(caminho) {
	listaRoots = {
		'/': "'Página inicial'",
		'/index.html': "'Página inicial'",
		'/inicial': "'Página inicial'",
		'/contatos': "'Página de contatos'",
	}
	if (listaRoots[caminho] === undefined)
		return "'Página desconhecida.'";
	else
		return listaRoots[caminho];
}