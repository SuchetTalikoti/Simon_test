var buttonColours = ["red", "blue", "green", "yellow"];
var userClicks = [];
var gamePattern = [];
var level = 0 ;
var strt = false;
var i =0 ;
function sound_animation(string1){
	var string=  "sounds/"+string1 + ".mp3";
	var audio = new Audio(string);
	audio.play();
	/*var cls = "." +string.slice(6,) ; */
	$("."+string1).fadeOut(200).fadeIn(200);
	console.log(event.target.id)

}

$(".btn").click(function(event){
	if(strt == true){
	userClicks.push(event.target.id);
	if(userClicks[i] == gamePattern[i++]){
		if( i == gamePattern.length){
			i=0;
			userClicks = [];
			nextSequence();
		}
	}else{
		
		strt = false;
		userClicks = [];
		$("h1").text("Game Over");
		$("body").addClass("game-over");
		setTimeout(function(){
			$("body").removeClass("game-over");
		},400),
	
    setTimeout( function() {$("h1").html("Press A Key to Start")},500);
  

	}
	//i++;
	sound_animation(event.target.id);
	}
});

$(document).keypress(function(event){
	////alert(event.key);
	if(strt == false){
	nextSequence();
	strt = true;
	}

});
function nextSequence(){
	i=0;
	$("h1").text("Level "+ level);
	level++;
	var number = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[number];
	/*$("." +randomChosenColour).click();*/
	/*var string=  "sounds/"+randomChosenColour + ".mp3";*/
	
	setTimeout(function () {
    sound_animation(randomChosenColour);
  }, 300);
	gamePattern.push(randomChosenColour);
	console.log(gamePattern);
}