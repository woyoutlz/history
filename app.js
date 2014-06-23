$(function(){
	// $(".wenzhang").html("dddd")
	/*app级别 begin */
	var app ={};
	//end
	/*滚动条样式 begin */
	 $(".wenzhang").mCustomScrollbar({
        axis:"y",
        theme:"minimal-dark"
      });
	//end
	
	 var Top = function(){
	 	var self = this;
	 	this.jq = $(".top");
	 	this.dismiss = function(){
	 		self.jq.hide();
	 	}
	 	this.show = function(){
	 		self.jq.show();
	 	}
	 }
	 var top = new Top();
	 var Right = function(){
	 	var self = this;
	 	this.jq = $(".right");
	 	this.dismiss = function(){
	 		self.jq.hide();
	 	}
	 	this.show = function(){
	 		self.jq.show();
	 	}
	 }
	 var right = new Right();

	 var MainView = function(){
	 	var self = this;
	 	this.jq = $(".left");
	 	self.isFull = false;
	 	this.full = function(){
	 		self.isFull = true;
	 		self.jq.find(".wenzhang").addClass("full");
	 	}
	 	this.small = function(){
	 		self.isFull = false;
	 		self.jq.find(".wenzhang").removeClass("full");
	 	}
	 }
	 var main = new MainView();
	 function fullTheMain(){
	 	top.dismiss();
	 	 right.dismiss();
	 	 main.full();
	 	// bottom.dismiss();
	 }
	 function smallTheMain(){
	 	top.show();
	 	right.show();
	 	main.small();
	 }
	 // fullTheMain();
	 out = fullTheMain;
	 out1 = smallTheMain;
	 /*keyboard绑定  begin*/
	 key('a', function(e){
	 	console.log(e);
	 	if (main.isFull) {
	 		smallTheMain();
	 	}else{
	 		fullTheMain();
	 	}
	 	
	 });
	 //end
})