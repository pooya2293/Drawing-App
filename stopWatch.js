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

    //this code for learning canvas
    // make canvas paintable
    var canvas = document.getElementById("paint");
    var context = canvas.getContext('2d');

    // draw a line
    // declare new path
    context.beginPath();
    // set line width
    context.lineWidth = 30;
    // set line color
    context.strokeStyle = "#20b862";
    // set cap to the line (round,butt,square)
    context.lineCap = "round";
    //set line join style (bevel,round,miter)
    context.lineJoin = "round";
    //positicon context point
    context.moveTo(30,50);
    //draw a straight line from staring point to a new position
    context.lineTo(300,200);
    //draw another line
    context.lineTo(400,100);
    // make line visible
    context.stroke();
});