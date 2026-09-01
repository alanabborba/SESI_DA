const casas = document.querySelectorAll(".casa");
const mensagem = document.querySelector("#mensagem");

let jogador = "X";

const vitorias = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

casas.forEach(casa => {
    casa.onclick = () => {
        if (casa.textContent) return;

        casa.textContent = jogador;

        for (let [a,b,c] of vitorias) {
            if (
                casas[a].textContent &&
                casas[a].textContent == casas[b].textContent &&
                casas[a].textContent == casas[c].textContent
            ) {
                alert("Jogador " + jogador + " venceu!");

                casas.forEach(c => c.textContent = "");
                jogador = "X";
                mensagem.textContent = "Vez do jogador X";
                return;
            }
        }

        jogador = jogador == "X" ? "O" : "X";
        mensagem.textContent = "Vez do jogador " + jogador;
    };
});
function reiniciarJogo() {
    location.reload();
}
