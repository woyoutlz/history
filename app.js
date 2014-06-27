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
	
	 /*keyboard绑定  begin*/
	 key('a', function(e){
	 	console.log(e);
	 	if (main.isFull) {
	 		smallTheMain();
	 	}else{
	 		fullTheMain();
	 	}
	 	
	 });
	 key('x',function(){

	 	if (app.iframeShow) {
	 		closeIframe();
	 	};
	 })
	 key('b',function(){
	 	baiduTheText(getSelectionHtml())
	 })
	 //end
	 function baiduTheText(word){
	 	var link = "http://www.baidu.com?isidx=1#wd="+word;
	 	// showIframeWithLink(link);
	 	window.open(link);;
	 }
	 function closeIframe(){
	 	app.iframeShow = false;
	 	$("#tanchuFather").hide();
	 	$("#if1").attr("src","_blank");
	 	$(".main").show();
	 }
	 function showIframeWithLink(link){
	 	app.iframeShow = true;
	 	$("#tanchuFather").show();
	 	$("#if1").attr("src",link);
	 	$(".main").hide();
	 }
	 /*good ,但是下面的更好*/
	 // function getSelectText(){
	 // 	var range = window.getSelection().getRangeAt(0);
	 // 	content = range.cloneContents();
	 // 	console.log(content);
	 // }
	 //end
	 function getSelectionHtml() {
	 	var html = "";
	 	if (typeof window.getSelection != "undefined") {
	 		var sel = window.getSelection();
	 		if (sel.rangeCount) {
	 			var container = document.createElement("div");
	 			for (var i = 0, len = sel.rangeCount; i < len; ++i) {
	 				container.appendChild(sel.getRangeAt(i).cloneContents());
	 			}
	 			html = container.innerHTML;
	 		}
	 	} else if (typeof document.selection != "undefined") {
	 		if (document.selection.type == "Text") {
	 			html = document.selection.createRange().htmlText;
	 		}
	 	}
	 	return html;
	 }
	 $(".ziyuan_a").click(function(){
	 	showIframeWithLink($(this).attr("goto"));
	 })
	})