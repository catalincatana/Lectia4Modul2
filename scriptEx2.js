$(document).ready(function() {
	var c11 = document.getElementById("11");
	var jg11 = new jsGraphics(c11);
	jg11.drawLine(5, -20, 33, 20); // co-ordinates related to "myCanvas"
	jg11.paint();
	
	var c12 = document.getElementById("12");
	var jg12 = new jsGraphics(c12);
	jg12.drawLine(30, -20, 30, 20); // co-ordinates related to "myCanvas"
	jg12.paint();

	var c21 = document.getElementById("21");
	var jg21 = new jsGraphics(c21);
	jg21.drawLine(5, -50, 30, -8); // co-ordinates related to "myCanvas"
	jg21.paint();

	var c22 = document.getElementById("22");
	var jg22 = new jsGraphics(c22);
	jg22.drawLine(27, -50, 27, -8); // co-ordinates related to "myCanvas"
	jg22.paint();
	
	var c23 = document.getElementById("23");
	var jg23 = new jsGraphics(c23);
	jg23.drawLine(47, 0, 57, 48); // co-ordinates related to "myCanvas"
	jg23.paint();

});