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
$('.return').click(function(){
	dataChange()
})
function dataChange(){
	var sha = dataPlay[day-1].werewolf-1;
	var duyao = dataPlay[day-1].duyao-1;
	var jieyao = dataPlay[day-1].jieyao-1;
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
	if(guard >= 0){
		data[guard].life = 1;
	}
	localStorage.setItem('dataPeople',JSON.stringify(data))
}
// jingZhang = 5;
// localStorage.setItem('jingZhang',jingZhang)
// dataPlay[3].werewolf = 1
// localStorage.setItem('dataPlay',JSON.stringify(dataPlay))
// data[1].life = 0;
// localStorage.setItem('dataPeople',JSON.stringify(data))