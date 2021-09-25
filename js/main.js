let jogador, vencedor = null;
let selected = document.querySelector('.selected');
let winner = document.querySelector('.winner');
let quadrados = document.querySelector('.quadrado');
mudarJogador(valor = 'X')

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return
    }
    quadrado.innerHTML = jogador
    quadrado.style.color = '#000'
    
    if(jogador === 'X'){
        jogador = 'O'
    }else{
        jogador = 'X'
    }
    mudarJogador(jogador);
    check();
}


function mudarJogador(valor){
    jogador = valor;
    selected.innerHTML = jogador;
}
function check(){
    let quadrado1 = document.getElementById(1)
    let quadrado2 = document.getElementById(2)
    let quadrado3 = document.getElementById(3)
    let quadrado4 = document.getElementById(4)
    let quadrado5 = document.getElementById(5)
    let quadrado6 = document.getElementById(6)
    let quadrado7 = document.getElementById(7)
    let quadrado8 = document.getElementById(8)
    let quadrado9 = document.getElementById(9)
    if(checkSequence(quadrado1, quadrado2, quadrado3)) {
        mudaCor(quadrado1, quadrado2, quadrado3);
        mudaVencedor(quadrado1);
        return
    }
    if(checkSequence(quadrado4, quadrado5, quadrado6)) {
        mudaCor(quadrado4, quadrado5, quadrado6);
        mudaVencedor(quadrado4);
        return
    }
    if(checkSequence(quadrado7, quadrado8, quadrado9)) {
        mudaCor(quadrado7, quadrado8, quadrado9);
        mudaVencedor(quadrado7);
        return
    }
    if(checkSequence(quadrado1, quadrado4, quadrado7)) {
        mudaCor(quadrado1, quadrado4, quadrado7);
        mudaVencedor(quadrado1);
        return
    }
    if(checkSequence(quadrado2, quadrado5, quadrado8)) {
        mudaCor(quadrado2, quadrado5, quadrado8);
        mudaVencedor(quadrado2);
        return
    }
    if(checkSequence(quadrado3, quadrado6, quadrado9)) {
        mudaCor(quadrado3, quadrado6, quadrado9);
        mudaVencedor(quadrado3);
        return
    }
    if(checkSequence(quadrado1, quadrado5, quadrado9)) {
        mudaCor(quadrado1, quadrado5, quadrado9);
        mudaVencedor(quadrado1);
        return
    }
    if(checkSequence(quadrado3, quadrado5, quadrado7)) {
        mudaCor(quadrado3, quadrado5, quadrado7);
        mudaVencedor(quadrado3);
    }
}
function checkSequence(quadrado1, quadrado2, quadrado3){
    var eigual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eigual = true;
    }
    return eigual;
}

function mudaCor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0'
    quadrado2.style.background = '#0f0'
    quadrado3.style.background = '#0f0'
}
function mudaVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    winner.innerHTML = vencedor;
}

function reiniciar(){
    vencedor = null;
    selected.innerHTML = '';

    for(var i = 1; i <= 9; i++ ){
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML ='-';
    }
    mudarJogador(valor = 'X');
}