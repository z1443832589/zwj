showIdentity('werewolf')
$('li').click(function(){
	clickLi($(this),"sha",'在本作者的这个游戏里，狼人请不要自刀好吗！','这个人都已经死，就放过他吧~')
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').last().attr('class') == 'sha'){
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
				bool = true;
				break;
			}
		}else{
			bool = false;
			console.log(bool)
			continue;
		}
	}
	if(!bool){
		alert('请选择要杀的人！')
	}
})
// data[8].life = 1
// localStorage.setItem('dataPeople',JSON.stringify(data))