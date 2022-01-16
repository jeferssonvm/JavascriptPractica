
/*Cuadrado*/
function perimetroCuadrado(lado){
    return (4*lado).toFixed(2);
}
function areaCuadrado(lado){
    return (Math.pow(lado,2)).toFixed(2);
}

/*rombo*/
function perimetroRombo(ladoRombo){
    return (ladoRombo*4).toFixed(2);
}
function areaRombo(diagonalMenorRombo,diagonalMayorRombo){
    return ((diagonalMayorRombo*diagonalMenorRombo)/2).toFixed(2);
}
/*Circulo*/
function perimetroCirculo(diametro){
    return (diametro*(Math.PI)).toFixed(2);
}
function areaCirculo(radio){
    return ((Math.PI)*Math.pow(radio,2)).toFixed(2);
}





/*Triangulo Equilatero
function perimetroTriangulo(lado1,lado2,lado3){
    return (lado1 + lado2 + lado3).toFixed(2);
}
function areaTriangulo(base, altura){
    return  ((base*altura)/2).toFixed(2);
}*/
/*romboide
function perimetroRomboide(baseRomboide,alturaRomboide){
    return (2*baseRomboide)+(2*alturaRomboide).toFixed(2);
}
function areaRomboide(baseRomboide,alturaRomboide){
    return (baseRomboide*alturaRomboide).toFixed(2);
}*/
/*trapecio
function perimetroTrapecio(lado1,lado2,lado3,lado4){
    return (lado1+lado2+lado3+lado4).toFixed(2);
}
function areaTrapecio(baseMenor,baseMayo,altura){
    return ((altura(baseMayo+baseMenor))/2).toFixed(2);
}*/
/*pentagono
function perimetroPentagono(base){
    return (5*base).toFixed(2);
}
function areaPentagono(apotema,base){
    return (((5*base)*apotema)/2).toFixed(2);
}*/
/*Hexagono
function perimetroHexagono(base){
    return (6*base).toFixed(2);
}
function areaHexagono(base,apotema){
    return (((6*base)*apotema)/2).toFixed(2);
}*/

/*triangulo isoceles*/

    function trianguloIsoceles(lado1, lado2,lado3){
        var resultado;
        if (lado1==lado2 || lado1 == lado3 || lado2 == lado3 ){
            var resultado;
            if (lado1==lado2 && lado1 == lado3){
                resultado = "el triangulo es equilatero";
            }else{
               if(lado1==lado2 ){
                   resultado = funcionIsocelesTriangulo(lado1,lado3);/*lado repetido, lado difenrente */
               }
               if(lado1==lado3){
                resultado = funcionIsocelesTriangulo(lado1,lado2);/*lado repetido, lado difenrente */
               } 
               if(lado2==lado3){
                resultado = funcionIsocelesTriangulo(lado2,lado1);/*lado repetido, lado difenrente */
            } 
            }
        }else{
            resultado ="el triangulo es escaleno ";
        }
        function funcionIsocelesTriangulo(lado, base){
            return rais = Math.sqrt(Math.pow(lado,2)-Math.pow(base,2)/4);
        }
        return resultado   
    }

/*entrada html*/
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("PerimetroCuadradoSalida").innerHTML = perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("AreaCuadradoSalida").innerHTML= area;
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("RadioCirculo")
    const valueRadio = inputRadio.value;
    const area = areaCirculo(valueRadio);
    document.getElementById("AreaCirculoSalida").innerHTML = area;
}

function  calcularPerimetroCirculo(){
    const inputDiametro = document.getElementById("DiametroCirculo");
    const valueDiametro =inputDiametro.value;
    const perimetro = perimetroCirculo(valueDiametro);
    document.getElementById("PerimetroCirculoSalida").innerHTML= perimetro;
}

function calcularPerimetroRombo() {
    const inputLado = document.getElementById("ladoRombo");
    const valueLado = inputLado.value;
    const perimetro = perimetroRombo(valueLado);
    document.getElementById("PerimetroRomboSalida").innerHTML = perimetro;
}
function calcularAreaRombo(){
    const inputMayor = document.getElementById("DiagonalMayor");
    const valueMayor = inputMayor.value;
    const inputMenor = document.getElementById("DiagonalMenor");
    const valueMenor = inputMenor.value;
    const area = areaRombo( valueMenor,valueMayor );
    alert(area);
    document.getElementById("AreaRomboSalida").innerHTML = area;
}
