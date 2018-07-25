var i = 0;

function init(){
	document.getElementById("start-text").style = "display: none;"
	document.getElementById("roller").style = "transform: rotate(" + i + "deg)";

	var audio = new Audio('Keep Rollin.mp3');
	audio.play();
	audio.loop = true;

	main();
}

document.onclick = init;

function main(){
	i = (i + 2) % 360;

	document.getElementById("roller").style = "transform: rotate(" + i + "deg)";

	setTimeout(main, 10);
}
