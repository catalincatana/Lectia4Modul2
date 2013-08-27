$(document).ready(function() {
	var cnv = document.getElementById("myCanvas");
	var jg = new jsGraphics(cnv);
	jg.drawLine(5, -20, 30, 20); // co-ordinates related to "myCanvas"
	jg.paint();
	
	var cnv41 = document.getElementById("4");
	var jg41 = new jsGraphics(cnv41);
	jg41.drawLine(5, 30, 30, 70);
	jg41.paint();
	
	var cnv42 = document.getElementById("4");
	var jg42 = new jsGraphics(cnv42);
	jg42.drawLine(30, 30, 30, 70);
	jg42.paint();
	
});