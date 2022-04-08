class Player {
	constructor(x,y,w,h,color,control=0,spd=15,pontos=0){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = color;
		this.spd = spd;
		this.control= control;
		this.pontos = pontos;
	}
	draw(){
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.fillRect(this.x,this.y,this.w,this.h)
		ctx.fill();
	}
	setDirection(direction){

		if(this.control == 0){
			switch (event.key){
			 case "a":
		        this.x = this.x - 10 * 0.16 * this.spd
		        break;
		    case "d":
		        this.x = this.x + 10 * 0.16 * this.spd
		        break;
		    }
		}

		else{
		    switch (event.key){
		    case "ArrowLeft":
		        this.x = this.x - 10 * 0.16 * this.spd
		        break;
		    case "ArrowRight":
		        this.x = this.x + 10 * 0.16 * this.spd
		        break;
	    	}
		}
	}
	getPontos(){
		return this.pontos
	}


	collision(tela){
		if( this.x < 0 ){
						
				this.x = this.x + 10 * 0.16 * this.spd
				this.collided = true
				console.log(this.collided)
		}else if(this.x+this.w > tela.width){
				this.x = this.x - 10 * 0.16 * this.spd
				this.collided = true
				console.log(this.collided)
		}
	}


	debug(){

		console.table(this.x,this.y,this.w,this.h,this.color,this.spd)
	}

}
