$('.header img:first-child').on('touchend',function(){
	location.href="deal.html"
})
if(dataTime.schedule > 4 && dataTime.schedule <= 5){
	var w = dataPlay[day-1].werewolf;
	var du = dataPlay[day-1].duyao;
	var jie = dataPlay[day-1].jieyao;
	var g= dataPlay[day-1].guard;
	if(jie != w && g != w && du > 0 && g != du){
		popout('昨晚'+w+'号和'+du+'号死亡')
	}else if(jie != w && g != w){
		popout('昨晚'+w+'号死亡')
	}else if(du > 0 && g != du){
		popout('昨晚'+du+'号死亡')
	}else{
		popout('今晚是平安夜')
	}
}
$('a').click(function(){
	if($(this).attr('href') == 'javascript:;'){
		$(this).nextAll().toggle()
		if($(this).nextAll().css('display') == 'none'){
			$(this).addClass('shou')
		}else{
			$(this).removeClass('shou')
		}
	}
})
// localStorage.setItem('jingZhang',1)
// console.log(jingZhang)
console.log(!isNaN(parseInt(jingZhang)))
if(!isNaN(parseInt(jingZhang))){
	if(data[parseInt(jingZhang)-1].life == 0){
		jingZhang = false;
		localStorage.setItem('jingZhang',jingZhang)
	}
}
if(jingZhang == 'false' && jingHui == 'true' || nextDay != 'true'  && jingHui == 'true'){
	$('[name="jinghui"]').parent('li').remove()
	$('.am').prepend('<li><a href="javascript:;" name="jinghui" data-name="jinghui">警徽选择</a></li>')
}else if(nextDay != 'true'){
	$('[name="jinghui"]').parent('li').remove()
	$('.am').prepend('<li><a href="javascript:;" name="jinghui" data-name="jinghui">警徽选择</a></li>')
}else{
	$('[name="jinghui"]').parent('li').remove()
}
if(dataTime.day > 1){
	$('[name="jingzhang"]').parent('li').remove()
}else{
	$('[name="jingzhang"]').parent('li').remove()
	$('.am').prepend('<li><a href="javascript:;" name="jingzhang">竞选警长</a></li>')
}
if(jingHui == 'false'){
	$('[name="fayan"]').parent('li').remove();
}else{
	$('[name="fayan"]').parent('li').remove();
	$('[data-name="tou"]').parent('li').remove();
	$('.am').append('<li><a href="javascript:;" name="fayan">警长发言</a></li>'+
		'<li><a href="javascript:;" data-name="tou">投票</a></li>')
}
switch(dataTime.day){
	case 1:
		$('.row>ul>a span').text('一')
		break;
	case 2:
		$('.row>ul>a span').text('二')
		break;
	case 3:
		$('.row>ul>a span').text('三')
		break;
	case 4:
		$('.row>ul>a span').text('四')
		break;
	case 5:
		$('.row>ul>a span').text('五')
		break;
	case 6:
		$('.row>ul>a span').text('六')
		break;
	case 7:
		$('.row>ul>a span').text('七')
		break;
	case 8:
		$('.row>ul>a span').text('八')
		break;
	case 9:
		$('.row>ul>a span').text('九')
		break;
	case 10:
		$('.row>ul>a span').text('十')
		break;	
}
if(dataTime.schedule<=4){
	addCss($('.pm li'),dataTime.schedule)
}else{
	addCss($('.pm li'),5)
	addCss($('.am li'),dataTime.schedule-4)
}
$('.day li').on('click',function(){
	var i = $(this).index();
	if(dataTime.schedule<=4){
		Hraf($(this),dataTime.schedule,$(this).parent().attr('class') != 'ul-child am')
	}else{
		Hraf($(this),dataTime.schedule-4,true)
	}
})
function addCss(_this,length){
	var j = notNone(_this);
	for(var i = 0;i < length-1;i++){
		_this.eq(i).children().addClass('schedule')
	}
}
function Hraf(_this,schedule,bool){
	if(_this.children().attr('class') != 'schedule'){
		var j = notNone(_this)
		if(_this.index()+1-j == schedule && bool){
			dataTime.schedule++;
			localStorage.setItem('dataTime',JSON.stringify(dataTime))
			if(_this.children().text() == '所有人发言' || _this.children().text() == '警长发言' || _this.children().text() == '竞选警长'){
				alert(_this.children().text())
				addCss($('.am li'),dataTime.schedule-4)
			}else{
				location.href = _this.children().attr('data-name')+'.html';
			}
		}else{
			alert('请按照顺序进行')
		}
	}
}
function notNone(_this){
	var a = 0;
	var Length = _this.prevAll().length
	for(var i = 0;i < Length;i++){
		if(_this.parent('ul').children().eq(i).css('display') == "none"){
			a++;
		}
	}
	return a;
}
// dataTime.schedule = 5
// localStorage.setItem('dataTime',JSON.stringify(dataTime))
// jingZhang= 'false'
// localStorage.setItem('jingZhang',jingZhang)