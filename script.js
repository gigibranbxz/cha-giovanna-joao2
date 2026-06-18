const dataEvento = new Date("September 13, 2026 14:00:00").getTime();

const contador = setInterval(function(){

const agora = new Date().getTime();

const distancia = dataEvento - agora;

const dias = Math.floor(distancia / (1000*60*60*24));

const horas = Math.floor(
(distancia % (1000*60*60*24))
/
(1000*60*60)
);

const minutos = Math.floor(
(distancia % (1000*60*60))
/
(1000*60)
);

const segundos = Math.floor(
(distancia % (1000*60))
/
1000
);

document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;

},1000);

function copiarPix(){

navigator.clipboard.writeText(
"gixbz07@gmail.com"
);

alert("Chave Pix copiada!");
}
