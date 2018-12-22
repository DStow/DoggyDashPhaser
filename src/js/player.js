class Player {
	constructor(gameState) {
		this.gameState = gameState;

		this.sprite = null;

		// Variables for holding the players lanes
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
		var targetX = this.gameState.laneXPositions[this.playerLane];

		if(targetX	!= this.x){
			var xDir = 0;

			if(targetX > this.x) {
				xDir = 1;
			}

			if(targetX < this.x) {
				xDir = -1;
			}

			var xMovement = (PLAYER_SPEED * xDir) * this.gameState.game.time.physicsElapsed;

			this.x += xMovement;
		}

		this.y = this.gameState.camera.visibleWorldHeight() - (this.height / 2);
	}

	preRender() {
		var computedSize = this.gameState.camera.computeWorldAreaToPixelRectangle({x:this.x, y:this.y}, {x:this.width, y:this.height});
		if(this.sprite){
			this.sprite.position.setTo(computedSize.x, computedSize.y);
			this.sprite.width = computedSize.width;
			this.sprite.height = computedSize.height;
		}
	}

	movePlayer(direction) {
		var lane = this.playerLane + direction;
		if(lane < 0)
			lane = 0;
		else if(lane > 2)
			lane = 2;

		this.playerLane = lane;

		// Set player position
		this.sprite.position.setTo(this.gameState.laneXPositions[this.playerLane], 960 - (this.sprite.height / 2));
		this.gameState.score+=1;
	}
}