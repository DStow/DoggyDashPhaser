class Player {
	constructor(gameState) {
		this.gameState = gameState;

		this.sprite = null;

		// Variables for holding the players lanes
		this.laneXPositions = [106, 320, 532];
		this.playerLane = 0;

	}

	create() {
		this.sprite = this.gameState.game.add.sprite(25, 25, 'player');
		this.sprite.scale.setTo(0.1);
		this.sprite.anchor.setTo(0.5);
		this.sprite.position.setTo(100, 960 - (this.sprite.height / 2));
	}

	movePlayer(direction) {
		console.log("Moving player in the direction " + direction)
		var lane = this.playerLane + direction;
		if(lane < 0)
			lane = 1;
		else if(lane > 2)
			lane = 2;

		this.playerLane = lane;

		// Set player position
		this.sprite.position.setTo(this.laneXPositions[this.playerLane], 960 - (this.sprite.height / 2));
	}
}