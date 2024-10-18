

function juego(){
    tablero = 
    [
        ["#","#","#"],
        ["#","#","#"],
        ["#","#","#"],
    ]


    let juego = true;
    let turno = 1;
    let posicionX = 0, posicionY = 0
    while(juego){
        do{
            [posicionX, posicionY] = preguntaJugador(turno).split(",");
            console.log(posicionX, posicionY)
        } while(!validarPosicion(posicionX, posicionY))
        if(turno == 1){
            console.log(posicionX)
            tablero[posicionX-1][posicionY-1] = "X"
            turno = 2
        } else {
            tablero[posicionX-1][posicionY-1] = "O"
            turno = 1
        }
        imprimirtablero()
    }
    function validarPosicion(posicionX, posicionY){
        if(posicionX < 1 || posicionX > 3 || posicionY < 1 || posicionY > 3){
            return false
        } else if((tablero[posicionX-1][posicionY-1] == "X" || tablero[posicionX-1][posicionY-1] == "O")){
            return false
        } else {
            return true
        }
    }
    function preguntaJugador(turno){
        return prompt("Jugador " + turno + ", que casilla quieres marcar? (x,y)");
    }
    
    function imprimirtablero(){
        tablero_string = ""
        tablero.forEach(linea => {
            tablero_string += linea + "\n"
        });
        alert(tablero_string)
    }
    
}