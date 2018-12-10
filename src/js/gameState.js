var gameState = {
	preload: function() {
		this.load.image('player', 'assets/images/player/player.png');

		this.camera = new Camera(this, 640, 960, 300);
		this.player = new Player(this);
		this.ui = new DoggyDashUI(this);

		this.done = false;
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
		if(!this.done) {
			console.log(this.game.time);
			this.done =true;
		}
		this.player.update();
		console.log(this.camera.computeWorldAreaToPixelRectangle({x:25,y:25},{x:100,y:100}));
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