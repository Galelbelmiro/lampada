const turnON = document.getElementById('turnON');
const turnOFF = document.getElementById('turnOFF');
const lamp = document.getElementById('lamp');

function lampON(){
    lamp.src = './imagens/lampada_acesa.png'
}

function lampOFF(){
    lamp.src = './imagens/lampada_apagada.png'
}

function lampBroken(){
    lamp.src = './imagens/lampada_quebrada.jpg'
}


turnON.addEventListener('click', lampON);
turnOFF.addEventListener('click',lampOFF);
lamp.addEventListener('mouseover',lampON)
lamp.addEventListener('mouseleave',lampOFF);

lamp.addEventListener('dblclick',lampBroken);



