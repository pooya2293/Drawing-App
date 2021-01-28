$(function(){
 //change color input
 $("#paintColor").change(function(){
 	$("#circle").css("background-color",$(this).val());
 });
 //change lineWidth using slider
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
            ctx.lineWidth = ui.value;
        }
    });

//declare variables
	var paint = false;//paintingerasing or not
	var paint_erase = "paint"//painting or erasing
	//get the canvas and context
	var canvas = document.getElementById("paint")
	var ctx = canvas.getContext("2d");
	//get the canvas container
	var container = $("#container");
	//mouse position
	var mouse = {x:0 , y:0}
//onLoad load saved work from localStronge
if(localStorage.getItem("saveFile") != null){
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
	}
	img.src = localStorage.getItem("saveFile");
};

//set drawing parametrs (lineWidth,lineJoin,lineCap)
ctx.lineWidth = 3;
ctx.lineJoin = "round";
ctx.lineCap = "round";

//click inside container 
container.mousedown(function(e){
	paint = true;
	ctx.beginPath();
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
	ctx.moveTo(mouse.x,mouse.y);

});
//move the mouse while holding mouse key 
container.mousemove(function(e){
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
	if(paint == true){
		if(paint_erase == "paint"){
			// get color input
			ctx.strokeStyle = $("#paintColor").val();
		}else{
			//get white color for erase
			ctx.strokeStyle = "#fff";
		}
		ctx.lineTo(mouse.x, mouse.y)
		ctx.stroke();
	}
});
//mouse up --> we are not paintingEreasing anymore
container.mouseup(function(){
	paint = false;
});
//if we leave the container --> we are not paintingEreasing anymore
container.mouseleave(function(){
	paint = false;
});
//click on the reset button
$("#reset").click(function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	paint_erase = "paint";
	$("#erase").removeClass("eraseON");
});

//click on save button

$("#save").click(function(){
	if(typeof(localStorage) != null){
		localStorage.setItem("saveFile", canvas.toDataURL());
		// show url of saveFile 
		// window.alert(localStorage.getItem("saveFile"));
	}else{
		window.alert("Your browser does not support localStorage ")
	}
});
//click on the erase button
$("#erase").click(function(){
	if(paint_erase == "paint"){
		paint_erase = "erase";
	}else{
		paint_erase = "paint";
	}
	$(this).toggleClass("eraseON");
});

});