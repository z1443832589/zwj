var prophetLife = showIdentity('witch')
var day = dataTime.day;
$('li').click(function(){
	clickLi($(this),"yao",'兄弟，别点自己啊！','这个人已经出局了，解药和毒药都没用了，就别点啦！')
})
for(let i in data){
	if(data[i].identity == 'witch'){
		var a = parseInt(i);
		if(data[i].duyao == 0){
			$('input[value="1"]').attr('disabled','disabled')
		}
		if(data[i].jieyao == 0){
			$('input[value="2"]').attr('disabled','disabled')
		}else{
			// alert('昨晚'+dataPlay[day-1].werewolf+'号死了')
			popout('昨晚'+dataPlay[day-1].werewolf+'号死了')
		}
	}
}
function popout(text){
	var time = null
	$('body').append('<div class="hei"></div>')
	$('body').append('<div class="popout"><p>'+text+'</p><button class="popout-btn">确定</button></div>')
	$('.popout').animate({'top':'1rem'},300)
	$('.popout-btn').click(function(){
		$('.popout').animate({'top':'-6rem'},300)
		time = setTimeout(function(){
			$('.popout').remove()
			$('.hei').remove()
		},301)
	})
}
$('.sure').click(function(){
	var bool = true;
	var val=$('input:radio[name="move"]:checked').val();
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			if($('li').eq(i).children('img').last().attr('class') == 'yao'){
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
// data[3].duyao = 0;
// localStorage.setItem('dataPeople',JSON.stringify(data))