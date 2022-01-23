
// const sumDateList =listElement.reduce(function(accumulatedValue =0,newValue){
//     return accumulatedValue +newValue;
// })
const listElement =[2,5,1,5,7,3,6,9,5,0,2,4,8,7,9,2,1,8,6,7,20,54,63,20,42];
// const listElement =[20];



function findAverage(listItem){
    const sumDateList =listItem.reduce(function(accumulatedValue =0,newValue){
        return accumulatedValue +newValue;
    })
    const resultAverage = sumDateList/listItem.length;    
    return resultAverage;
}

let list = findAverage(listElement);