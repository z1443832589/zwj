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
	clickLi($(this),"piao",'','这个人已经出局了，守护他也没什么卵用了')
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').attr('class') == 'dun'){
				disabledSure()
				var day = dataTime.day;
				dataPlay[day-1].guard = i+1;
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
		alert('请选择要守护的人！')
	}
})