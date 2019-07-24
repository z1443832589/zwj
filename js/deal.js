$('.header img:first-child').on('touchend',function(){
	location.href="play.html"
})
var data = JSON.parse(localStorage.getItem('dataPeople'))
$('.id h1').text(data[0].id)
$('.show').on('touchend',function(){
	$(this).text('隐藏身份')
})