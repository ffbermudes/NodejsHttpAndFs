const fs = require('fs');

fs.rmdir('./pastaTeste', ()=>{
	console.log('Pasta removida.')
});

// para remover a pasta