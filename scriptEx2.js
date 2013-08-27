$(document).ready(function() {
	var c11 = document.getElementById("11");
	var jg11 = new jsGraphics(c11);
	jg11.drawLine(5, -20, 60, 20); // co-ordinates related to "myCanvas"
	jg11.paint();
	
	var c12 = document.getElementById("12");
	var jg12 = new jsGraphics(c12);
	jg12.drawLine(57, -20, 57, 20); // co-ordinates related to "myCanvas"
	jg12.paint();
//-------------------------
	var c21 = document.getElementById("21");
	var jg21 = new jsGraphics(c21);
	jg21.drawLine(5, -50, 55, -8); // co-ordinates related to "myCanvas"
	jg21.paint();

	var c22 = document.getElementById("22");
	var jg22 = new jsGraphics(c22);
	jg22.drawLine(52, -50, 52, -8); // co-ordinates related to "myCanvas"
	jg22.paint();
	
	var c23 = document.getElementById("23");
	var jg23 = new jsGraphics(c23);
	jg23.drawLine(70, 10, 110, 48); // co-ordinates related to "myCanvas"
	jg23.paint();
	
	var c24 = document.getElementById("24");
	var jg24 = new jsGraphics(c24);
	jg24.drawLine(105, -50, 105, 48); // co-ordinates related to "myCanvas"
	jg24.paint();
//-------------------------
	var c31 = document.getElementById("31");
	var jg31 = new jsGraphics(c31);
	jg31.drawLine(5, -50, 55, -8); // co-ordinates related to "myCanvas"
	jg31.paint();

	var c32 = document.getElementById("32");
	var jg32 = new jsGraphics(c32);
	jg32.drawLine(52, -50, 52, -8); // co-ordinates related to "myCanvas"
	jg32.paint();
	
	var c33 = document.getElementById("33");
	var jg33 = new jsGraphics(c33);
	jg33.drawLine(80, 10, 110, 48); // co-ordinates related to "myCanvas"
	jg33.paint();
	
	var c34 = document.getElementById("34");
	var jg34 = new jsGraphics(c34);
	jg34.drawLine(105, -50, 105, 48); // co-ordinates related to "myCanvas"
	jg34.paint();

	var c35 = document.getElementById("35");
	var jg35 = new jsGraphics(c35);
	jg35.drawLine(145, 100, 115, 58); // co-ordinates related to "myCanvas"
	jg35.paint();
	
	var c36 = document.getElementById("36");
	var jg36 = new jsGraphics(c36);
	jg36.drawLine(142, 100, 142, -45); // co-ordinates related to "myCanvas"
	jg36.paint();
	//$("#sefu3").hide();
	var valInput, valInput2;
	if(isNaN(valInput2)) {
		$(".boxClass").keyup(function() {
		valInput2 = $(".boxClass1").val();
		valInput = parseInt(valInput2, 10);
		if(valInput == 3) {
			$("#sefu3").show("slow");
		}
		console.log(valInput);
		}).keydown();
	}
});