var jogador, vencedor = null;
var jogadoSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado')
var cont = 0;
mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor!== null){return;}
    var quadrado = document.getElementById(id);
    
    if(quadrado.innerHTML !=='-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color= '#000';
    if(jogador === 'X'){
        jogador = "O";
        cont+=1;
    }else {
        jogador = 'X';
        cont+=1;
    }
    mudarJogador(jogador);
    checaVencedor();
    if(cont==9 && vencedor=== null){
        alert("Deu velha! Nenhum vencedor =c")
        reiniciar();
    }
}

function mudarJogador(valor){
    jogador = valor;
    jogadoSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById (1);
    var quadrado2 = document.getElementById (2);
    var quadrado3 = document.getElementById (3);
    var quadrado4 = document.getElementById (4);
    var quadrado5 = document.getElementById (5);
    var quadrado6 = document.getElementById (6);
    var quadrado7 = document.getElementById (7);
    var quadrado8 = document.getElementById (8);
    var quadrado9 = document.getElementById (9);

    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        mudarQuadrado(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        mudarQuadrado(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        mudarQuadrado(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        mudarQuadrado(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudarQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        mudarQuadrado(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        mudarQuadrado(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
        return
    }
    if(checaSequencia(quadrado3,quadrado5,quadrado7)){
        mudarQuadrado(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);

    }
}

function mudarVencedor (quadrado){
    vencedor=quadrado.innerHTML;
    vencedorSelecionado.innerHTML=vencedor;
}

function mudarQuadrado (quadrado1,quadrado2,quadrado3){
    quadrado1.style.background= '#0f0';
    quadrado2.style.background= '#0f0';
    quadrado3.style.background= '#0f0';
}
function checaSequencia(quadrado1,quadrado2,quadrado3){
    var eigual= false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual=true;
    }
    return eigual;
}

function reiniciar(){
    vencedor=null;
    vencedorSelecionado.innerHTML="";

    for(var i =1; i<=9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background ='#eee';
        quadrado.style.color = "#eee";
        quadrado.innerHTML='-';
    }
    cont=0;

    mudarJogador("X");
}