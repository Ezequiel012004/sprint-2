let correctas = [1, 2, 1, 2, 2];

let option_select = [];

let cant_correctas = 0;

function respuesta(num_pregunta, seleccionada) {
    option_select[num_pregunta] = seleccionada.value;
}

function corregir() {
    cantidad_correctas = 0;
    for (i = 0; i < correctas.length; i++) {
        if (correctas[i] == option_select[i]) {
            cant_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cant_correctas;
}