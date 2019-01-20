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

		this.testRect1 = new TestRect(gameState, 25,25,200,200,"0xFF0000")
		this.testRect2 = new TestRect(gameState, 25,25,0,0,"0x00ff4c");
	}

	create() {
		this.sprite = this.gameState.game.add.sprite(25, 25, 'player');
		this.sprite.scale.setTo(1);
		this.sprite.anchor.setTo(0.5);
		this.testRect1.create();
		this.testRect2.create();
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

		// Force Y position
		this.y = this.gameState.camera.visibleWorldHeight() - (this.height / 2);

		// Update collision rectangles then handle the collisions
		this.updateCollisionRectangles();
		this.handleCollisions();
	}

	preRender() {
		var computedSize = this.gameState.camera.computeWorldAreaToPixelRectangle({x:this.x, y:this.y}, {x:this.width, y:this.height});
		if(this.sprite){
			this.sprite.position.setTo(computedSize.x, computedSize.y);
			this.sprite.width = computedSize.width;
			this.sprite.height = computedSize.height;
		}

		this.testRect1.preRender();
		this.testRect2.preRender();
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

	handleCollisions() {
		// Check if the player is touching any of the currently live obstacles
		var allObstacles = this.gameState.obstacleSpawner.worldObstacles;
		

	}

	updateCollisionRectangles() {
		this.collisionRectangles = [];
		this.collisionRectangles.push({x:this.x + 22 - (this.width / 2), y:this.y + 12 - (this.height / 2), width: 25, height: 50});
		this.collisionRectangles.push({x:this.x + 16 - (this.width / 2), y:this.y + 40 - (this.height / 2), width: 40, height: 34});

		// Draw the collision rectangles for debugging
		this.testRect1.x = this.collisionRectangles[0].x;
		this.testRect1.y  =this.collisionRectangles[0].y;
		this.testRect1.width = this.collisionRectangles[0].width;
		this.testRect1.height = this.collisionRectangles[0].height;
		this.testRect2.x = this.collisionRectangles[1].x;
		this.testRect2.y  =this.collisionRectangles[1].y;
		this.testRect2.width = this.collisionRectangles[1].width;
		this.testRect2.height = this.collisionRectangles[1].height;
	}
}

class TestRect {
	constructor(gameState, x, y, width, height, colour) {
		this.gameState = gameState;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.colour = colour;
	}

	create() {
		this.sprite = this.gameState.game.add.sprite(0,0,'testrect');
		this.sprite.tint = this.colour;
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