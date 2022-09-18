// Observando o array abaixo e usando o reduce, encontre qual é o item que possui o maior valor.

// Dica: se o item atual for maior que o valor anterior, o valor anterior irá passar a ser o item atual.

const array = [1, 22, 31, 40, 3, 5];
const valorInicial = 0;
const maiorValor = array.reduce(function (valorAnterior, valorAtual){
    debugger;
    if (valorAtual>valorAnterior){
        valorAnterior = valorAtual
    }
    debugger;
  return valorAnterior;
  },
valorInicial
);

console.log(maiorValor);


//for(var i = 1, array(i) > array(i-1), i++)
