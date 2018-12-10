var gameState = {
	preload: function() {
		this.load.image('player', 'assets/images/player/player.png');
	},
	create: function() {
		// Take up as much room as possible
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// Auto align game to the center of the screen
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		this.setupPlayer();
		this.setupKeyboardInputs();

		this.laneXPositions = [106, 320, 532];
	},
	update: function() {

	},
	setupPlayer: function () {
		this.playerLane = 1;

		this.player = this.game.add.sprite(25, 25, 'player');
		this.player.scale.setTo(0.1);
		this.player.anchor.setTo(0.5);
		this.player.position.setTo(100, 960 - (this.player.height / 2));
	},
	setupKeyboardInputs: function () {
		this.keyboard = game.input.keyboard;
		var aKey = this.keyboard.addKey(65);

		var self = this;
		aKey.onUp.add(function (key) {
			self.movePlayer(-1);
		});

		var dKey = this.keyboard.addKey(68);
		dKey.onUp.add(function (key) {
			self.movePlayer(1);
		});
	},
	movePlayer: function(direction){
		console.log("Moving player in the direction " + direction)
		var lane = this.playerLane + direction;
		if(lane < 1)
			lane = 1;
		else if(lane > 3)
			lane = 3;

		this.playerLane = lane;

		// Set player position
		this.player.position.setTo(this.laneXPositions[this.playerLane-1], 960 - (this.player.height / 2));
	}
};