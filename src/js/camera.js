class Camera{
	constructor(gameState, screenWidth, screenHeight, visibleWorldUnits) {
		this.gameState = gameState;
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		this.visibleWorldUnits = visibleWorldUnits;

		this.screenRatio = this.calculateCameraRatio();
	}

	calculateCameraRatio(){
		return 0.00 + this.screenWidth / this.visibleWorldUnits;
	}

	refreshScreenSize(screenWidth, screenHeight){
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		this.screenRatio = this.calculateCameraRatio();
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
		console.log("Area to pixel:");
		console.log(result);
		return result;
	}
}