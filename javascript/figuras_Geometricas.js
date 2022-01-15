
/*Cuadrado*/
function perimetroCuadrado(lado){
    return 4*lado;
}
function areaCuadrado(lado){
    return Math.pow(lado,2);
}
/*Triangulo*/
function perimetroTriangulo(lado1,lado2,lado3){
    return lado1 + lado2 + lado3;
}
function areaTriangulo(base, altura){
    return  (base*altura)/2;
}
/*Rectangulo*/
function perimetroRectangulo(baseRectangulo,alturaRectangulo){
    return (2*baseRectangulo)+(2*alturaRectangulo);
}
function areaRectangulo(baseRectangulo,alturaRectangulo){
    return (baseRectangulo*alturaRectangulo);
}
/*rombo*/
function perimetroRombo(ladoRombo){
    return ladoRombo*4;
}
function areaRombo(diagonalMenorRombo,diagonalMayorRombo){
    return (diagonalMayorRombo*diagonalMenorRombo)/2;
}
/*romboide*/
function perimetroRomboide(baseRomboide,alturaRomboide){
    return (2*baseRomboide)+(2*alturaRomboide);
}
function areaRomboide(baseRomboide,alturaRomboide){
    return (baseRomboide*alturaRomboide);
}
/*trapecio*/
function perimetroTrapecio(lado1,lado2,lado3,lado4){
    return (lado1+lado2+lado3+lado4);
}
function areaTrapecio(baseMenor,baseMayo,altura){
    return ((altura(baseMayo+baseMenor))/2);
}
/*pentagono*/
function perimetroPentagono(base){
    return (5*base);
}
function areaPentagono(apotema,base){
    return (((5*base)*apotema)/2);
}
/*Hexagono*/
function perimetroHexagono(base){
    return (6*base);
}
function areaHexagono(base,apotema){
    return (((6*base)*apotema)/2);
}
/*Circulo*/
function perimetroCirculo(diametro){
    return (diametro*(Math.PI));
}
function areaCirculo(radio){
    return ((Math.PI)*Math.pow(radio,2));
}

function calcularPerimetroCuadrado(){
    alert("entre");
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("CuadradoSalida").innerHTML = perimetro;
    alert(perimetro);
    
}