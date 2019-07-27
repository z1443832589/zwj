var victory = localStorage.getItem('victory')
if(victory == 'lang'){
	$('.result').append('<h1 class="lang">狼人胜利</h1>')
}else{
	$('.result').append('<h1 class="hao">好人胜利</h1>')
}
for(var i = 0;i < dataPlay.length;i++){
	$('.log').append('<div><h3>第 '+(i+1)+' 天</h3></div>')
	var w = dataPlay[i].werewolf;
	var du = dataPlay[i].duyao;
	var jie = dataPlay[i].jieyao;
	var g= dataPlay[i].guard;
	var piao = dataPlay[i].piao;
	console.log(g != w)
	if(jie != w && g != w){
		$('.log div').eq(i).append('<p>'+w+'号死亡，原因被狼杀')
	}else if(du > 0){
		$('.log div').eq(i).append('<p>'+du+'号死亡，原因被女巫毒死')
	}else{
		$('.log div').eq(i).append('<p>今晚是平安夜</p>')
	}
	$('.log div').eq(i).append('<p>'+piao+'号出局，原因被票出去')
}
function removeData(){
	localStorage.removeItem('jingHui')
	localStorage.removeItem('dataPlay')
	localStorage.removeItem('jingZhang')
	localStorage.removeItem('nextDay')
	localStorage.removeItem('dataTime')
	localStorage.removeItem('dataPeople')
	localStorage.removeItem('victory')
}
$('.quit').click(function(){
	removeData()
	location.href = "index.html"
})
$('.continue').click(function(){
	removeData()
	location.href = "play.html"
})
