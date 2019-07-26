var prophetLife = showIdentity('prophet')
$('li').click(function(){
	if($(this).children('img').length == 0){
		if(!$(this).attr('class')){
			$('.sha').remove();
			$(this).append('<img class="yan" src="img/yan.png" >')
		}else{
			alert('兄弟，别点自己啊！')
		}
	}else{
		alert('这个人已经出局了，就别看他身份了')
	}
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').attr('class') == 'yan'){
				disabledSure()
				var shenfen = data[i].identity;
				$('li').eq(i).children('img').remove();
				$('li').eq(i).addClass(shenfen)
				var day = dataTime.day;
				dataPlay[day-1].prophet = i+1;
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
		alert('请选择要查验身份的人！')
	}
})
if(prophetLife == 0){
	disabledSure()
}