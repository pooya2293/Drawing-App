$(function(){
	//variables
		var mode= 0;//app mode
		var timeCounter = 0;//time counter
		var lapCounter = 0;//lap counter
		var action;//variables for set intervals
		var lapNumber = 0;//number of laps
		//minutes,seconds,centiseconds for items and lap
		var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;
		// i --> lap number in lapBox
		var i = 0; 
	//on app load show start and lap buttons
	hidesshowbuttons("#startButton","#lapButton");

	//click on start button
	$('#startButton').click(function(){
		//mode on 
		mode=1;
		//show stop and lap buttons
		hidesshowbuttons("#stopButton","#lapButton");		
		//start counter
		startAction();

	});
		
	//click on stop button
	$('#stopButton').click(function(){
		//show resume and reset button
		hidesshowbuttons("#resumeButton","#resetButton");
		//stop counter
		clearInterval(action);	
	});
	//click on resume button
	$('#resumeButton').click(function(){
		//show stop and lap button
		hidesshowbuttons("#stopButton","#lapButton");
		//start action
		startAction();
	});
		
	//click on reset button
	$('#resetButton').click(function(){
		//reload the page
		location.reload()
	});
		
	// click on lap button
	$('#lapButton').click(function(){
		// if mode is ON
		if(mode) {
			// stop action
			clearInterval(action);
			// reset lap and print lap details
			lapCounter = 0;
			addLap();
			// start action
			startAction();
			

		}
	});
	//functions
		//show buttons  
		function hidesshowbuttons(x,y){
			$('.control').hide();
			$(x).show();
			$(y).show();
		}
		
		//start counter
		function startAction(){
			action = setInterval(function(){
				timeCounter ++;	
				if(timeCounter == 100*60*100){
					timeCounter = 0;}
				
				lapCounter ++;
				if(lapCounter == 100*60*100){
					lapCounter = 0;}
				
				timeUpdate();
			},10)	
		} 

		//update time change counter to min sec centiSec 
		function timeUpdate(){
			// 1min=60*100centiseconds=6000centiseconds
			timeMinutes = Math.floor(timeCounter/6000);
			// 1sec=100centiseconds
			timeSeconds = Math.floor((timeCounter%6000)/100);
			timeCentiseconds = (timeCounter%6000)%100;
			// link js code To HTML code
			$("#timeMinutes").text(Format(timeMinutes));
			$("#timeSecense").text(Format(timeSeconds));
			$("#timecentiSecense").text(Format(timeCentiseconds));
			// 1min=60*100centiseconds=6000centiseconds
			lapMinutes = Math.floor(lapCounter/6000);
			// 1sec=100centiseconds
			lapSeconds = Math.floor((lapCounter%6000)/100);
			lapCentiseconds = (lapCounter%6000)%100;
			// link js code To HTML code
			$("#lapMinutes").text(Format(lapMinutes));
			$("#lapSecense").text(Format(lapSeconds));
			$("#lapcentiSecense").text(Format(lapCentiseconds));
		} 

		//format of number 1 to 01
		function Format(number){
			if(number<10){
				return "0"+number;
			}else{
				return number;
			}
		}

		// addLap function:print Lap detail inside lap box
		function addLap(){
			i++;
			var myLapDetail ='<div class="lap">'+
				'<div class="lapTimeTittle">'+
					'Lap'+ i +
				'</div>'+
				'<div class="lapTime">' +
					'<span>' +
						Format(lapMinutes) +
					'</span>' +
					':<span>' +
						Format(lapSeconds) +
					'</span>' +
					':<span>' +
						Format(lapCentiseconds) +
					'</span>' +
				'</div>' +
			'</div>';
			$(myLapDetail).prependTo('#laps');		
		}

});