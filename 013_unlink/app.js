// module file system.
const fs = require('fs');

if (fs.existsSync('./dados.txt'))
	fs.unlink('./dados.txt', (err) => {
		if (err)
			console.log(err);
		else
			console.log('Ficheiro eliminado com sucesso.');
	})
else console.log('Arquivo não existe');