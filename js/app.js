tela=document.getElementById("tela");
ctx= tela.getContext("2d");
tela.width = 800;
tela.height = 600;




var ball = new Ball(200,200,6,"#ff0000")
var p1 = new Player(0,570,80,6,"rgb(25,200,0)")



var update = ()=>{
	requestAnimationFrame(update);
	window.onkeydown = (e)=>{
		p1.setDirection(e)
	}
	ball.setDirection()
	draw()
}
requestAnimationFrame(update);

draw = ()=>{
	ctx.clearRect(0,0,tela.width, tela.height)
	ctx.beginPath()
	p1.draw()
	ball.draw() 
	ctx.closePath()
	ctx.stroke()
	ball.collision(p1,tela)
	ctx.strokeText('pontos: '+ball.getPontos(), tela.width/2, 30, 200);
	
}


