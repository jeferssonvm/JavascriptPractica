/* con arrary*/

var productDiscounts =[
    {product:"reloj", discounts:"10"},
    {product:"televisores", discounts:"20"},
    {product:"lavadoras", discounts:"8"},
    {product:"auriculares", discounts:"15"},
    {product:"computadoras", discounts:"12"},
    {product:"ninguno", discounts:"0"}
]

var retunDiscoun = productDiscounts.find(function(Discoun){
    return Discoun.product ==="reloj";
});

var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]

var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});
function inputDiscountHtml(){
    
    const inputCost = document.getElementById("precioSindescuento");
    const valueCost = inputCost.value;

    var inputDiscount = document.getElementById("descuentos");
    var valueDiscount = inputDiscount.value;
    alert(valueDiscount)
}