$(function(){
	var UserPassword = $("#UserPassword");
	var UserPassword1 = $("#UserPassword1");
	var UserPassword2= $("#UserPassword2");
	
	/*验证密码格式*/
	function yanzheng (id,label_id)
	{
		if(id.val()==="")
		{
			$(label_id).text("密码不能为空");
			$(label_id).css("display","block");
			return false;
			
		}
		else
		{
			 if(id.val().length>=6 && id.val().length<=16)
	    	 {
			      $(label_id).css("display","none");
			      return true;
		     }
		     else
		     {
			      $(label_id).text("请输入6-16位字符");
			      $(label_id).css("display","block");
			      return false;
		     }
		}
	};
	
	UserPassword.on("blur",function(){
		yanzheng(UserPassword,"#jingao_UserPassword");
	});
	
	UserPassword1.on("focus",function(){
		yanzheng(UserPassword,"#jingao_UserPassword");
	});
	UserPassword1.on("blur",function(){
		yanzheng(UserPassword1,"#jingao_UserPasswor1");
	});
	UserPassword2.on("focus",function(){
		yanzheng(UserPassword1,"#jingao_UserPasswor1");
	});
	
	
	/*确认密码判断密码是否相同*/
	UserPassword2.on("blur",function(){
		if(UserPassword1.val()===UserPassword2.val())
		{
			$("#jingao_UserPassword2").css("display","none");
			      return true;
			
		}
		else
		{
			 $("#jingao_UserPassword2").text("密码不相同");
			      $("#jingao_UserPassword2").css("display","block");
			      return false;
		}
		
	});
	
});
