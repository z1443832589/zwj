var prophetLife = showIdentity('witch')
$('li').click(function(){
	clickLi($(this),"yao",'兄弟，别点自己啊！','这个人已经出局了，解药和毒药都没用了，就别点啦！')
})

$('.sure').click(function(){
	var bool = true;
	var val=$('input:radio[name="move"]:checked').val();
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').attr('class') == 'yao'){
				 var day = dataTime.day;
				if(val == 2){
					disabledSure()
					dataPlay[day-1].jieyao = i+1;
				}else if(val == 1){
					disabledSure()
					dataPlay[day-1].duyao = i+1;
				}
				localStorage.setItem('dataPlay',JSON.stringify(dataPlay))
				bool = true;
				break;
			}
		}else if(val == 3){
			disabledSure()
		}else{
			bool = false;
			continue;
		}
	}
	if(!bool){
		alert('请选择要对他用药的人！')
	}
})
if(prophetLife == 0){
	disabledSure()
}