# Escrita de dados.
>Escreve os dados linha a linha.
## fs.createWriteStream:
### exemplo:
```
const fs = require('fs');

const escrita = fs.createWriteStream("./dados1.txt",{"encoding": "utf-8"});

escrita.write('Meu texto');
```
