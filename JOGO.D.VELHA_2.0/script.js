// true == X
// false == O
var ordem_jogada = true;

function jogar(num_btn) {

    // Busca o botão que está sendo clicado
    const botao = document.getElementById(num_btn);

    // Adiciona "X" ou "O" no botão
    if (ordem_jogada === true) {
        botao.innerHTML = "O";
    } else {
        botao.innerHTML = "X";
    }

    validarGanhador();

    // Troca o jogador
    ordem_jogada = !ordem_jogada;
}

function validarGanhador() {

    const btn1_vlr = document.getElementById("1").innerHTML;
    const btn2_vlr = document.getElementById("2").innerHTML;
    const btn3_vlr = document.getElementById("3").innerHTML;
    const btn4_vlr = document.getElementById("4").innerHTML;
    const btn5_vlr = document.getElementById("5").innerHTML;
    const btn6_vlr = document.getElementById("6").innerHTML;
    const btn7_vlr = document.getElementById("7").innerHTML;
    const btn8_vlr = document.getElementById("8").innerHTML;
    const btn9_vlr = document.getElementById("9").innerHTML;

    if (
        btn1_vlr === btn2_vlr &&
        btn1_vlr === btn3_vlr &&
        btn1_vlr !== ""
    ) {
        alert("O ganhador foi " + btn1_vlr);

    } else if (
        btn4_vlr === btn5_vlr &&
        btn4_vlr === btn6_vlr &&
        btn4_vlr !== ""
    ) {
        alert("O ganhador foi " + btn4_vlr);

    } else if (
        btn7_vlr === btn8_vlr &&
        btn7_vlr === btn9_vlr &&
        btn7_vlr !== ""
    ) {
        alert("O ganhador foi " + btn7_vlr);

    } else if (
        btn1_vlr === btn4_vlr &&
        btn1_vlr === btn7_vlr &&
        btn1_vlr !== ""
    ) {
        alert("O ganhador foi " + btn1_vlr);

    } else if (
        btn2_vlr === btn5_vlr &&
        btn2_vlr === btn8_vlr &&
        btn2_vlr !== ""
    ) {
        alert("O ganhador foi " + btn2_vlr);

    } else if (
        btn3_vlr === btn6_vlr &&
        btn3_vlr === btn9_vlr &&
        btn3_vlr !== ""
    ) {
        alert("O ganhador foi " + btn3_vlr);

    } else if (
        btn1_vlr === btn5_vlr &&
        btn1_vlr === btn9_vlr &&
        btn1_vlr !== ""
    ) {
        alert("O ganhador foi " + btn1_vlr);

    } else if (
        btn3_vlr === btn5_vlr &&
        btn3_vlr === btn7_vlr &&
        btn3_vlr !== ""
    ) {
        alert("O ganhador foi " + btn3_vlr);
    }
}



