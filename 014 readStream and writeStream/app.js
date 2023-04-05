const fs = require('fs');

const readStream = fs.createReadStream('./dados.txt', {'encoding': 'utf-8'});
const writeStream = fs.createWriteStream('./dadosReescrevendo.txt', {'encoding': 'utf-8'});

// Vai ocorrer a leitura e escrita do arquivo.
readStream.on("data", (dados)=>{
	writeStream.write("\n===========================\n")
	writeStream.write(dados);
});