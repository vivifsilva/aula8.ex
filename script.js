function ligarVentilador() {
    const ventilador = document.getElementById("ventilador");

    ventilador.classList.add("ligado");
}

function desligarVentilador() {
    const ventilador = document.getElementById("ventilador");

    ventilador.classList.remove("ligado");
}