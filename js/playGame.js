$('.header img:first-child').on('touchend',function(){
	location.href="deal.html"
})
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
var dataTime = JSON.parse(localStorage.getItem('dataTime'))
var jingZhang = localStorage.getItem('jingZhang');
var jingHui = localStorage.getItem("jingHui");
if(dataTime.day == 1){
	$('.jingzhang').show()
}else{
	$('.jingzhang').hide()
}
if(jingZhang == 'false' && jingHui == 'true'){
	$('.jinghui').show()
}else{
	$('.jinghui').hide()
}
switch(dataTime.day){
	case 1:
		$('.row>ul>a').text('第一天');
		break;
	case 2:
		$('.row>ul>a').text('第二天');
		break;
	case 3:
		$('.row>ul>a').text('第三天');
		break;
	case 4:
		$('.row>ul>a').text('第四天');
		break;
	case 5:
		$('.row>ul>a').text('第五天');
		break;
	case 6:
		$('.row>ul>a').text('第六天');
		break;
	case 7:
		$('.row>ul>a').text('第七天');
		break;
	case 8:
		$('.row>ul>a').text('第八天');
		break;
	case 9:
		$('.row>ul>a').text('第九天');
		break;
	case 10:
		$('.row>ul>a').text('第十天');
		break;	
}
if(dataTime.schedule<=4){
	$('.pm').chldren('li').eq(dataTime.schedule-1).addClass('schedule')
}