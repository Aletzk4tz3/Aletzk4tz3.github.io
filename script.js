const mensaje = "Página en Mantenimiento...";
let i = 0;
function escribirTexto() {
    if (i < mensaje.length) {
        document.getElementById("mensaje").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 100);
    }
}
window.onload = escribirTexto;
