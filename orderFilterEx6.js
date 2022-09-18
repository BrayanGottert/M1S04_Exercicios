let cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
];
//console.log(cidades);

let arrayNova = [];
//debugger;
cidades.filter(function (elemento){
    
    //debugger;
    if (elemento.populacao >= 200000){
    arrayNova.push(elemento.populacao);
    }
    //debugger;
    return arrayNova;
} 
)
//debugger;
console.log(arrayNova);

/* console.log(cidades.values());

console.log(cidades.entries()); */

//array.filter(function(){})

//////

let cidades2 = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
];

const cidadeGrande2 = cidades2.filter(function(item) {
    return item.populacao >= 200000;
});

console.log(cidadeGrande2);