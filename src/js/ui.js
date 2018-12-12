class DoggyDashUI {
	constructor(gameState) {
		this.gameState = gameState;
		this.leftTouchBar = new TouchBar(gameState, 0);
		this.rightTouchBar = new TouchBar(gameState, 1);
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

		this.leftTouchBar.create();
		this.rightTouchBar.create();
	}

	update() {
		this.scoreText.text = "Score: " + this.gameState.score;

		this.leftTouchBar.update();
		this.rightTouchBar.update();
	}

	preRender() {
		this.leftTouchBar.preRender();
		this.rightTouchBar.preRender();
	}


}

class TouchBar {
	constructor(gameState, barPos) {
		this.gameState = gameState;

		this.barPos = barPos;
		// Half the world units (Should get this from the camera no?);
		this.x = 150 * barPos;
		this.y = 0;
		this.width = 150;
		this.height = this.gameState.camera.visibleWorldHeight();
	}

	create() {
		this.sprite = this.gameState.game.add.sprite(0, 0, 'touchbar');
		this.sprite.inputEnabled = true;
		var self = this;
		this.sprite.events.onInputDown.add(self.movePlayer, this);
	}

	update() {

	}

	preRender() {
		var computedSize = this.gameState.camera.computeWorldAreaToPixelRectangle({x:this.x, y:this.y}, {x:this.width, y:this.height});
		if(this.sprite){
			this.sprite.position.setTo(computedSize.x, computedSize.y);
			this.sprite.width = computedSize.width;
			this.sprite.height = computedSize.height;
		}
	}

	movePlayer(sender, event) {
		console.log("Touch bar mvoe player called");
		var dir = -1;
		if(this.barPos == 1) {
			dir = 1;
		}

		this.gameState.player.movePlayer(dir);
	}
}