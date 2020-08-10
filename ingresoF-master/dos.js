/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
let marca;
let precio;
let peso;
let tipo;
let seguir;
let acumuladorPesoTotal = 0;
let precioLiquidoMasCaro;
let marcaLiquidoMasCaro;
let precioSolidoMasBarato;
let marcaSolidoMasBarato;
let flagSolidoBarato = 0;
let flagLiquidoCaro = 0;



do{
  
  marca = prompt("Ingrese marca");
	while(marca == ""){
		marca = prompt("Error. Ingrese marca nuevamente");
	}

	precio = parseInt(prompt("Ingrese precio"));
	while(isNaN(precio)){
		precio = parseInt(prompt("Error. Ingrese precio nuevamente"));
	}

	peso = parseInt(prompt("Ingrese peso"));
	while(isNaN(peso)){
		peso = parseInt(prompt("Error. Ingrese peso nuevamente"));
	}

  tipo = prompt("Ingrese tipo de producto (solido, liquido)");
  while(tipo != "solido" && tipo != "liquido"){
    tipo = prompt("Error. Ingrese tipo de producto nuevamente (solido, liquido");
  }

  //a) acumulo los pesos para luego informar el total

  acumuladorPesoTotal = acumuladorPesoTotal + peso;

  //b)c) busco el liquido mas caro y el solido mas barato

  if(tipo == "liquido" && precioLiquidoMasCaro < precio || flagLiquidoCaro == 0){
    precioLiquidoMasCaro = precio;
    marcaLiquidoMasCaro = marca;
    flagLiquidoCaro = 1;
  }else if(tipo =="solido" && precioSolidoMasBarato > precio || flagSolidoBarato == 0){
    precioSolidoMasBarato = precio;
    marcaSolidoMasBarato = marca;
    flagSolidoBarato = 1;
  }



  seguir = prompt("Desea seguir cargando productos ? (s-n)");
}while(seguir == "s");

console.log("El peso total de la compra es : " + acumuladorPesoTotal);
console.log("La marca del liquido más caro es : " + marcaLiquidoMasCaro);
console.log("La marca del solido más barato es : " + marcaSolidoMasBarato);

}
