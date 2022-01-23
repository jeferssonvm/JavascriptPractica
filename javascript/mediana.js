const listElement =[20,54,63,20,42,1];


const sortItemsList = listElement.sort(function(a,b){
    return a-b;
})
function arithmeticMedian(sortItemsList){
    const medianList;
    const numberItemsList = sortItemsList.length;
    const halfList = parseInt(numberItemsList/2);
    const isEvenList =numberItemsList%2 == 0;
    if (isEvenList){
        const sumCentralDate= sortItemsList[halfList]+sortItemsList[halfList-1];
        medianList =sumCentralDate/2;
    }else{
        medianList = sortItemsList[halfList];
    }
    return medianList
}

