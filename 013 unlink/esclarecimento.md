# Métodos de remoção de arquivos
>Comandos para apagar aquivos com nodejs.

## fs.unlink | fs.rm | fs.unlinkSync

### fs.unlink exemplo:
```
	fs.unlink('./dados.txt', (err)=>{
		if(err)
			console.log(err);
		else
			console.log('Ficheiro eliminado com sucesso.');
	})
```
