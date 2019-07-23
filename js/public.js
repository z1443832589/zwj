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