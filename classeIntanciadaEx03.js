class pessoa {
    constructor(nome, idade, cpf, anoAniversario) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.anoAniversario = anoAniversario;
    }

    podeDirigir(idade){
        if (parseInt(idade) < 18){
            return false
        }
        if (parseInt(idade) >= 18){
            return true
        }
    }
    /* alerta(idade){
        console.log("Alerta! " + idade)
    } */
}

const alunoBrayan = new pessoa("Brayan",24,"32145698700","1997");

//const alunoBrayan = new pessoa()

//alunoBrayan.idade = "24"

//console.log(alunoBrayan.cpf);
//console.log(alunoBrayan.nome);
//console.log(alunoBrayan.idade);
//console.log(alunoBrayan.anoAniversario);

//alunoBrayan.alerta();
var resposta = alunoBrayan.podeDirigir();
//alunoBrayan.alerta();
console.log(resposta);