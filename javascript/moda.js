

const listElement = [1,2,3,4,5,6,7,8,9,10];

const sortItemsList = listElement.sort(function(a,b){
    return a-b;
});

const lista1Count = {};

sortItemsList.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
      
    } else {
      lista1Count[elemento] = 1;
    }
    console.log(lista1Count);
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];
