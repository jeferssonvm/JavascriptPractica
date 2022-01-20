function CalculoDelDescuento(prescioOriginal, descuento){
    /* precio * (100-descuento)/100*/
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (prescioOriginal*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function inputDiscountHtml(){
    
    const inputCost = document.getElementById("precioSindescuento");
    const valueCost = inputCost.value;
    

    const inputDiscount = document.getElementById("descuento");
    const valueDiscount = inputDiscount.value;
    
    const result = CalculoDelDescuento(valueCost,valueDiscount);

    document.getElementById("priceDiscount").innerHTML = valueDiscount;
    document.getElementById("percentageDiscount").innerHTML = valueCost-result;
    document.getElementById("priceToPay").innerHTML = result;

}