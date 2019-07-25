showIdentity('werewolf')
$('li').click(function(){
	if($(this).children('img').length == 0){
		if(!$(this).attr('class')){
			$('.sha').remove();
			$(this).append('<img class="sha" src="img/sha.png" >')
		}else{
			alert('在本作者的这个游戏里，狼人请不要自刀好吗！')
		}
	}else{
			alert('这个人都已经死，就放过他吧~')
		}
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').attr('class') == 'sha'){
				data[i].life = 0;
				$('.sure').attr('disabled','disabled')
				$('.sure').addClass('disabled-btn');
				$('.return').removeClass('disabled-btn');
				$('.return').removeAttr('disabled')
				var dataPlay = {
					werewolf:i
				} 
				localStorage.setItem('dataPlay',JSON.stringify(dataPlay))
				localStorage.setItem('dataPeople',JSON.stringify(data))
			}
			bool = true;
			break;
		}else{
			bool = false;
			continue;
		}
	}
	if(!bool){
		alert('请选择要杀的人！')
	}
})
$('.return').click(function(){
	location.href = 'playGame.html'
})