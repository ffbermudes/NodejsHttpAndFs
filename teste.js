function ArrayChallenge(arr) {

	let cache;
	let resposta;

	//Crescente ou Decrescente?
	const ordemCrescente = arr[0] < arr[1];

	const 

	//Quando for crescente
	if (ordemCrescente) {

		arr.forEach((numero, indice) => {
			//pega o primeiro número da array.
			if (indice == 0) cache = numero;
			if (cache > numero) resposta = indice;
			cache = numero;
		})

	} else if (!ordemCrescente) {



	}else if(){

	}

	// code goes here
	console.log(resposta - 1);
	return resposta;

}

ArrayChallenge([1, 2, 3, 4, 5, 6]);