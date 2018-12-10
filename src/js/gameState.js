var gameState = {
	preload: function() {
		this.load.image('player', 'assets/images/player/player.png');

		this.camera = new Camera(this, 640, 1000, 300);
		this.player = new Player(this);
		this.ui = new DoggyDashUI(this);
	},
	create: function() {
		// Take up as much room as possible
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// Auto align game to the center of the screen
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		this.player.create();
		this.ui.create();
		this.setupKeyboardInputs();
	},
	update: function(time, delta) {
		this.player.update();
	},
	preRender() {
		this.player.preRender();
	},
	setupKeyboardInputs: function () {
		this.keyboard = game.input.keyboard;
		var aKey = this.keyboard.addKey(65);

		var self = this;
		aKey.onUp.add(function (key) {
			self.player.movePlayer(-1);
		});

		var dKey = this.keyboard.addKey(68);
		dKey.onUp.add(function (key) {
			self.player.movePlayer(1);
		});
	}
};