$('.button button').on('touchend',function(){
	$('.button button').removeClass('border-color');
	$(this).addClass('border-color');
	peopleNum($(this).text())
})
$('.header img:first-child').on('touchend',function(){
	location.href="index.html"
})
function  peopleNum(num){
	$('.prophet').text('1 人')
	$('.witch').text('1 人')
	$('.guard').text('1 人')
	if(num == 9){
		$('.civilian').text('3 人')
		$('.werewolf').text('3 人')
	}else if(num == 10){
		$('.civilian').text('4 人')
		$('.werewolf').text('3 人')
	}else if(num == 11){
		$('.civilian').text('4 人')
		$('.werewolf').text('4 人')
	}else if(num == 12){
		$('.civilian').text('5 人')
		$('.werewolf').text('4 人')
	}
	
}
$('.next').on('touchend',function(){
	if(parseInt($('.prophet').text())>0){
		var num = parseInt($('.border-color').text())
		var arr = []
		setArr(arr,$('.civilian'))
		setArr(arr,$('.werewolf'))
		setArr(arr,$('.prophet'))
		setArr(arr,$('.witch'))
		setArr(arr,$('.guard'))
		var dataPeople = {}
		var i = 0;
		var a = 0;
		var keys = new Array(1)
		while (a<40){
			var key = Math.ceil(Math.random()*(num-1))
			for(var j = 0;j < keys.length;j++){
				if(keys.indexOf(key)<0){
					keys.push(key)
					var data = arr[key]
					dataPeople[i] = {identity:data}
					i++
				}
			}
			a++;
		}
			console.log(dataPeople,keys,arr)
	}
})
//添加数组
function setArr(arr,el){
	for(var i = 0;i < parseInt(el.text());i++){
		arr.push(el.attr('class'))
	}
}
