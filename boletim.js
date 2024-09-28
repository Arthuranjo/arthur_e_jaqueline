/*COMPARAÇÃO DE IDADE
const titulo = document.getElementById('exibir')

const idade = '18'
let mensagem;
if(idade == 18){
    mensagem = "maior de idade"
}else{
    mensagem = "menor de idade"
}
titulo.innerHTML = mensagem*/




/* USANDO O IF ELSE
const titulo = document.getElementById('exibir')
const n1 = 10
const n2 = 8
let operação = "-"
let resultado;

if(operação == "+"){
    resultado = n1 + n2
}
else if (operação == "-"){
  resultado = n1 - n2
}
else if(operação == "*"){
    resultado = n1 * n2
}
else if(operação == "/"){
    resultado = n1 / n2
}
titulo.innerHTML = resultado




/* USANDO O SWITCH CASE   
switch(operação){
    case "+":
    resultado = n1 + n2
    break;
    case "-":
        resultado = n1 - n2
        break;
        case "/":
            resultado = n1 / n2
            break;
            case "*":
                resultado = n1 *  n2
                break;
default:
    resultado = "operacao invalida"
}

titulo.innerHTML = resultado
*/





//APROVADO OU NAO
const titulo = document.getElementById('exibir')
const nota1 = 7
const nota2 = 7
const faltas = 21
const media = (nota1 + nota2)/2
let situacao;

if(media >= 7 && faltas <=20){
   situacao = "aprovado"
}
else{
    situacao = "reprovado"
}

titulo.innerHTML = situacao



