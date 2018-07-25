var i = 0;

function init(){
	var audio = new Audio('Keep Rollin.mp3');
	document.getElementById("roller").style = "transform: rotate(" + i + "deg)";

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
