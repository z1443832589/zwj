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
			if($('li').eq(i).children('img').last().attr('class') == 'piao'){
				var day = dataTime.day;
				dataPlay[day-1].piao = i+1;
				localStorage.setItem('dataPlay',JSON.stringify(dataPlay))
				dataChange()
				dataTime.day++;
				dataTime.schedule = 1;
				localStorage.setItem('dataTime',JSON.stringify(dataTime))
				bool = true;
				disabledSure()
				localStorage.setItem('nextDay','true')
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
	var piao = dataPlay[day-1].piao-1;
	var witch = 0;
	data[piao].life = 0;
	localStorage.setItem('dataPeople',JSON.stringify(data))
}
