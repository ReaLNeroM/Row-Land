setTimeout(init, 100);

var i = 0;
function init(){
	var audio = new Audio('Keep Rollin.mp3');

	audio.autoplay = true;
	audio.loop = true;

	setInterval(main, 1);
}

function main(){
	i = (i + 1) % 360;

	document.getElementById("roller").style = "transform: rotate(" + i % 360 + "deg)";
}
