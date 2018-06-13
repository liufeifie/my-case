function alert_div(content,cancel,btn,url,fun,target){
	popup.popupTip='友情提示';               //弹出框标题
	popup.popupMain=content;             	//弹出框内容
	if(cancel){
		popup.popupCancel='取消';           //弹出框取消按钮
	}
	if(btn){
		popup.popupBtn=btn;                 //弹出框确认按钮
	}else{
		popup.popupBtn='确认';
	}
	if(url){
		popup.popupUrl=url;           		//弹出框链接
	}
	if(fun){
		popup.Fun=fun;           			//点击确认事件
	}
	if(target){
		popup.target='_blank';
	}else{
		popup.target='_self';
	}
	popup.checkData();

}
  var popup={
	 popupTip:"",   //弹出框标题
	 popupMain:"",  //弹出框内容
	 popupBtn:"",   //弹出框确认按钮
	 popupCancel:"",//弹出框取消按钮
	 popupUrl:"",   //弹出框跳转链接
	 Cancel:"",
	 Btn:"",
	 Tip:"",
	 Fun:"",
	 target:"",
	  checkData:function(){

		 if(this.popupBtn!="" && this.popupCancel==""){
			this.Btn='<div class="error-btn error-btn2">'+this.popupBtn+'</div>';
		 }
		 if(this.popupCancel!=""){
			this.Btn='<div class="error-btn3 error-btn4">'+this.popupCancel+'</div><div class="error-btn3 error-btn5">'+this.popupBtn+'</div>';
		 }
		 var alertpopup='<div class="popup">'+
		   '<div class="alert-bg"></div>'+
		   '<div class="show-error">'+
		    '<div class="show-error-top1">'+
			 '<span class="error-top-left">'+this.popupTip+'</span>'+
			 '<span class="error-top-right"><img src="/static/public/img/coupon_pc/user/closes.png"></span>'+
			'</div>'+
			'<div class="show-error-btn show-border-radius">'+'<div class="show_ospan">'+this.popupMain+'</div>'+this.Btn+
			  '</div>'+
		   '</div>'+
		 '</div>';
		
		$("body").append(alertpopup);
		$(".error-btn").bind("click",function(){   //点击确认按钮
			if(popup.popupUrl!=""){
				window.open(popup.popupUrl,popup.target);
				$(".popup").remove();
			}else{
				$(".popup").remove();
			}
        });
		$(".error-btn5").bind("click",function(){  //点击确认按钮
			if(popup.popupUrl!=""){
				window.open(popup.popupUrl,popup.target);
				$(".popup").remove();
			}else{
				
				eval(popup.Fun);
				$(".popup").remove();
			}
        });
		$(".error-btn4").bind("click",function(){   //点击取消按钮
             $(".popup").remove();
        });
		$(".error-top-right").bind("click",function(){  //点击x按钮
             $(".popup").remove();
        });
  }
}

