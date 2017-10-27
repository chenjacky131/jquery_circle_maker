/*
 *  参数说明 
 *  targetId:画布id(String)
 *  strokeStyle:圆边框颜色(String)
 *  strokeWidth:圆边框大小(Number)
 *  circleWidth:圆的大小(Number)
 *  circleTiem:画圆的时间(Number毫秒)
 *  by jacky
 *  chenjacky131@gmail.com
 * */
$.fn.MakeCircle = function(options){
		var defaults = {
			strokeStyle:"#000",
			strokeWidth:1,
			circleWidth:100,
			circleTime:100
		}
		var settings = $.extend(defaults,options);
		var canvas = document.createElement("canvas");
		canvas.width=settings.circleWidth;
		canvas.height=settings.circleWidth;
		this.append(canvas);
		var canvas2d = canvas.getContext("2d");
		var deg = 0;
		var Point = function(pointdeg){
				var r = pointdeg*Math.PI/180;  
				canvas2d.clearRect(0,0,settings.circleWidth,settings.circleWidth);   //先清理
				canvas2d.beginPath();  //路径开始
				canvas2d.strokeStyle =settings.strokeStyle; //canvas边框颜色
				canvas2d.lineWidth = settings.strokeWidth; //线宽
				canvas2d.arc(settings.circleWidth/2,settings.circleWidth/2,settings.circleWidth/2-settings.strokeWidth/2,-90*Math.PI/180,-Math.PI/180*90+r,false);
				canvas2d.stroke();
		};
		var timer = setInterval(function(){
			Point(deg);
			deg+=5;
			if(deg>360){
				clearInterval(timer);
			}
		},settings.circleTime/72);	
}
