const listDate = [12,20,80,30,40];
//harmonic mean

function getMeanHarmonica(listDate){
    const numberElementsSet = listDate.length;

    const denominatorMeanDivision = listDate.map(function(convertDecimal){
        return convertDecimal = 1/convertDecimal;
    });
    const denominatorMeanSum = denominatorMeanDivision.reduce(function(accumulatedValue =0,newValue){
        return accumulatedValue +newValue;
    
    });
    const meanHarmonic = numberElementsSet/denominatorMeanSum;
    return meanHarmonic.toFixed(2);
}