
var pais=0;
aleatorio=!0;
$(document).ready(
);
$("#seleccion").change(function() {
	var elegido=$('#seleccion').val();
	if (elegido==2) {
		pais=2;
	}else if (elegido==3) {
		pais=3;
	}
	console.log(pais);
	rutaFoto();
})

function rutaFoto(){
	src="";
	if(pais=3){
		src=mexico[aleatorio].image;
		return src;
		$("#cuadro-fotos").html("<img class='photo' src='fotos/mexico/" + src + "'/>")
	}else{
		src="fotos/peru/"+ peru[aleatorio].image;
		$("#cuadro-fotos").html("<img class='photo' src='" + src + "'/>")
	}
}



function paisEleccion(){
	paisElegido;
	if(pais==2){

	}
}
function getMaximo(){
	maximo=0;
	if(pais==3){
		maximo=34;
	}else{
		maximo=41;
	}
	return maximo;
}
getMaximo();

/---------------------------------------/

var historial = []

function getRandom(maximo) {
	var aleatorio=!0;
	var existe = true
	do {
		aleatorio = Math.floor(Math.random()*maximo)
		if (historial.length == maximo) {
			aleatorio = -1
			existe = false
		} else if (historial.length == 0) {
			historial.push(aleatorio)
			existe = false
		} else {
			var encontrado = historial.indexOf(aleatorio)
			if (encontrado < 0) {
				historial.push(aleatorio)
				existe = false 	
			} else {
				console.log("Se repite! -> " + aleatorio)
			}
		}
	} while (existe)
	return aleatorio
}


/*for (var i = 0; i < maximo; i++) {
	var aleatorio = generarAleatorio(maximo)
	if (aleatorio == -1) console.log("Ya no hay más números disponibles")
	else console.log(aleatorio)
}*/

console.log(historial)




/*function getRandom(paisElegido){
	var maxNum= paisElegido.length;
	var random = (Math.floor((Math.random() * maxNum) + 1))+1;
	console.log(random);
}

var historial=[];

function geetRandom(maximo){
	var numRandom=Math.floor(Math.radom()*40);
	var existe=true;
	do{
		aleatorio = Math.floor(Math.random()*maximo)
	}while
	return aleatorio;
}

for (var i =0; i < 10; i++) 
Math.floor(Math.radom()*40)



http://stackoverflow.com/questions/22363616/generate-random-number-between-2-variables-jquery

http://stackoverflow.com/questions/22363616/generate-random-number-between-2-variables-jquery
*/

