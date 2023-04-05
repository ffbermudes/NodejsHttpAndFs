# Leitura e Escrita linha à linha.
> métodos para leitura e escrita linha à linha com nodejs.

## fs.readStream
### exemplo fs.readStream:

```
	const fs = require('fs');

const readStream = fs.createReadStream('./dados.txt', {'encoding': 'utf-8'});

readStream.on("data", (dados)=>{
	console.log(dados);
});
```