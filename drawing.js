var i = -3;

wait();
function wait(){
	i++;
	if(i == 0){
		init();
	} else {
		setTimeout(wait, 100);
	}
}

function init(){
	var audio = new Audio('Keep Rollin.mp3');
	document.getElementById("roller").style = "width: 50%; transform: rotate(" + i + "deg)";

	audio.autoplay = true;
	audio.loop = true;

	main();
}

function main(){
	i++;
	if(i == 360){
		i = 0;
	}

	document.getElementById("roller").style = "width: 50%; transform: rotate(" + i + "deg)";

	setTimeout(main, 1);
}
