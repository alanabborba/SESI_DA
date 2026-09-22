function login() {
    // 1º Acessar o valor digitado nos campos USUARIO e SENHA
    const campo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;

    // 2º Carregar os valores do localStorage
    const local_usuario = localStorage.getItem("USUARIO");
    const local_senha = localStorage.getItem("SENHA");

    // 3º Validar se os valores digitados são iguais aos armazenados
    if (campo_usuario == local_usuario && campo_senha == local_senha) {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}


function cadastro() {
    // 1º Carregar os campos de cadastro
    // NOME, USUÁRIO, SENHA, PALAVRA-PASSE

    let nome = document.getElementById("nome").value;
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let palavraPasse = document.getElementById("palavra-passe").value;

    // 2º Cadastrar os dados no localStorage

    localStorage.setItem("NOME", nome);
    localStorage.setItem("USUARIO", usuario);
    localStorage.setItem("SENHA", senha);
    localStorage.setItem("PALAVRA-PASSE", palavraPasse);

    // Zera as tentativas de recuperação
    localStorage.setItem("ERROS", "0");

    // 3º Redirecionar para a tela de login

    window.location.href = "login.html";
}


function recuperar_senha() {
    const senha = localStorage.getItem('Senha');

    localStorage.setItem("Nome", nome);
    localStorage.setItem("Usuário", usuario);
    localStorage.setItem("Senha", senha);

    if(rec_senha_nome == Nome && rec_senha_usuario == Usuario){
        alert("a senha antiga é" Senha);
    }else{
        alert("Usuario e nome incorretos");
    }
    







 // 1º Carregar os valores dos campos NOME e PALAVRA-PASSE 
 // 2º Buscar no localStorage os valores de NOME e PALAVRA-PASSE 
 // 3º Comparar se os valores carregados nos campos da tela // são compatíveis com os valores armazenados no localStorage. 
 // Se forem iguais, exibir a senha na tela ou em um alert. // // Se forem diferentes, notificar o usuário na tela ou em um alert
 // informando que os dados não são compatíveis. 
 // Além disso, limpar os campos de entrada (inputs).
 // desafio: Vocês devem implementar um controle de tentativas para a recuperação de senha. 
 // REGRAS: Vocês devem validar a quantidade de tentativas incorretas de NOME e PALAVRA-PASSE.
 // Quando o usuário errar 3 vezes, vocês devem bloquear os campos (inputs) e impedir que o usuário realize uma nova tentativa de recuperação de senha. 
 // Lembrem-se de salvar a quantidade de erros no localStorage. 
}