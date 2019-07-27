for(let i in data){
	$('#app>ul').append('<li><span>'+data[i].id+'</span></li>')
	if(data[i].life == 0){
		$('li:last-child').append('<img class="die" src="img/die.png" >')
	}
	if(parseInt(i)+1 == jingZhang){
		$('li:last-child').append('<img class="jingHui" src="img/jingHui.png" >')
	}
}
if(dataTime != 1 && jingHui == "true" && jingZhang == "false"){
	$('.tearUp').removeClass('disabled-btn');
	$('.tearUp').removeAttr('disabled')
}
$('.tearUp').click(function(){
	jingHui = "false";
	localStorage.setItem('jingHui',jingHui)
	$('.tearUp').attr('disabled','disabled')
	$('.tearUp').addClass('disabled-btn');
})
$('li').click(function(){
	clickLi($(this),"jingHui",'兄弟，别点自己啊！','这个人已经出局了，还给个毛警徽')
})
$('.sure').click(function(){
	var bool = true;
	for (var i = 0;i < $('li').length;i++) {
		if($('li').eq(i).children('img').length > 0){
			console.log(1)
			if($('li').eq(i).children('img').attr('class') == 'jingHui'){
				disabledSure()
				localStorage.setItem('jingZhang',i+1)
				bool = true;
				break;
			}
			
		}else{
			bool = false;
			continue;
		}
	}
	if(!bool){
		alert('请选择警徽！')
	}
})