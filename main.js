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
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = ('0123456789');
const simbolo = ('!@#%*.?');

geraSenha();

function geraSenha(){
let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked){
    alffabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolo;
}
console.log(alfabeto);
let senha = '';

for (let i = 0; i <  tamanhoSenha; i++){ 
    let numeroAleatorio = Math.random()*alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
    //console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value = senha;
}


