console.log('Vou mostrar o objeto global em 3 segundos.');

setTimeout(()=>{
	console.log(global)
}, 3000);

console.log(__dirname); //caminho absoluto da pasta.
console.log(__filename); //caminho absoluto do arquivo.
console.log("==========================================");