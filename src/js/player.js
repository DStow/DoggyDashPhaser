class Player {
	constructor(gameState) {
		this.gameState = gameState;

		this.sprite = null;

		// Variables for holding the players lanes
		this.laneXPositions = [106, 320, 532];
		this.playerLane = 0;
		this.moving = false;
		this.x = 0;
		this.y = 0;
		this.width = 70;
		this.height = 118;
	}

	create() {
		this.sprite = this.gameState.game.add.sprite(25, 25, 'player');
		this.sprite.scale.setTo(1);
		this.sprite.anchor.setTo(0.5);
		//this.sprite.position.setTo(100, 960 - (this.sprite.height / 2));


	}

	update() {
		var targetX = this.laneXPositions[this.playerLane];

		this.x += 150 * this.gameState.game.time.physicsElapsed;
		//this.sprite.x += 120 * this.gameState.game.time.physicsElapsed;
	}

	preRender() {
		var computedSize = this.gameState.camera.computeWorldAreaToPixelRectangle({x:this.x, y:this.y}, {x:this.width, y:this.height});
		console.log(computedSize);
		if(this.sprite){
			this.sprite.position.setTo(computedSize.x, computedSize.y);
			//this.sprite.size.setTo(computedSize.width, computedSize.height);
			this.sprite.width = computedSize.width;
			this.sprite.height = computedSize.height;
		}
	}

	movePlayer(direction) {
		console.log("Moving player in the direction " + direction)
		var lane = this.playerLane + direction;
		if(lane < 0)
			lane = 0;
		else if(lane > 2)
			lane = 2;

		this.playerLane = lane;

		// Set player position
		this.sprite.position.setTo(this.laneXPositions[this.playerLane], 960 - (this.sprite.height / 2));
	}
}