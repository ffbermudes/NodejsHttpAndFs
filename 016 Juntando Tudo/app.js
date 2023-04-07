const http = require('http');
const localhost = '172.19.204.75';
const porta = 3000;

const servidor = http.createServer((req, res)=>{
	console.log('resposta do servidor.');
}).listen(porta, localhost, function(){
	console.log('Servidor rodando.');
})