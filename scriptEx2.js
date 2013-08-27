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
	jg23.drawLine(65, 10, 110, 48); // co-ordinates related to "myCanvas"
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
	jg33.drawLine(73, 10, 110, 48); // co-ordinates related to "myCanvas"
	jg33.paint();
	
	var c34 = document.getElementById("34");
	var jg34 = new jsGraphics(c34);
	jg34.drawLine(105, -50, 105, 48); // co-ordinates related to "myCanvas"
	jg34.paint();
	
	var cnv41 = document.getElementById("sefu4");
	var jg41 = new jsGraphics(cnv41);
	jg41.drawLine(5, 30, 65, 70);
	jg41.paint();
	
	var cnv42 = document.getElementById("sefu4");
	var jg42 = new jsGraphics(cnv42);
	jg42.drawLine(65, 30, 65, 70);
	jg42.paint();
	
	var cnv43 = document.getElementById("sefu4");
	var jg43 = new jsGraphics(cnv43);
	jg42.drawLine(80, 80, 120, 110);
	jg42.paint();
	
	var cnv44 = document.getElementById("sefu4");
	var jg44 = new jsGraphics(cnv44);
	jg44.drawLine(120, 30, 120, 110);
	jg44.paint();
	
	var cnv45 = document.getElementById("sefu4");
	var jg45 = new jsGraphics(cnv45);
	jg45.drawLine(140, 125, 175, 150);
	jg45.paint();
	
	var cnv46 = document.getElementById("sefu4");
	var jg46 = new jsGraphics(cnv46);
	jg46.drawLine(175, 30, 175, 150);
	jg46.paint();
	
	var cnv47 = document.getElementById("sefu4");
	var jg47 = new jsGraphics(cnv47);
	jg47.drawLine(196, 160, 235, 190);
	jg47.paint();
	
	var cnv48 = document.getElementById("sefu4");
	var jg48 = new jsGraphics(cnv48);
	jg48.drawLine(235, 30, 235, 190);
	jg48.paint();
	
	var cnv49 = document.getElementById("sefu4");
	var jg49 = new jsGraphics(cnv49);
	jg49.drawLine(256, 200, 290, 225);
	jg49.paint();
	
	var cnv50 = document.getElementById("sefu4");
	var jg50 = new jsGraphics(cnv50);
	jg50.drawLine(290, 30, 290, 225);
	jg50.paint();
	
	var cnv51 = document.getElementById("sefu4");
	var jg51 = new jsGraphics(cnv51);
	jg51.drawLine(312, 240, 350, 265);
	jg51.paint();
	
	var cnv52 = document.getElementById("sefu4");
	var jg52 = new jsGraphics(cnv52);
	jg52.drawLine(350, 30, 350, 265);
	jg52.paint();
	
	var cnv53 = document.getElementById("sefu4");
	var jg53 = new jsGraphics(cnv53);
	jg53.drawLine(372, 278, 400, 295);
	jg53.paint();
	
	var cnv53p = document.getElementById("sefu4");
	var jg53p = new jsGraphics(cnv53p);
	jg53p.drawLine(410, 300, 415, 303);
	jg53p.paint();
	
	var cnv53pp = document.getElementById("sefu4");
	var jg53pp = new jsGraphics(cnv53p);
	jg53pp.drawLine(420, 307, 425, 309);
	jg53pp.paint();
	
	var cnv54p = document.getElementById("sefu4");
	var jg54p = new jsGraphics(cnv54p);
	jg54p.drawLine(430, 311, 455, 324);
	jg54p.paint();
	
	var cnv54 = document.getElementById("sefu4");
	var jg54 = new jsGraphics(cnv54);
	jg54.drawLine(455, 30, 455, 324);
	jg54.paint();

	var c35 = document.getElementById("35");
	var jg35 = new jsGraphics(c35);
	jg35.drawLine(160, 103, 120, 58); // co-ordinates related to "myCanvas"
	jg35.paint();
	
	var c36 = document.getElementById("36");
	var jg36 = new jsGraphics(c36);
	jg36.drawLine(157, 103, 157, -45); // co-ordinates related to "myCanvas"
	jg36.paint();
	//$("#sefu3").hide();
	
	//Validari
	var i1;
	if(isNaN(i1)){
	$(".boxClass1").keyup(function() {
	i1 = $(".boxClass1").val();
	i1 = parseInt(i1,10);
	
	if(!(isNaN(i1)))
	{
	if (i1 == 3)
		{
		$("#span1").show("slow");
		$("#sefu3").show("slow");
		}
	else
		{
		$("#span1").hide
		$("#sefu3").hide();
		}
	}
	}).keydown();
	}
	
	var i2;
	if(isNaN(i2)){
	$(".boxClass2").keyup(function() {
	i2 = $(".boxClass2").val();
	i2 = parseInt(i2,10);
	
	if(!(isNaN(i2)))
	{
	if (i2 == 4)
		{
		$("#span2").show("slow");
		$("#sefu4").show("slow");
		}
	else{
		$("#span2").hide();
		$("#sefu4").hide();
		}
	}
	}).keydown();
	}
	$("#span2").hide();
	$("#span1").hide();
	$("#sefu4").hide();
	$("#sefu3").hide();
	//autotab
	$('#boxC1').autotab({ target: 'boxC2', format: 'numeric' });
	$('#boxC2').autotab({ target: 'blueBox4', format: 'numeric',previous:'boxC1' });
	$('#blueBox4').autotab({ target: 'lastInput', format: 'numeric',previous:'boxC2' });
	$('#lastInput').autotab({ previous:'bluebox', format: 'numeric' });
	
});
