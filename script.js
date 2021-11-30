const contador = document.getElementById('count-el');
const registros = document.getElementById('log_Save');
var count = 0;

function increment() {
    count++;
    contador.innerHTML = count;
}

function save() {
    let countStr = "Registrado: " + count + "\n";
    registros.innerText += countStr;
    contador.innerHTML = 0;
    count = 0;
}
