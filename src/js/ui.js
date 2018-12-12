class DoggyDashUI {
	constructor(gameState) {
		this.gameState = gameState;
	}

	create() {
		console.log("Creating Doggy Dash UI!");

		var controlStyles = {
			font: 'bold 16pt Arial',
			fill: '#FFFFFF',
			align: 'center'
		};

		this.controlsText = this.gameState.game.add.text(this.gameState.game.width / 2,25,
			'Use "A" and "D" to move!',controlStyles);
		this.controlsText.anchor.setTo(0.5);

		this.scoreText = this.gameState.game.add.text(25, 25, 'Score: 0', controlStyles);
	}

	update() {
		this.scoreText.text = "Score: " + this.gameState.score;
	}


}