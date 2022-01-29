function orderList(listElement){
  const sortItemsList = listElement.sort(function(a,b){
    return a-b;
  });
  return sortItemsList;
}

function findAverage(listItem){
  const sumDateList =listItem.reduce(function(accumulatedValue =0,newValue){
      return accumulatedValue +newValue;
  })
  const resultAverage = sumDateList/listItem.length;    
  return resultAverage.toFixed(2);
}

function findMedian(sortItemsList){
  let medianList;
  const numberItemsList = sortItemsList.length;
  console.log("# de  datos lista"+ numberItemsList);
  const halfList = parseInt(numberItemsList/2);
  console.log("# de  datos "+ halfList);
  const isEvenList =numberItemsList%2 == 0;
  console.log("# de  datos "+ isEvenList);

  if (isEvenList){
      const sumCentralDate= sortItemsList[halfList]+sortItemsList[halfList-1];
      medianList =(sumCentralDate/2).toFixed(2);
  }else{
      medianList = sortItemsList[halfList];
  }

  return medianList;

}

function findMode(sortItemsList){
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
  
  const mode = lista1Array[lista1Array.length - 1];
  return mode; 
}


function inputDateList(){
  const inputDateList = document.getElementById("number_value");
  const valueDateList = inputDateList.value;
  
  const inputList = JSON.parse("[" + valueDateList + "]");
  const orderNumbersList = orderList(inputList);
  document.getElementById("list_value_date").innerHTML = orderNumbersList;
}

//////////// input html/////////////////
function getList(){
  const inputDateList = document.getElementById("number_value");
  const valueDateList = inputDateList.value;

  const inputList = JSON.parse("[" + valueDateList + "]");
  const orderNumbersList = orderList(inputList);
  return orderNumbersList;
}
function generateAverageClick(){
    const orderNumbersList = getList();

    const valueAvarege = findAverage(orderNumbersList);
    document.getElementById("show_average").innerHTML = valueAvarege;
    alert(valueAvarege)
}
function generateMedianClick(){
  const orderNumbersList = getList();

  const valueMedian = findMedian(orderNumbersList);
  document.getElementById("show_median").innerHTML = valueMedian;
    
  alert(valueMedian)
}
function generateModeClick(){

  const orderNumbersList = getList();

  const valueMode = findMode(orderNumbersList);
  alert (valueMode)
  document.getElementById("show_mode").innerHTML =valueMode[0] +" # de beses que se repite: "+valueMode[1];
}

