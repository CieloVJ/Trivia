/*var preguntas = [
    "¿Quién escribió Crimen y Castigo?",
    "¿Quién protagoniza La odisea, de Homero?",
    "Edgar Allan Poe escribió, principalmente:",
    "Es un poema de César Vallejo:",
    "Rival del Caballero Carmelo:",
    "Jane Austen no escribió:",
    "Es un cuento de Julio Ramón Ribeyro:",
    "Obra de un chico que descubre que Poseidón es su padre:"
]
var respuestas = [
    ["Fiódor Dostoievsky", "Shakespeare", "Tólstoi", "Chéjov"],
    ["Telémaco", "Ulises", "Aquiles", "Patroclo"],
    ["Novelas románticas", "Guiones de obras de teatro", "Cuentos de terror","Elegías"],
    ["Tristitia", "Paco Yunque", "Yaraví I", "Los nueve monstruos"],
    ["El Astuto", "El Guerrero", "El Ajiseco", "El galán"],
    ["Orgullo y prejuicio", "Cumbres Borrascosas", "Sentido y sensibilidad", "Emma"],
    ["El príncipe", "El trompo", "El vuelo de los cóndores", "Los gallinazos sim plumas"],
    ["Harry Potter", "Percy Jackson", "Hush Hush", "Crepúsculo"]
]*/

function verificarRespuestas(){
    var total = 8;
    var puntos = 0;

    var formy = document.forms["quizz"];
    var respuestas = ["a", "b", "c", "d", "c", "b", "d", "b"];

    for(var i = 1; i<= total; i++){
        if(formy["p" + i].value === null || formy["p" + i].value === ""){
            alert("Por favor responde la pregunta " + i);
            return false;
        }else{
            if(formy["p" + i].value === respuestas[i - 1]){
                puntos++
            }
        }
    }

    var resultado = alert("Has obtenido " + puntos + " puntos de un total de 8.");
}