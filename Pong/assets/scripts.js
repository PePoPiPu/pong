var direction = 1;
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
    setInterval(fMoverAbajoD, 10)
    setInterval(moveRightPaddle, 10)
    setInterval(movePelota, 10)
}



function fMoverAbajoD() {
    var div1 = document.getElementById('div1');
    var div1TopPos = div1.offsetTop;
    var windowHeight = window.innerHeight;

    var newTopPos = div1TopPos + (1 * direction);

    if (newTopPos + div1.clientHeight <= windowHeight && newTopPos >= 0) {
        div1.style.top = newTopPos + 'px';
    } else {
        direction *= -1;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var rightPaddle = document.getElementById('div2');
    var directionY = 0; // 1 for down, -1 for up

    function moveRightPaddle() {
        var paddleTopPos = rightPaddle.offsetTop;
        var windowHeight = window.innerHeight;

        // Increment or decrement the top position based on the direction
        var newTopPos = paddleTopPos + (5 * directionY); // Adjust the speed as needed

        // Check if the new top position exceeds the window height or goes above 0
        if (newTopPos + rightPaddle.clientHeight <= windowHeight && newTopPos >= 0) {
            // Set the new top position to the paddle's style
            rightPaddle.style.top = newTopPos + 'px';
        }
    }

    // Event listener for key presses
    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        if (event.key === 'ArrowDown') {
            directionY = 1;
            moveRightPaddle();
        } else if (event.key === 'ArrowUp') {
            directionY = -1;
            moveRightPaddle();
        }
    });

    // Event listener for key releases
    document.addEventListener('keyup', function (event) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            directionY = 0;
        }
    });

    var pelota = document.getElementById('pelota');
    var directionX = -1; // 1 for right, -1 for left
    var directionY = 1; // 1 for down, -1 for up
    
    var pelota = document.getElementById('pelota');
var directionX = -1; // 1 for right, -1 for left
var directionY = 1; // 1 for down, -1 for up
});