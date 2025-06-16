document.querySelector('.parametro-senha__botao');
const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha; 

const botoes = document.querySelectorAll('.parametro-senha__botao');
botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentaTamanho;

//console.log(botoes);

function diminuirTamanho(){
    if (tamanhoSenha > 1){
    tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

function geraSenha(){
let senha = '';
for (let i = 0; i < tamanhoSenha; i++){ 
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value = senha;
}

const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox);