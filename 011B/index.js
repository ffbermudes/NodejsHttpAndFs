// NodeJS módulo File System.
const fs = require('fs');

// write files.
// Na assinatura observamos que é obrigatório o uso da callback
fs.writeFile('./arquivoNovo.txt', 'Função assincrona',()=>{
	console.log('Arquivo criado com sucesso.');
});

fs.writeFileSync('./arquivoNovo.txt', 'Função síncrona');

// A função assrincrona vai ser concluída por último.