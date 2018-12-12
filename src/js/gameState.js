var gameState = {
	preload: function() {
		this.load.image('player', 'assets/images/player/player.png');
		this.load.image('crate', 'assets/images/obstacles/crate.png');
		this.load.image('touchbar', 'assets/images/ui/touchpanel.png');

		this.camera = new Camera(this, 640, 1100, 300);
		this.player = new Player(this);
		this.testCrate = new CreateObstacle(this);
		this.ui = new DoggyDashUI(this);
		this.score = 0;
	},
	create: function() {
		// Take up as much room as possible
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// Auto align game to the center of the screen
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		this.player.create();
		this.testCrate.create();
		this.ui.create();
		this.setupKeyboardInputs();
	},
	update: function(time, delta) {
		this.player.update();
		this.testCrate.update();
		this.ui.update();
	},
	preRender() {
		this.player.preRender();
		this.testCrate.preRender();
		this.ui.preRender();
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