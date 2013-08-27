$(document).ready(function() {
	var cnv = document.getElementById("myCanvas");
	var jg = new jsGraphics(cnv);
	jg.drawLine(5, -20, 30, 20); // co-ordinates related to "myCanvas"
	jg.paint();
});