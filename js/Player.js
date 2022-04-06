class Player {
	constructor(x,y,w,h,color,spd=15){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = color;
		this.spd = spd;
	}
	draw(){
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.fillRect(this.x,this.y,this.w,this.h)
		ctx.fill();
	}
	setDirection(direction){
		switch (event.key) {
		    case "ArrowLeft":
		        this.x = this.x - 10 * 0.16 * this.spd
		        break;
		    case "ArrowRight":
		        this.x = this.x + 10 * 0.16 * this.spd
		        break;
		    case "a":
		        this.x = this.x - 10 * 0.16 * this.spd
		        break;
		    case "d":
		        this.x = this.x + 10 * 0.16 * this.spd
		        break;
		}
	}

	debug(){

		console.table(this.x,this.y,this.w,this.h,this.color,this.spd)
	}

}
