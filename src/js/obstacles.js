class BaseObstacle {
	constructor(gameState) {
		this.gameState = gameState;
		this.dropSpeed = 275;
		this.x = 0;
		this.y = 0;
		this.lane = 2;
	}

	create() {
		this.createSprite();
		this.sprite.anchor.setTo(0.5)
		this.centerInLane();
	}

	update() {
		// Move down the screen
		var y = this.y + (this.dropSpeed * this.gameState.game.time.physicsElapsed);
		this.y = y;

		// ToDo: Once the obstacle goes out of sight, destory it!
	}

	preRender() {
		var computedSize = this.gameState.camera.computeWorldAreaToPixelRectangle({x:this.x, y:this.y}, {x:this.width, y:this.height});
		if(this.sprite){
			this.sprite.position.setTo(computedSize.x, computedSize.y);
			this.sprite.width = computedSize.width;
			this.sprite.height = computedSize.height;
		}
	}

	centerInLane() {
		var laneSize = this.gameState.camera.visibleWorldWidth() / 2;
		var x = this.gameState.laneXPositions[this.lane];
		this.x = x;
	}

	createSprite() {
		console.log("Sprite not set for " + this.constructor.name);
	}
}

class AsteroidObstacle extends BaseObstacle {
	constructor(gameState) {
		super(gameState);

		this.width = 50;
		this.height = 50;
		this.y = 25;
		this.x = 25;
	}

	createSprite() {
		this.sprite = this.gameState.game.add.sprite(0, 0, 'asteroid');
	}
}

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