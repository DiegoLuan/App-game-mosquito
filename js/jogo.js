
var altura = 0
var largura = 0
var vidas = 1
var tempo = 100
var tempoMosquito = 1500

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')

if(dificuldade === 'facil'){
	tempoMosquito = tempoMosquito
}else if(dificuldade === 'normal'){
	tempoMosquito = 1000 
}else if(dificuldade === 'dificil'){
	tempo = 50 
	tempoMosquito = 750
}


function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth 

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo--

	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(interval)
		window.location.href = 'vitoria.html?' + dificuldade
 	}
	document.getElementById('cronometro').innerHTML = tempo
},1000)

function posicaoRandomica(){

	//remover o mosquito anterior (se já existir)
	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove()

		//eliminar vida a cada mosca não clicada
		if(vidas > 3){
			clearInterval(interval)
			window.location.href='game-over.html?' + dificuldade
		}else{
			document.getElementById('vida' + vidas).src = "image/coracao_vazio.png" 

			vidas++
		}
		
	}
	

	var posicaoX = Math.floor(Math.random()*largura) - 100
	var posicaoY = Math.floor(Math.random()*altura) - 100

	posicaoX = posicaoX < 0 ? 0 : posicaoX 
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criar elemento HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'image/mosca.png'
	mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico() //Atribuir a chamada da função a classe, espaço com '' para não interpretar as strings juntas
	mosquito.style.left = posicaoX + 'px' //Formar coordenada em pixel
	mosquito.style.top = posicaoY + 'px' 
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosca'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

}//End-posicaoRandomica

function tamanhoRandomico(){

	var classe = Math.ceil(Math.random() * 3)

	switch(classe){
		case 1: 
			return 'mosca1'
		case 2: 
			return 'mosca2'
		case 3:
			return 'mosca3'
	}


}//End-tamanhoRandomico

function ladoRandomico(){

	var classe = Math.ceil(Math.random() * 2)

	switch(classe){
		case 1:
			return 'lado1'

		case 2:
			return 'lado2' 
	}
}//End-ladoRandomico