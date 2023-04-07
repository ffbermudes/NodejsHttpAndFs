const http = require('http');
const localhost = '0.0.0.0';
const porta = 3000;

const servidor = http.createServer((req, res)=>{
	//definindo qual o tipo de arquivo que será respondido.
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>')
	res.write('<head><link rel="stylesheet" href="app.css"></head>');
	res.write('<body>');
	res.write('<h1>teste</h1>');
	res.write('<h2>teste</h2>');
	res.write('<p>tesdsadsadasdsadsadsadsadsadsadsadsadasdsadsadsadsadsadasdasdsate</p>');
	res.write('</body>');
	res.write('</html>')
	res.end();
}).listen(porta, localhost, function(){
	console.log('Servidor rodando.');
})