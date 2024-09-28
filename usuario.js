function acessar(){
    const nome_correto = 'arthur'
    const senha_correta = '1234'

    nome_inserido = document.getElementById("nome").value
    senha_inserido = document.getElementById("senha").value
    text = document.getElementById("resultado")

    if (nome_inserido == nome_correto && senha_inserido == senha_correta){
        text.innerHTML = "Acesso concedido"
    }
    else if (nome_inserido != nome_correto && senha_inserido == senha_correta){
        text.innerHTML = "Nome incorreto"
    }
    else if (nome_inserido == nome_correto && senha_inserido != senha_correta){
        text.innerHTML = "Senha incorreta"
    }
    else if (nome_inserido != nome_correto && senha_inserido != senha_correta){
       text.innerHTML = "Acesso negado"
    }

}