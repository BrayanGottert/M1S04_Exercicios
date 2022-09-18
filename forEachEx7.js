let arrayAlunos = [
  { nome: "Carlos", media1: 10 },
  { nome: "Julia", media1: 5 },
  { nome: "Rayane", media1:6 },
  { nome: "Arthur", media1: 9 },
];

let test = 0;

arrayAlunos.forEach((element) => {
  if (element.media1 >= 7) {
    test = test + 1;
  }
});

if (test == 4) {
  document.write("Parabéns a todos da turma");
}

const abaixoMed = arrayAlunos.filter(function(item) {
    return item.media1 <= 7;
});


if (test !== 4) {
    console.log(abaixoMed);
  }