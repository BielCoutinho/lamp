/**
 * Simples simulador de uma lampada
 * @author Gabriel Coutinho
 */

function quebrar() {
    document.getElementById('lamp').src="img/broken.jpg"
    //reproduzindo um arquivo de audio no JS
    //Passo 1: copiar o arqui de audio para o projeto
    //Passo 2: Usar a classe audio (Biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
}

function onoff() {
    document.getElementById('interruptor').src="img/swon.png"
}