let character1 = document.getElementById('character1')
var distance = 0
var keyEvent = (character) => {
	document.addEventListener('keydown', function(event){
		let keyPress = String.fromCharCode(event.keyCode)
		if (keyPress == "D") {
			distance += 10
			/*adiciona efeito de corrida ao personagem*/
			character.style.transform="translateX("+distance+"px)"
			run(character, 1)
		}
			if (keyPress == "A") {
				distance -= 10
				/*adiciona efeito de corrida ao personagem*/
				character.style.transform="translateX("+distance+"px)"
				run(character, -1)
			}
		})
	document.addEventListener('keyup', function(event){
		let keyPress = String.fromCharCode(event.keyCode)
		run(character, 0)
	})
}

var run  = (character,state) => {
	if (state == 0) {character.style.animationPlayState="paused"}
		if (state == 1) {character.style.animation="runRight 1s steps(8) infinite"}
			if (state == -1) {character.style.animation="runLeft 1s steps(8) infinite"}
		}

	console.log(keyEvent(character1))