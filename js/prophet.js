var prophetLife = showIdentity('prophet')
$('li').click(function(){
	clickLi($(this),"yan",'点击错误！','这个人已经出局了，就别看他身份了')
})
var shenfen = null;
var qianShenfen = null;
for(var i = 0;i <  Object.keys(dataPlay).length;i++){
	if(dataPlay[i].prophet>0){
		qianShenfen = dataPlay[i].prophet-1
		shenfen = data[dataPlay[i].prophet-1].identity
	}
	$('li').eq(qianShenfen).addClass(shenfen)
}
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').last().attr('class') == 'yan'){
				disabledSure()
				shenfen = data[i].identity;
				$('li').eq(i).children('img').last().remove();
				$('li').eq(i).addClass(shenfen)
				var day = dataTime.day;
				dataPlay[day-1].prophet = i+1;
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
		alert('请选择要查验身份的人！')
	}
})
if(prophetLife == 0){
	disabledSure()
}