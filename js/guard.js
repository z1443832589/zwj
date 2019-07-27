var prophetLife = showIdentity('guard')
$('li').click(function(){
	clickLi($(this),"dun",'兄弟，别点自己啊！','这个人已经出局了，守护他也没什么卵用了')
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').last().attr('class') == 'dun'){
				disabledSure()
				var day = dataTime.day;
				dataPlay[day-1].guard = i+1;
				localStorage.setItem('dataPlay',JSON.stringify(dataPlay))
				bool = true;
				break;
			}
		}else{
			bool = false;
			continue;
		}
	}
	if(!bool){
		alert('请选择要守护的人！')
	}
})
if(prophetLife == 0){
	disabledSure()
}