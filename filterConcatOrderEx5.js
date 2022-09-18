let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];

function iterarValorParaUnico(array) {
    var arrayUnico = [];
    array.filter(function(index){
        if (!arrayUnico.includes(index)) {
            arrayUnico.push(index);
        }
    });
    return arrayUnico;
}

console.log(array1);
console.log(array2);

let arrayConcat = array1.concat(array2);
console.log(arrayConcat);

let arraySemRep = iterarValorParaUnico(arrayConcat);
console.log(arraySemRep);

let arrayFinal = arraySemRep.sort(function(a,b){return a-b});
console.log(arrayFinal);



