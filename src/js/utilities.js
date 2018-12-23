class FixedTimer {
	constructor(gameState, seconds, enabled) {
		this.gameState = gameState;

		this.enabled = enabled;
		this.targetSeconds = seconds;
		this.elapsedTime = 0;
		this.tick = false;
	}

	update(elapsedSeconds) {
		// Only tick once
		if(this.tick) { this.tick = false; }

		if(this.enabled) {
			this.elapsedTime += elapsedSeconds;

			if(this.elapsedTime >= this.targetSeconds) {
				this.tick = true;
				// Keep the overflow
				this.elapsedTime -= this.targetSeconds;
			}
		}
	}
}