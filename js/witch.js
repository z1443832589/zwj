var prophetLife = showIdentity('witch')
$('li').click(function(){
	clickLi($(this),"yao",'兄弟，别点自己啊！','这个人已经出局了，解药和毒药都没用了，就别点啦！')
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').attr('class') == 'yan'){
				disabledSure()
				var shenfen = data[i].identity;
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