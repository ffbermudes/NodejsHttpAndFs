# Método appendFile
> Método para criar arquivos ou inserir conteúdo de texto em seu interior.
## **appendFile and appendFileSync**
### appendFile exemplo:
```
fs.appendFile('./arquivoNovos.txt', ' Executada por último função assincrona.', () => {
	console.log('Dado inserido com sucesso');
});
```
---
### appendFileSync:
```
fs.appendFileSync('./arquivoNovo.txt', ' Vai ser executado primeiro, porque essa função é sincrona.');
```
## Estrutura:
<div style="
	color:green;
	font-weight: bolder;
	font-family: arial;
	font-size:1.2rem;
">
	fs.append(<span style="color: blue;">caminho: string, </span><span style="color: brown;">dado: string | number</span>);
</div>

> ## Link aula: [clique aqui](https://www.youtube.com/watch?v=QTlqmuN7RA0&list=PLXik_5Br-zO8Ul2-XnkTf99jiYaDylAAW)