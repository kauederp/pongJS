class Ball{
	constructor(x,y,r,color,spd=3,spdx=0,collided=false,pontos=0){
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;
		this.spd = spd;
		this.spdx = spdx;
		this.collided = collided;
		this.pontos = pontos;
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
	getPontos = ()=>{
		return this.pontos
	}
	collision = (player,tela)=>{
		if(	player.x < this.x-this.r && 
			this.x+this.r <player.x + player.w &&
			player.y < this.y+this.r && 
			this.y+this.r <player.y + player.w){
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
				this.pontos++
				this.collided = true
				this.y = this.y + this.r
		}
		if(this.y+this.r > tela.height){
			this.spd = this.spd * -1
			this.pontos--
			this.collided = true
			this.y = this.y - this.r
		}
	}
}