for(let i in data){
		$('#app>ul').append('<li><span>'+data[i].id+'</span></li>')
		$('li:last-child').addClass(data[i].identity)
	}