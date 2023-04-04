# Métodos do módulo __fs__.

## Função **mkdir** e **mkdirSync**.
>Criação de pastas de forma síncrona e assíncrona.

## Função **rmdir** e **rmdirSync**
`const fs = require('fs');

fs.rmdir('./pastaTeste', ()=>{
	console.log('Pasta removida.')
});`
>Remove pastas de forma assíncrona ou síncrona.