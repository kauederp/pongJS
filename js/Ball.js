class Ball{
	constructor(x,y,r,color,spd=3,spdx=0,collided=false){
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;
		this.spd = spd;
		this.spdx = spdx;
		this.collided = collided;
	}
	draw(){
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y, this.r, 0, 3 * Math.PI);
		ctx.fill();
	}
	setDirection(){
		this.x = this.x + 10 * 0.16 * this.spdx
		this.y = this.y + 10 * 0.16 * this.spd
		    
	}

	debug(){
		let debug = {
			"x" : (this.x).toFixed(2) ,
			"y" : (this.y).toFixed(2) ,
			"r" : this.r ,
			"color" : this.color,
			"spd" : (this.spd).toFixed(2) ,
			"spdx" : (this.spdx).toFixed(2),
			"collided" : this.collided
		}
		console.log(debug)
	}
	collision(player,player2,tela){
		if(	player.x < this.x-this.r && this.x+this.r <player.x + player.w && player.y < this.y+this.r && this.y+this.r <player.y + player.h || 
			player2.x < this.x-this.r && this.x+this.r <player2.x + player2.w && player2.y < this.y+this.r && this.y+this.r <player2.y + (3*player2.h))
		{
				this.spdx = this.spdx +Math.random() < 0.5 ? -1 : 1
				this.x = this.x + this.spdx
				this.spd = this.spd * -1
				this.collided = true
		}


		if( this.x-this.r < 0){
				
				this.spdx = this.spdx * -1
				this.collided = true
		}
		if(this.x+this.r > tela.width){
				
			this.spdx = this.spdx * -1
			this.collided = true
		}
		if(this.y-this.r < 0){
			this.spd = this.spd * -1
			this.collided = true
			this.y = this.y + this.r
			player.pontos++
		}
		if(this.y+this.r > tela.height){
			this.spd = this.spd * -1
			this.collided = true
			this.y = this.y - this.r
			player2.pontos++
		}
	}
}