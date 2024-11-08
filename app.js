/**
 * Simples simulador de uma lampada
 * @author Gabriel Coutinho
 */

let chave = false
let lampada = true


 
function quebrar() {
    if(lampada === true) {
    document.getElementById('lamp').src="img/broken.jpg"
    //reproduzindo um arquivo de audio no JS
    //Passo 1: copiar o arqui de audio para o projeto
    //Passo 2: Usar a classe audio (Biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    // apoio alogica para o JS identificar a lampada quebrada
    lampada = false 
    }
}

function onoff() {
    if (chave === false && lampada === true) {
        //ligar a chave
        document.getElementById('interruptor').src="img/swon.png"
        chave = true // O JS agora sabe qie a chave está ligada
         //acender a lampada
         document.getElementById('lamp').src="img/on.jpg"
    } else if (lampada === true){
        document.getElementById('interruptor').src="img/swoff.png"
        chave = false
        //desligar lampada
        document.getElementById('lamp').src="img/off.jpg"
    }
    
}