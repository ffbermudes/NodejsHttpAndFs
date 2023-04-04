# Métodos do módulo __fs__.
>cria e remove pastas de forma síncrona e assíncrona.

## Função **rmdir** e **rmdirSync**
### rmdir Exemplo:
```
const fs = require('fs');
fs.rmdir('./pastaTeste', ()=>{
	console.log('Pasta removida.')
});
```
## Função **mkdir** e **mkdirSync**.
### mkdir Exemplo:
<span style="color: red;">
```
const fs = require('fs');

fs.rmdir('./pastaTeste', ()=>{
	console.log('Pasta removida.')
});
```
</span>

***OBS: as funções sincronas são mais simples por isso não irei exemplificar***