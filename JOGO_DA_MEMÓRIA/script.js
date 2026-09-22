
// ========================================
// DADOS DO JOGO
// ========================================

const simbolos = [
    "🐱", "🐱",
    "🐶", "🐶",
    "🐸", "🐸",
    "🦊", "🦊",
    "🐼", "🐼",
    "🐵", "🐵",
    "🐷", "🐷",
    "🐨", "🐨"
];


// ========================================
// VARIÁVEIS
// ========================================

let cartas = [];

let primeiraCarta = null;
let segundaCarta = null;

let bloqueado = false;

let tentativas = 0;
let pontos = 0;

let paresEncontrados = 0;


// ========================================
// INICIAR O JOGO
// ========================================

function iniciarJogo() {

    // Copiar os símbolos
    cartas = [...simbolos];

    // Embaralhar as cartas
    cartas.sort(() => Math.random() - 0.5);

    // Zerar os valores
    primeiraCarta = null;
    segundaCarta = null;

    bloqueado = false;

    tentativas = 0;
    pontos = 0;
    paresEncontrados = 0;

    // Atualizar informações
    document.getElementById("tentativas").textContent = tentativas;
    document.getElementById("pontos").textContent = pontos;

    // Criar as cartas na tela
    criarTabuleiro();
}


// ========================================
// CRIAR TABULEIRO
// ========================================

function criarTabuleiro() {

    const tabuleiro = document.getElementById("tabuleiro");

    // Limpar o tabuleiro
    tabuleiro.innerHTML = "";

    // Percorrer todas as cartas
    cartas.forEach(function(simbolo, indice) {

        const carta = document.createElement("div");

        carta.classList.add("carta");

        carta.textContent = "?";

        carta.dataset.simbolo = simbolo;

        carta.dataset.indice = indice;

        // Quando clicar na carta
        carta.addEventListener("click", function() {

            virarCarta(carta);

        });

        tabuleiro.appendChild(carta);
    });
}


// ========================================
// VIRAR CARTA
// ========================================

function virarCarta(carta) {

    // Se o jogo estiver bloqueado, não fazer nada
    if (bloqueado) {
        return;
    }

    // Se clicar na mesma carta novamente
    if (carta === primeiraCarta) {
        return;
    }

    // Se a carta já estiver acertada
    if (carta.classList.contains("acertou")) {
        return;
    }

    // Mostrar o símbolo
    carta.textContent = carta.dataset.simbolo;

    carta.classList.add("aberta");


    // Verificar se é a primeira carta
    if (primeiraCarta == null) {

        primeiraCarta = carta;

    } else {

        segundaCarta = carta;

        tentativas++;

        document.getElementById("tentativas").textContent = tentativas;

        verificarPar();
    }
}


// ========================================
// VERIFICAR SE AS CARTAS SÃO IGUAIS
// ========================================

function verificarPar() {

    bloqueado = true;

    // IF / ELSE
    if (primeiraCarta.dataset.simbolo == segundaCarta.dataset.simbolo) {

        // Acertou o par
        primeiraCarta.classList.add("acertou");
        segundaCarta.classList.add("acertou");

        pontos += 10;

        paresEncontrados++;

        document.getElementById("pontos").textContent = pontos;

        primeiraCarta = null;
        segundaCarta = null;

        bloqueado = false;

        verificarVitoria();

    } else {

        // Errou o par
        pontos--;

        document.getElementById("pontos").textContent = pontos;

        setTimeout(function() {

            primeiraCarta.textContent = "?";
            segundaCarta.textContent = "?";

            primeiraCarta.classList.remove("aberta");
            segundaCarta.classList.remove("aberta");

            primeiraCarta = null;
            segundaCarta = null;

            bloqueado = false;

        }, 1000);
    }
}


// ========================================
// VERIFICAR VITÓRIA
// ========================================

function verificarVitoria() {

    if (paresEncontrados == simbolos.length / 2) {

        salvarRecorde();

        setTimeout(function() {

            alert(
                "Parabéns! Você ganhou!" +
                "\n\nPontos: " + pontos +
                "\nTentativas: " + tentativas
            );

        }, 300);
    }
}


// ========================================
// SALVAR RECORDE
// ========================================

function salvarRecorde() {

    const recordeAtual =
        Number(localStorage.getItem("recorde")) || 0;


    // IF / ELSE
    if (pontos > recordeAtual) {

        localStorage.setItem("recorde", pontos);

        document.getElementById("recorde").textContent = pontos;

    } else {

        document.getElementById("recorde").textContent = recordeAtual;
    }
}


// ========================================
// CARREGAR RECORDE
// ========================================

function carregarRecorde() {

    const recorde =
        Number(localStorage.getItem("recorde")) || 0;

    document.getElementById("recorde").textContent = recorde;
}


// ========================================
// INICIAR QUANDO ABRIR A PÁGINA
// ========================================

carregarRecorde();

iniciarJogo();
