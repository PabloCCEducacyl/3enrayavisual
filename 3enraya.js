document.addEventListener("DOMContentLoaded", () => {
    const casillas = document.querySelectorAll(".casilla");
    const datos_tablero = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    let juego = true;
    let turno = 1;
    const tablero = document.getElementById("tablero");
    const status = document.getElementById("status");
    status.textContent = `Turno: Jugador ${turno}`;
    casillas.forEach(celda => {
        celda.addEventListener("click", () => {
            if (!juego) {
                return 0
            }
            const x = celda.getAttribute("x");
            const y = celda.getAttribute("y");
            
            if (validarPosicion(x, y)) {
                if (turno == 1) {
                    datos_tablero[x][y] = "X";
                    turno = 2;
                } else {
                    datos_tablero[x][y] = "O";
                    turno = 1;
                }
            }
            pintarTablero(tablero);
            if (checkVictoria()) {
                if(turno == 1) {
                    turno = 2;
                } else { //si no pone que ha ganado el del turno siguiente
                    turno = 1;
                }
                setTimeout(() => {
                    status.textContent = `Jugador ${turno} gana!`;
                }, 10);
                juego = false;
            }
            if (!tablero.flat().includes(null)){
                setTimeout(() => {
                    status.textContent = "Empate!";
                }, 10);
                juego = false;
            }
            if(juego) {
                status.textContent = `Turno: Jugador ${turno}`;
            }
        });
    });

    function validarPosicion(x, y) {
        return tablero[x][y] === null;
    }

    function checkVictoria() {
        for (let i = 0; i < 3; i++) {
            if (tablero[i][0] && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]){
                return true;
            }    
            if (tablero[0][i] && tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]){
                return true;
            }
        }
        if (tablero[0][0] && tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) return true;
        if (tablero[0][2] && tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) return true;
        return false;
    }
});