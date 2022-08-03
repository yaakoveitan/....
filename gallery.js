
var images = new Array("hawaii1.jpg", "hawaii2.jpg", "hawaii3.jpg", "hawaii4.jpg", "hawaii5.jpg")
var counter = 0;
setInterval(expand, 500);

function expand(){

		document.getElementById("bigImage").src = images[counter]
		counter++;
		if(counter === 5){
			counter = 0;
		}
	
	return 0;
}