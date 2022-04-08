tela=document.getElementById("tela");
ctx= tela.getContext("2d");
tela.width = 800;
tela.height = 600;




var ball = new Ball(200,200,6,"#ff0000")
var p1 = new Player((tela.width / 2)-40,570,80,6,"rgb(25,200,0)",0)
var p2 = new Player((tela.width / 2)-40,30,80,6,"rgb(255,200,0)",1)



var update = ()=>{
	requestAnimationFrame(update);
	window.onkeydown = (e)=>{
		p1.setDirection(e)
		p2.setDirection(e)
	}
	ball.setDirection()
	ball.collision(p1,p2,tela)
	p1.collision(tela)
	p2.collision(tela)
	draw()
}
requestAnimationFrame(update);

draw = ()=>{
	ctx.clearRect(0,0,tela.width, tela.height)
	ctx.beginPath()
	p1.draw()
	p2.draw()
	ball.draw() 
	ctx.closePath()
	ctx.stroke()
	

	ctx.strokeText('pontos Player1: '+p1.getPontos()+"&#12; Player2: " + p2.getPontos(), (tela.width/2)-200, 30, 200);
	
}


