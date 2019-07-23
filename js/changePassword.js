$('.header img:first-child').on('touchend',function(){
	location.href="index.html"
})
var bool,bool2 = false;
if($('.next').length > 0){
	$('.next').on('touchend',function(){
		var value = $('input[name="username"]').val();
		if(value.length>0){
			if(localStorage.getItem(value)){
				$('#form').html(`
				<div class="input">
					<div>
						<span>用户名</span>
						<input class="disabled" disabled="disabled" type="text" name="username" value=${value}>
					</div>
					<div>
						<span>新密码</span>
						<input type="password" name="password">
					</div>
					<div>
						<span>确认密码</span>
						<input type="password" name="confirmPws">
					</div>
				</div>
				<div class="button">
					<button type="submit">提交</button>
					<button type="reset">重置</button>
				</div>
				`)
				bool = true;
				$('button[type="reset"]').on('touchend',function(){
					$('input').next().remove()
				})
				$('input').blur(function(){
					if(bool){
						var value = $(this).val();
						if(value){
							 //判断密码
							 if($(this).attr('name') == 'password'){
								if (!/[\u4E00-\u9FA5]/g.test(value)) {
									if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/.test(value)){
										appendElement($(this),'密码格式正确',true)
										bool2 = true;
									}else{
										appendElement($(this),'必须字母和数字混合，至少8位，不能包含汉字！',false)
										bool2 = false;
									}
								}else{
									appendElement($(this),'必须字母和数字混合，至少8位，不能包含汉字！',false)
									bool2 = false;
								}
							 }
							 //判断确认密码
							 else if($(this).attr('name') == 'confirmPws'){
							 	if($(this).val() == $('input[name="password"]').val()){
							 		appendElement($(this),'密码一致',true)
									bool2 = true;
							 	}else{
							 		appendElement($(this),'两次密码不一致,请输入正确的密码！',false)
									bool2 = false;
							 	}
							 }
						}
					}
				})
				$('button[type="submit"]').on('touchend',function(){
					if(bool2){
						console.log(1)
						var user = JSON.parse(localStorage.getItem(value))
						user.password = $('input[name = "password"]').val();
						localStorage.setItem(value,JSON.stringify(user))
						location.href = "index.html"
					}
					return false;
				})
			}else{
				bool = false;
				appendElement( $('input[name="username"]'),'该账号不存在，请重新输入！',false)
			}
		}
	})
}
$('#form').submit(function(){
	return false;
})
