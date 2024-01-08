var direccion = 1;
var direccionPelotaY = 1;
var direccionPelotaX = 1;
function fInicio() {
    document.querySelector('#divisor').style.display = 'none';
    document.querySelector('#pelota').style.display = 'none';
    document.querySelector('#contador1').style.display = 'none';
    document.querySelector('#contador2').style.display = 'none';
}

function fEmpezar() {
    document.querySelector('#divisor').style.display = 'flex';
    document.querySelector('#pelota').style.display = 'inherit';
    document.querySelector('#contador1').style.display = 'inherit';
    document.querySelector('#contador2').style.display = 'inherit';
    document.querySelector('#inicio').style.display = 'none';

    // Mover la posición de la paleta izquierda de arriba a abajo
    setInterval(fMoverAbajoD, 10);
    setInterval(fMoverPelota, 10);
}

function fMoverAbajoD() {
    var div1 = document.getElementById('div1');
    var div1TopPos = div1.offsetTop;
    var windowHeight = window.innerHeight;

    var topPosNueva = div1TopPos + (1 * direccion);

    if (topPosNueva + div1.clientHeight <= windowHeight && topPosNueva >= 0) {
        div1.style.top = topPosNueva + 'px';
    } else {
        direccion *= -1;
    }
}

function fMoverPelota() {
    // Declaración de elementos
    var pelota = document.getElementById('pelota');
    var palaDerecha = document.getElementById('div2');
    var palaIzquierda = document.getElementById('div1');
    // Declaración de altura y anchura de la pantalla
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    // Declaración de las posiciones de los bordes de la pelota
    var pelotaTopPos = pelota.offsetTop;
    var pelotaLeftPos = pelota.offsetLeft;
    var palaDerechaLeft = palaDerecha.offsetLeft;

    // Declaramos nuevas direcciones
    var pelotaTopPosNueva = pelotaTopPos + (5 * direccionPelotaY);
    var pelotaLeftPosNueva  = pelotaLeftPos + (5 * direccionPelotaX);
    // Mover la pelota en el eje de coordenadas Y, rebotar si toca con cualquiera de las palas
    if ((pelotaTopPosNueva + pelota.clientHeight <= windowHeight && pelotaTopPosNueva >= 0) && (pelotaLeftPosNueva + pelota.clientWidth <= palaDerechaLeft) && (pelotaLeftPosNueva >= palaIzquierda.clientWidth)) {
        pelota.style.top = pelotaTopPosNueva + 'px';
    } else {
        direccionPelotaY *= -1;
    }

    // Mover la pelota en el eje de coordenadas X, rebotar si toca con cualquiera de las palas
    if ((pelotaLeftPosNueva + pelota.clientWidth <= palaDerechaLeft) && (pelotaLeftPosNueva >= palaIzquierda.clientWidth)) {
        pelota.style.left = pelotaLeftPosNueva + 'px';
    } else {
        direccionPelotaX *= -1;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var palaDerecha = document.getElementById('div2');
    var direccionY = 0;

    function moverPalaDerecha() {
        var palTopPos = palaDerecha.offsetTop;
        var windowHeight = window.innerHeight;


        var topPosNueva = palTopPos + (5 * direccionY);


        if (topPosNueva + palaDerecha.clientHeight <= windowHeight && topPosNueva >= 0) {
            palaDerecha.style.top = topPosNueva + 'px';
        }
    }

    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        if (event.key === 'ArrowDown') {
            direccionY = 1;
            moverPalaDerecha();
        } else if (event.key === 'ArrowUp') {
            direccionY = -1;
            moverPalaDerecha();
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            direccionY = 0;
        }
    });
});