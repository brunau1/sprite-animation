let character = []

var createCharacter = (div) => {
	const persona = document.getElementById(div)
	const position = 0
	return {persona, position}
}

var keyEvent = (character, position) => {
	document.addEventListener('keydown', function(event){
		let keyPress = String.fromCharCode(event.keyCode)
		if (keyPress == "D") {
			position += 10
			/*adiciona efeito de corrida ao personagem*/
			character.style.transform="translateX("+position+"px)"
			run(character, 1)
		}
		if (keyPress == "A") {
			position -= 10
			/*adiciona efeito de corrida ao personagem*/
			character.style.transform="translateX("+position+"px)"
			run(character, -1)
		}
	})
	document.addEventListener('keyup', function(event){
		let keyPress = String.fromCharCode(event.keyCode)
		run(character, 0)
	})
}

var run  = (character,state) => {
	if (state == 0)
		character.style.animationPlayState="paused"
	if (state == 1)
		character.style.animation="runRight 1s steps(var(--steps)) infinite"
	if (state == -1)
		character.style.animation="runLeft 1s steps(var(--steps)) infinite"
}

character[0] = createCharacter('character1')
	//character[1] = createCharacter('character2')

	console.log(keyEvent(character[0].persona, character[0].position))
	//console.log(keyEvent(character[1].persona, character[1].position))