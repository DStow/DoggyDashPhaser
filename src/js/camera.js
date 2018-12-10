class Camera{
	constructor(gameState, screenWidth, screenHeight, visibleWorldUnits) {
		this.gameState = gameState;
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		this.visibleWorldUnits = visibleWorldUnits;

		this.screenRatio = this.calculateCameraRatio();
	}

	calculateCameraRatio(){
		var ratio = 0.00 + this.screenWidth / this.visibleWorldUnits;
		console.log(ratio);
		return ratio;
	}

	refreshScreenSize(screenWidth, screenHeight){
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		this.screenRatio = this.calculateCameraRatio();
		console.log(screenWidth + " - " + screenHeight);
	}

	computeWorldPositionToPixelPosition(worldPosition) {
		return {x: worldPosition.x * this.screenRatio,
				y: worldPosition.y * this.screenRatio};
	}

	computeWorldAreaToPixelRectangle(unitPosition, unitSize){
		var result = {x:0,y:0,width:0,height:0};
		var pixelPos = this.computeWorldPositionToPixelPosition(unitPosition);
		result.x = pixelPos.x;
		result.y = pixelPos.y;
		result.width = unitSize.x * this.screenRatio;
		result.height = unitSize.y * this.screenRatio;
		return result;
	}

	visibleWorldHeight() {
		return this.screenHeight / this.screenRatio;
	}
}