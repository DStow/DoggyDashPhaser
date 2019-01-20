var gameState = {
	preload: function() {
		// ToDo: Move this to functions of hte objectS?
		this.load.image('player', 'assets/images/player/player.png');
		this.load.image('crate', 'assets/images/obstacles/crate.png');
		this.load.image('asteroid', 'assets/images/obstacles/asteroid.png');
		this.load.image('touchbar', 'assets/images/ui/touchpanel.png');
		this.load.image('testrect', 'assets/images/testrect.png');

		this.camera = new Camera(this, 640, 1100, 300);
		this.laneXPositions =  [55, 150, 245];
		this.player = new Player(this);
		this.obstacleSpawner = new ObstacleSpawner(this);
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
		this.obstacleSpawner.create();
		this.ui.create();
		this.setupKeyboardInputs();
	},
	update: function() {
		var elapsedTime = this.game.time.physicsElapsed;
		this.player.update();
		this.ui.update();
		this.obstacleSpawner.update(elapsedTime);
	},
	preRender() {
		this.player.preRender();
		this.ui.preRender();
		this.obstacleSpawner.preRender();
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