/* con arrary*/

var productDiscounts =[
    {product:"reloj", discounts:"10"},
    {product:"televisores", discounts:"20"},
    {product:"lavadoras", discounts:"8"},
    {product:"auriculares", discounts:"15"},
    {product:"computadoras", discounts:"12"},
    {product:"ninguno", discounts:"0"}
]

function CalculoDelDescuento(prescioOriginal, descuento){
    /* precio * (100-descuento)/100*/
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (prescioOriginal*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}


function inputDiscountHtml(){
 
    const inputCost = document.getElementById("precioSindescuento");
    const valueCost = inputCost.value;

    var inputDiscount = document.getElementById("input_descuento");
    var valueDiscount = inputDiscount.value;
 
   
    var retunDiscoun = productDiscounts.find(function(Discoun){
        return Discoun.product ==valueDiscount;
    });


   const result = CalculoDelDescuento(valueCost,retunDiscoun.discounts)       

   document.getElementById("priceDiscount").innerHTML = retunDiscoun.discounts +" %";
   document.getElementById("percentageDiscount").innerHTML = (valueCost-result).toFixed(2);
   document.getElementById("priceToPay").innerHTML = result.toFixed(2);
}