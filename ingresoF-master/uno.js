/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
let nombre;
let peso;
let sexo;
let edad;
let contadorMujeres = 0;
let acumuladorEdades = 0;
let edadPromedio;
let mayorPeso;
let hombreMasPesado;
let flagHombrePesado = 0;

for(let i = 0 ; i<5 ; i++){

	nombre = prompt("Ingrese nombre");
	while(nombre == ""){
		nombre = prompt("Error. Ingrese edad nuevamente");
	}

	peso = parseInt(prompt("Ingrese peso"));
	while(isNaN(peso)){
		peso = parseInt(prompt("Error. Ingrese peso nuevamente"));
	}

	sexo = prompt("Ingrese sexo (f-m)");
	while(sexo != "f" && sexo != "m"){
		sexo = prompt("Error. Ingrese peso nuevamente");
	}

	edad = parseInt(prompt("Ingrese edad"));
	while(isNaN(edad)){
		edad = parseInt(prompt("Error. Ingrese edad nuevamente"));
	}

//a)b) busco la cantidad de mujeres...Y busco al hombre mas pesado...
	
	if(sexo == "f"){
		contadorMujeres++;
	}else if(sexo == "m" && mayorPeso < peso || flagHombrePesado == 0){
		mayorPeso = peso;
		hombreMasPesado = nombre;
		flagHombrePesado = 1;
	}

//b) acumulo las edades para despues (fuera de la iteración) dividir por el total de personas y asi tener el promedio total...

	acumuladorEdades = acumuladorEdades + edad;

}

edadPromedio = acumuladorEdades / 5;

console.log("La cantidad de mujeres es de : " + contadorMujeres);
console.log("La edad promedio total es : " + edadPromedio);
console.log("El hombre más pesado es : " + hombreMasPesado);

}
