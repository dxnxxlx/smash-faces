
var pais=null;
var random=null;
var texto=null;
var score=0;
var intentos=5;
var elegido=1;
var historial = [];

$(document).ready(function(){
	$("#seleccion").on('change',function() {
		elegido=$("#seleccion").val();
		paisEleccion(elegido);
		random=getRandom();
		console.log(random);
		intentos=5;
		$("#intentos").text(intentos);
		score=0;
		$("#score").text(score);
		rutaFoto(pais, random);
		check();
	});

});

function check(){
	$("#comprueba").click(function(){
		
		($("#text-coder").val()==pais[random].name)? (score+=5, $("#score").text(score), $("#mensaje").text("Tú si saaabes!"), elegido=$("#seleccion").val(), paisEleccion(elegido), random=getRandom(pais), rutaFoto(pais, random), $("#text-coder").val("")): ((intentos==0)? (elegido=$("#seleccion").val(), paisEleccion(elegido), random=getRandom(pais), rutaFoto(pais, random), $("#text-coder").val(""), score--, $("#score").text(score), $("#mensaje").text(""), intentos=5): intentos--, $("#mensaje").text("Hmmmmm..."), $("#intentos").text(intentos));
		$("#mensaje").text("");

	});
}

function rutaFoto(pais, random){
	var ruta='fotos/'+nombrePaisElegido()+'/'+pais[random].image;
	$("#cuadro-fotos").html("<img class='photo' src='"+ruta+"'/>");
}

function paisEleccion(elegido){
	if (elegido==2) {
		pais=peru;
	}else if (elegido==3) {
		pais=mexico;
	}
	
	return pais;

};
function nombrePaisElegido(){
	var nombrePais=(pais===mexico)? "mexico" : "peru";
	return nombrePais;

}

function getRandom() {
	var max=pais.length;
	var existe = true;
	do {
		aleatorio = Math.floor(Math.random()*max)
		if (historial.length == max) {
			aleatorio = -1
			existe = false;
		} else if (historial.length == 0) {
			historial.push(aleatorio)
			existe = false;
		} else {
			var encontrado = historial.indexOf(aleatorio);
			if (encontrado < 0) {
				historial.push(aleatorio);
				existe = false;
			} else {
				console.log("Se repite! -> " + aleatorio)
			}
		}
	} while (existe)
	return aleatorio;
}