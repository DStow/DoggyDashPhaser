class ObstacleSpawner {
	constructor(gameState) {
		this.gameState = gameState;
		this.worldObstacles = [];
		this.spawnObjects = true;
		this.spawnTimer = new FixedTimer(this.gameState, 0.9, false);
	}

	create () {
		this.spawnTimer.enabled = true;
	}

	update (elapsedTime) {
		this.spawnTimer.enabled = this.spawnObjects;

		this.spawnTimer.update(elapsedTime);
		if(this.spawnTimer.tick){
			this.spawnObstacle();
		}

		console.log(this.worldObstacles.length);

		for(var i = 0; i < this.worldObstacles.length; i++) {
			this.worldObstacles[i].update(elapsedTime);
		}
	}

	preRender() {
		for(var i = 0; i < this.worldObstacles.length; i++) {
			this.worldObstacles[i].preRender();
		}
	}

	spawnObstacle() {
		console.log("Spawning obstacle");
		var newObstacle = new CrateObstacle(this.gameState);
		newObstacle.lane = 1;
		newObstacle.create();
		this.worldObstacles.push(newObstacle);
	}
}