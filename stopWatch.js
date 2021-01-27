$(function(){

 //change lineWidth using slider
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
            // ctx.lineWidth = ui.value;
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


//set drawing parametrs (lineWidth,lineJoin,lineCap)
ctx.lineWidth = 3;
ctx.lineJoin = "round";
ctx.lineCap = "round";

//click inside container 
container.mousedown(function(){
	paint = true;
	window.alert(paint)//its for check
})
//move the mouse while holding mouse key 
//mouse up --> we are not paintingEreasing anymore
//if we leave the container --> we are not paintingEreasing anymore
//click on the reset button
//click on save button


});