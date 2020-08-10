/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
let sexoTitular;
let lugar;
let temporada;
let personasQueViajan;
let seguir;
let lugarMasElegido;
let contadorBariloche = 0;
let contadorCataratas = 0;
let contadorSalta = 0;
let sexoTitularMasPasajeros;
let mayorCantidadPasajeros;
let flagMayorCantPasajeros = 0;
let acumuladorPasajerosInvierno = 0;
let contadorViajesInvierno = 0;
let promedioPasajerosInvierno;

do{
	sexoTitular = prompt("Ingrese el sexo del titular (f-m)");
	while(sexoTitular !="f" && sexoTitular != "m"){
		sexoTitular = prompt("Error. Ingrese sexo del titular nuevamente (f,m)");
	}

	lugar = prompt('Ingrese lugar de destino ("bariloche", "cataratas", "salta")');
	while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
		lugar = prompt('Error.Ingrese lugar de destino nuevamente ("bariloche", "cataratas", "salta")');
	}

	temporada = prompt('Ingrese temporada ("otoño", "invierno", "verano" o "primavera")');
	while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
		temporada = prompt('Error. Ingrese temporada de destino nuevamente ("otoño", "invierno", "verano" o "primavera")');
	}

	personasQueViajan = parseInt(prompt("Ingrese la cantidad de personas que viajan."));
	while(isNaN(personasQueViajan)){
		personasQueViajan = parseInt(prompt("Error. Ingrese la cantidad de personas que viajan nuevamente."));
	}

//Cuento las veces que se elije cada destino

	switch(lugar){
		case "bariloche":
		contadorBariloche++;
			break;
		case "cataratas":
		contadorCataratas++;
			break;
		case "salta":
		contadorSalta++;
			break;
		}

//Busco el sexo del titulo con mayor cantidad de pasajeros

	if(mayorCantidadPasajeros < personasQueViajan || flagMayorCantPasajeros == 0){
		mayorCantidadPasajeros = personasQueViajan;
		sexoTitularMasPasajeros = sexoTitular;
		flagMayorCantPasajeros = 1;
		}

//Cuento la cantidad de viajes que se hacen en invierno para despues dividir el acumulador de pasajeros total de pasajeros en invierno y asi tener el promedio

if(temporada == "invierno"){
	contadorViajesInvierno++;
	acumuladorPasajerosInvierno = acumuladorPasajerosInvierno + personasQueViajan;
	}
	
	
	seguir = prompt("Desea seguir cargando datos ? (s-n)");


}while(seguir == "s");

	
//comparo a ver cual fue el destino que mas veces fue elegido.


if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
	lugarMasElegido = "Bariloche";
}else if(contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
	lugarMasElegido = "Cataratas";
}else if(contadorSalta > contadorBariloche && contadorSalta > contadorCataratas){
	lugarMasElegido = "Salta";
}else{
	lugarMasElegido = 0;
}


//hago la division de viajes y cantidad de pasajeros que viajan en invierno para tener el promedio

promedioPasajerosInvierno = acumuladorPasajerosInvierno / contadorViajesInvierno;

//muestro los datos

if(lugarMasElegido !=0){

	console.log("El lugar más elegido es : " + lugarMasElegido);
}else{
	console.log("No hubo un destino mayormente elegido");
}

console.log("El sexo del titular que lleva más pasajeros es : " + sexoTitularMasPasajeros);
console.log("El promedio de personas por viaje, que viajan en invierno es : " + promedioPasajerosInvierno);

}
