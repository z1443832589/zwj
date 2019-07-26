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
				disabledSure()
				var day = dataTime.day;
				var dataPlay = []
				dataPlay[day-1] = {
						werewolf:i+1,
						prophet:0,
						duyao:0,
						jieyao:0,
						guard:0
					}
				localStorage.setItem('dataPlay',JSON.stringify(dataPlay))
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
// data[8].life = 1
// localStorage.setItem('dataPeople',JSON.stringify(data))