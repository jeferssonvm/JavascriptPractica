

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


/*triangulo Isoceles*/

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

function alturaDelTrianguloIsoceles(){
    
    const inputLado1 = document.getElementById("ladoIsoceles");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("lado2Isoceles");
    const valueLado2 = inputLado2.value;

    const inputLado3 = document.getElementById("lado3Isoceles");
    const valueLado3 = inputLado3.value;

    var altura = trianguloIsoceles(valueLado1,valueLado2,valueLado3);

    if (!isNaN(altura)){
        document.getElementById("IsocelesSalida").innerHTML =altura.toFixed(2);
        document.getElementById("tipoDeTriangulo").style.visibility = "hidden";
    }else{
        document.getElementById("tipoDeTriangulo").style.visibility = "visible"; 
        document.getElementById("tipoDeTriangulo").innerHTML = altura;
    }
}