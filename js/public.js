var a = 1;
var audioSrc = $('audio').attr('src')
var _boolean = sessionStorage.getItem('music')
$(document).ready(function(){
	if(_boolean == 'fales'){
		$('audio').attr('src','')
		$('#audio').attr('src','img/mute.png')
	}else{
		$('audio').attr('src',audioSrc)
		$('#audio').attr('src','img/play.png')
	}
})
$('#audio').click(function(){
	if(_boolean){
		_boolean = sessionStorage.getItem('music')
		if(_boolean == 'true'){
			$('audio').attr('src','')
			$(this).attr('src','img/mute.png')
			sessionStorage.setItem('music','fales')
		}else{
			$('audio').attr('src',audioSrc)
			$(this).attr('src','img/play.png')
			sessionStorage.setItem('music','true')
		}
	}else{
		$('audio').attr('src','')
		$(this).attr('src','img/mute.png')
		sessionStorage.setItem('music','fales')
	}
})
function appendElement(_this,val,bool){
	if(bool){
		_this.next().remove()
		_this.parent().append('<span class="succeed">'+val+'</span>')
	}else{
		_this.next().remove()
		_this.parent().append('<span class="error">'+val+'</span>')
	}
	
}
var data= JSON.parse(localStorage.getItem('dataPeople'))
function showIdentity(Identity){
	var thisLife = 0;
	for(let i in data){
		$('#app>ul').append('<li><span>'+data[i].id+'</span></li>')
		if(data[i].life == 0){
			$('li:last-child').append('<img class="die" src="img/die.png" >')
		}
		if(data[i].identity == Identity){
			var a = parseInt(i)+1;
			if(a == data[i].id){
				$('li:last-child').addClass(Identity)
			}
			thisLife = data[i].life;
		}
	}
	return thisLife;
}
// data[8].life = 1;
// localStorage.setItem('dataPeople',JSON.stringify(data))
if($('.return').length>0){
	$('.return').click(function(){
		location.href = 'playGame.html'
	})
}
function disabledSure(){
	$('.sure').attr('disabled','disabled')
	$('.sure').addClass('disabled-btn');
	$('.return').removeClass('disabled-btn');
	$('.return').removeAttr('disabled')
}