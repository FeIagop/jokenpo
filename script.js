
function play() {

    var pedra = document.getElementById('pedra')
    var papel = document.getElementById('papel')
    var tesoura = document.getElementById('tesoura')
    var jogadaPc = document.getElementById('jogadaPc')
    var pc = Math.floor(Math.random() * 3)
    var resultado = document.getElementById('resultado')

    var jogadaEmpate = (pedra.checked == true && pc == 0) || (papel.checked == true && pc == 1) || (tesoura.checked == true && pc == 2)

    var jogadaVitoria = (pedra.checked == true && pc == 2) || (papel.checked == true && pc == 0) || (tesoura.checked == true && pc == 1)

    if (pedra.checked == false && papel.checked == false && tesoura.checked == false) {
        alert("[ERRO] Selecione uma opção");
    } else {
        switch(pc) {
            case 0:
                jogadaPc.innerHTML = "Pedra"
                break;
            case 1:
                jogadaPc.innerHTML = "Papel"
                break;
            case 2:
                jogadaPc.innerHTML = "Tesoura" 
                break;        
        }
        if (jogadaEmpate) {
            resultado.innerHTML = "Empate";
            document.body.style.background = 'yellow'
        } else if (jogadaVitoria) {
            resultado.innerHTML = "Vitória";
            document.body.style.background = 'green'
        } else {
            resultado.innerHTML = "Derrota";
            document.body.style.background = 'red'
        }
    } 
}

function reset() {
    document.getElementById('resultado').innerHTML=""

}