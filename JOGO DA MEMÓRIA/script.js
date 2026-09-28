const simbolos = [
    "🐱", "🐱",
    "🐶", "🐶",
    "🦊", "🦊",
    "🐸", "🐸",
    "🐼", "🐼",
    "🦁", "🦁",
    "🐵", "🐵",
    "🐨", "🐨"
];

// cartas vazias, antes do jogador clicar
let primeiraCarta = null; // armazena a 1° carta
let segundaCarta = null;
let bloqueado = false;

let pontos = 0;
let tentativas = 0;
let paresEncontrados = 0;


// usado para procurar no HTML
const tabuleiro = document.getElementById("tabuleiro");
const pontosElemento = document.getElementById("pontos");
const tentativasElemento = document.getElementById("tentativas");
const recordeElemento = document.getElementById("recorde");
const botaoNovoJogo = document.getElementById("novoJogo");

let recorde = localStorage.getItem("recorde") || 0;

recordeElemento.textContent = recorde;

// lugar onde as cartas são embaralhadas com aletoriedade 
function embaralhar(array) {
    array.sort(() => Math.random() - 0.5);
}

function criarCarta(simbolo) {
    const carta = document.createElement("div");

    carta.classList.add("carta");
    carta.textContent = simbolo;
    carta.dataset.simbolo = simbolo;

    carta.classList.add("escondida");

    carta.addEventListener("click", function () {
        virarCarta(carta);
    });

    tabuleiro.appendChild(carta);
}

// cria a carta, coloca o emoji, esconde ela, programa o clique e adiciona no tabuleiro
function virarCarta(carta) {
    if (
        bloqueado ||
        carta === primeiraCarta ||
        !carta.classList.contains("escondida")
    ) {
        return;
    }

    carta.classList.remove("escondida");

    if (primeiraCarta === null) {
        primeiraCarta = carta;
    } else {
        segundaCarta = carta;
        tentativas++;

        tentativasElemento.textContent = tentativas;

        verificarPar();
    }
}


// guarda o emoji na carta pra depois conseguir comparar se formou um par
function verificarPar() {
    bloqueado = true;

    if (primeiraCarta.dataset.simbolo === segundaCarta.dataset.simbolo) {
        pontos += 10;
        paresEncontrados++;

        primeiraCarta.removeEventListener("click", function () {
            virarCarta(primeiraCarta);
        });

        segundaCarta.removeEventListener("click", function () {
            virarCarta(segundaCarta);
        });

        pontosElemento.textContent = pontos;

        resetarCartas();

        if (paresEncontrados === 8) {
            verificarRecorde();

            setTimeout(function () {
                alert("Parabéns! Você ganhou!");
            }, 300);
        }
    } else {
        pontos--;

        pontosElemento.textContent = pontos;

        setTimeout(function () {
            primeiraCarta.classList.add("escondida");
            segundaCarta.classList.add("escondida");

            resetarCartas();
        }, 800);
    }
}


// limpa as  cartas escolhidas e desbloqueia o jogo pra proxima jogada
function resetarCartas() {
    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;
}

// verifica se fez um recorde novo e, se fez, salva esse novo recorde
function verificarRecorde() {
    if (pontos > recorde) {
        recorde = pontos;

        localStorage.setItem("recorde", recorde);

        recordeElemento.textContent = recorde;
    }
}


// reinicia tudo e embaralha as cartas para comecar um jogo novo.
function iniciarJogo() {
    tabuleiro.innerHTML = "";

    pontos = 0;
    tentativas = 0;
    paresEncontrados = 0;

    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;

    pontosElemento.textContent = pontos;
    tentativasElemento.textContent = tentativas;

    const cartasEmbaralhadas = [...simbolos];

    embaralhar(cartasEmbaralhadas);

    cartasEmbaralhadas.forEach(function (simbolo) {
        criarCarta(simbolo);
    });
}

botaoNovoJogo.addEventListener("click", iniciarJogo);

iniciarJogo();