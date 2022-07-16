const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const timer = document.querySelector('.timer')
const spanPlayer = document.querySelector('.player')


//Mario pula ao qualquer tecla ser acionada, remove a classe jump depois de 500ms
const jump = () => {
	mario.classList.add('jump');

	setTimeout(() => {

		mario.classList.remove('jump');

	}, 500);

}

//Verificar se o mario bateu no cano
const loop = setInterval(() => {

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


	if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

		pipe.style.animation = 'none';
		pipe.style.left = `${pipePosition}px`;

		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;

		mario.src = ('imagens/game-over.png');
		mario.style.width = '75px';
		mario.style.marginLeft = '50px';

		clearInterval(loop);

		clearInterval(this.loop)
		alert(`Parabéns, ${spanPlayer.innerHTML}! Seu Score foi: ${timer.innerHTML}`)
	}

}, 10);

//Temporizador
const startTimer = () => {
	this.loop = setInterval(() => {

		const currentTime = +timer.innerHTML
		timer.innerHTML = currentTime + 1

	}, 1000)
}

//Nome do jogador, inciar temporizador, carregar cartas
window.onload = () => {
	spanPlayer.innerHTML = localStorage.getItem('player')
	startTimer()
}

document.addEventListener('keydown', jump);