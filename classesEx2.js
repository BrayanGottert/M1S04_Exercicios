
// parte 1

class filme {
    nome = "nome deste filme";
    anoDeLancamento = "2020";
    diretor = "Martin Scorsese";
}
console.log(filme.nome);
console.log(filme.anoDeLancamento);
console.log(filme.diretor);

/// parte 2

class filme2{
    constructor(nome, anoDeLancamento, diretor){
        this.nome = nome;
        this.anoDeLancamento = anoDeLancamento;
        this.diretor = diretor;
    }
    nome = "nome deste filme";
    anoDeLancamento = "2020";
    diretor = "Martin Scorsese";
}

console.log(filme.nome);
console.log(filme.anoDeLancamento);
console.log(filme.diretor);