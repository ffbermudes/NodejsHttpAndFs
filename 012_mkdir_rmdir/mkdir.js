const fs = require('fs');

// Se não existir a pasta.
if (!(fs.existsSync('./pastaTeste'))) {
	fs.mkdir("./pastaTeste", (err) => {
		if (err) {
			console.log(err);
		}
		else
			console.log('Pasta criada com sucesso.');
	})
}else console.log('Pasta existente.');