/*---------------------------
This script requires the gameState.js file
---------------------------*/
var game = new Phaser.Game(640, 1100, Phaser.AUTO);

// Add the state to the game
game.state.add('GameState', gameState);
game.state.start('GameState');