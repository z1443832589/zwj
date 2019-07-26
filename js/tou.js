for(let i in data){
		$('#app>ul').append('<li><span>'+data[i].id+'</span></li>')
		if(data[i].life == 0){
			$('li:last-child').append('<img class="die" src="img/die.png" >')
		}
		if(parseInt(i)+1 == jingZhang){
			$('li:last-child').append('<img class="jingHui" src="img/jingHui.png" >')
		}
	}
$('li').click(function(){
	clickLi($(this),"piao",'','这个人已经出局了，就别票他了！')
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').attr('class') == 'piao'){
				var day = dataTime.day;
				dataPlay[day-1].piao = i+1;
				localStorage.setItem('dataPlay',JSON.stringify(dataPlay))
				dataChange()
				dataTime.day++;
				dataTime.schedule = 1;
				localStorage.setItem('dataTime',JSON.stringify(dataTime))
				bool = true;
				disabledSure()
				break;
			}
		}else{
			bool = false;
			continue;
		}
	}
	if(!bool){
		alert('请选择要票的人！')
	}
})
function dataChange(){
	var day = dataTime.day;
	var sha = dataPlay[day-1].werewolf-1;
	var duyao = dataPlay[day-1].duyao-1;
	var jieyao = dataPlay[day-1].jieyao-1;
	var piao = dataPlay[day-1].piao-1;
	var guard = dataPlay[day-1].guard-1;
	var witch = 0;
	for(var i = 0;i < Object.keys(data).length;i++){
		if(data[i].identity == 'witch'){
			witch = i;
		}
	}
	data[sha].life = 0;
	if(duyao >= 0){
		data[duyao].life = 0;
		data[witch].duyao = 0;
	}
	if(jieyao >= 0){
		data[jieyao].life = 1;
		data[witch].jieyao = 0;
	}
	data[guard].life = 1;
	data[piao].life = 0;
	localStorage.setItem('dataPeople',JSON.stringify(data))
}
