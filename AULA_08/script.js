// const nome = localStorage.getItem('nome');

// alert(nome);

// localStorage.setItem("nome", "frederico");
// alert(localStorage.getItem("nome"));

// localStorage.removeItem("nome");

function login(){   
    //1°: Acessar o valor digitado nos campos USUARIO e SENHA
    const campo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;

    // 2°: Carregar os valores do localStorange
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");

    //3°: Validar se os valores são iguais aos valores armazenados
    if(campo_usuario == local_usuario){
        alert("Login realizado com sucesso!");
    }else{
        alert("Login Inválido!");
    }

    // no localStorage
    alert(valor_usuario.value + " " + valor_senha.value); 

}