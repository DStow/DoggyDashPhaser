class CreateObstacle {
	constructor(gameState) {
		this.gameState = gameState;
		this.sprite = null;
		this.width = 50;
		this.height = 50;
		this.x = 25;
		this.y = 25;
	}

	create() {
		this.sprite = this.gameState.game.add.sprite(25,25, 'crate');
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


}