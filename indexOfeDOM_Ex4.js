let nomes = ["Maria", "João", "Pedro"]

let button = document.getElementById("button");

button.addEventListener("click", function(){
	let elemento = document.getElementById("valor").value;

	excluirElemento(elemento);
});

function excluirElemento(item){
	let index = nomes.indexOf(item);

	if (index != -1) {
	nomes.splice(index, 1);
}
console.log(nomes)
}