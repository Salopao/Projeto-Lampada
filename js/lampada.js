const turnON = document.getElementById("turnON");
const turnOff = document.getElementById("turnOff"); //document.getElementByid serve para pegar um elemento pelo id e pode-lo manipulalo
const lamp = document.getElementById("lamp");

/* function executa uma tarefa*/
function lampOn() {
    if (!islampbroken())
        lamp.src = "img/acessa.jpg";

}

function lampOff() {
    if (!islampbroken()) // coloca as os parenteses pq nao tem ação nenhuma 
    // "!" serve de negação, ai diz, quando a lampada != NÃO estiver quebrada 

        lamp.src = "img/normal.jpg";
}

function lampbroken() {

    lamp.src = "img/quebrada.jpg";
}

function islampbroken() {
    return lamp.src.indexOf("quebrada") > -1


}

turnON.addEventListener("click", lampOn);
//quando escutar o click liga a lampada
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
//quando passa o mouse em cima da lamp ela liga
lamp.addEventListener("mouseleave", lampOff);
//quando o cursor sair de cima da imagem, ela desliga (mouseleave é quando o cursor esta fora)
lamp.addEventListener("dblclick", lampbroken);
//dblckick é quando aperta o botao do mouse duas vezes seguidas rapidamente