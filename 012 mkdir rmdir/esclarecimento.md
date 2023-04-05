# Criar e remover pastas.
>Como criar e remover pastas utilizando o nodejs.

## Método **rmdir** e **rmdirSync**
### **rmdir** Exemplo:

```
const fs = require('fs');

fs.rmdir('./pastaTeste', ()=>{
	console.log('Pasta removida.')
});
```
---
## Método **mkdir** e **mkdirSync**.
### **mkdir** Exemplo:
```
const fs = require('fs');

fs.rmdir('./pastaTeste', ()=>{
	console.log('Pasta removida.')
});
```
***OBS: as funções síncronas são mais simples por isso não irei exemplificar.***

>## Link da aula: [Clique aqui.](https://youtu.be/SyMgFIpd3XQ?list=PLXik_5Br-zO8Ul2-XnkTf99jiYaDylAAW)