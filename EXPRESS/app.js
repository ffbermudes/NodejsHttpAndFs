const express = require('express');
const app = express()
const porta = 3000;

app.get('/', (req, res)=>{
	console.log(req.url);
	res.send('Testando meu servidor express');
});

app.get('/contatos', (req, res)=>{
	console.log(req.url);
	res.send('Pagina contatos');
});

app.listen(porta, ()=>{
	console.log(`Servidor na porta ${porta}`);
})