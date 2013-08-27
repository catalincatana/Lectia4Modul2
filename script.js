$(document).ready(function() {
	//Check si wrong pentru punctul a); am incercat sa le implementez eu validarea, dar nu mi-a iesit
	$("#diva").append("<img id='check' src='check.jpg'>");
	$("#diva").append("<img id='wrong' src='wrong.png'>");
	var noPatrate;
	if(isNaN(noPatrate)) {
		$("#noPatrate").keyup(function() {
			noPatrate = $("#noPatrate").val();
			noPatrate = parseInt(noPatrate, 10);
			console.log(noPatrate);
			if(noPatrate == 64) {
				$("#check").show();
				console.log('Este corect');
			}
			else if(noPatrate == 6)
			{
				$("#check").hide();
				$("#wrong").hide();
			}
			else if(!isNaN(noPatrate)) {
				$("#check").hide();
				$("#wrong").show("slow");
				$("#wrong").hide("slow");
				console.log('Gresit');
			}
		}).keydown();	
		//$("img").hide();
	}
	
	$("#diva").hide();
	$("#divb").hide();
	$("#divc").hide();
	$("#divd").hide();
	//Funcie ce afiseaza div-urile corespunzatoare butoanelor a, b, c, d
	var clickOnButton = function() {
		$(".greenCell").hide();
		$("#btna").click(function() {
			$("#diva").show("slow");
			$(".linia1").css('backgroundColor', '#FFFF00');
		});
		$("#btnb").click(function() {
			$("#divb").show("slow");
		});
		$("#btnc").click(function() {
			$("#divc").show("slow");
			$(".greenCell").show("slow");
		});
		$("#btnd").click(function() {
			$("#divd").show("slow");
		});
	};
	
	//functia ce construieste tabelul
	var createTable = function () {
		$("#tbody2").append("<tr class='linia1'>");	//Linia 1
			$("#tbody2").append("<td> 1 </td>");
			$("#tbody2").append("<td> 2 </td>");
			$("#tbody2").append("<td><input id='input13' maxlength='1' size='1'></td>");
			$("#tbody2").append("<td><input id='input14' maxlength='1' size='1'></td>");
			$("#tbody2").append("<td><input id='input15' maxlength='2' size='1'></td>");
			$("#tbody2").append("<td><input id='input16' maxlength='2' size='1'></td>");
			$("#tbody2").append("<td><input id='input17' maxlength='2' size='1'></td>");
			$("#tbody2").append("<td><input id='input18' maxlength='3' size='1'></td>");
			$('#input13').autotab({ target: 'input14', format: 'numeric' });
			$('#input14').autotab({ target: 'input15', format: 'numeric',previous:'input13' });
			$('#input15').autotab({ target: 'input16', format: 'numeric',previous:'input14' });
			$('#input16').autotab({ target: 'input17', format: 'numeric',previous:'input15' });
			$('#input17').autotab({ target: 'input18', format: 'numeric',previous:'input16' });
			$('#input18').autotab({ previous:'input17', format: 'numeric' });
		$("#tbody2").append("</tr>");
	
		$("#tbody2").append("<tr id='linia2'>");	//Linia 2
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input21' maxlength='1' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input22' maxlength='1' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input23' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input24' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input25' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input26' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input27' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input28' maxlength='2' size='1'></sup></td>");
			$('#input21').autotab({ target: 'input22', format: 'numeric' });
			$('#input22').autotab({ target: 'input23', format: 'numeric',previous:'input21' });
			$('#input23').autotab({ target: 'input24', format: 'numeric',previous:'input22' });
			$('#input24').autotab({ target: 'input25', format: 'numeric',previous:'input23' });
			$('#input25').autotab({ target: 'input26', format: 'numeric',previous:'input24' });
			$('#input26').autotab({ target: 'input27', format: 'numeric',previous:'input25' });
			$('#input27').autotab({ target: 'input28', format: 'numeric',previous:'input26' });
			$('#input28').autotab({ previous:'input27', format: 'numeric' });
		$("#tbody2").append("</tr>");
	
		$("#tbody2").append("<tr>");	//Linia 3
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td><div class='greenCell'>2<sup><input class='roundInput' id='input33' maxlength='2' size='1'></sup></div></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
		$("#tbody2").append("</tr>");

		for(var i = 0; i < 2; i++) { 	//Liniile 4 & 5
			$("#tbody2").append("<tr>");
			for(var j = 0; j < 8; j++) {
				$("#tbody2").append("<td></td>");
			}
			$("#tbody2").append("</tr>");
		}
		
		$("#tbody2").append("<tr>");	//Linia 6
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td><div class='greenCell'>2<sup><input class='roundInput' id='input63' maxlength='2' size='1'></sup></div></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td><div class='greenCell'>2<sup><input class='roundInput' id='input67' maxlength='2' size='1'></sup></div></td>");
			$("#tbody2").append("<td></td>");
		$("#tbody2").append("</tr>");

		$("#tbody2").append("<tr>");	//Linia 7
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td><div class='greenCell'>2<sup><input class='roundInput' id='input75' maxlength='2' size='1'></sup></div></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
		$("#tbody2").append("</tr>");
		
		$("#tbody2").append("<tr>");	//Linia 8
			for(var j = 0; j < 7; j++) {
				$("#tbody2").append("<td></td>");
			}
			$("#tbody2").append("<td><div class='greenCell'>2<sup><input class='roundInput' id='input88' maxlength='3' size='1'></sup></div></td>");
		$("#tbody2").append("</tr>");
		
		$('#input33').autotab({ target: 'input63', format: 'numeric' });
		$('#input63').autotab({ target: 'input67', format: 'numeric',previous:'input33' });
		$('#input67').autotab({ target: 'input75', format: 'numeric',previous:'input63' });
		$('#input75').autotab({ target: 'input88', format: 'numeric',previous:'input67' });
		$('#input88').autotab({ previous:'input75', format: 'numeric' });
	};
	
	createTable();
	clickOnButton();
	var i13,i14,i15,i16,i17,i18;
	if(isNaN(i13)||isNaN(i14)||isNaN(i15)||isNaN(i16)||isNaN(i17)||isNaN(i18)) {
		
		$("#input13").keyup(function() {
			i13 = $("#input13").val();
			i13 = parseInt(i13, 10);
			i14 = $("#input14").val();
			i14 = parseInt(i14, 10);
			i15 = $("#input15").val();
			i15 = parseInt(i15, 10);
			i16 = $("#input16").val();
			i16 = parseInt(i16, 10);
			i17 = $("#input17").val();
			i17 = parseInt(i17, 10);
			i18 = $("#input18").val();
			i18 = parseInt(i18, 10);
			console.log(i13);
			console.log(i14);
			if(!(isNaN(i13)))
			{
			console.log(i13);
			if(i13 == 4 ){
				$("#check1 > img").show("slow");
				$("#check1 > img").hide("slow");
				}
			else{
				$("#check1 > img").hide("slow");
				$("#wrong1 > img").show("slow");
				$("#wrong1 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input14").keyup(function() {
			
			i14 = $("#input14").val();
			i14 = parseInt(i14, 10);
			
			if(!(isNaN(i14)))
			{
			console.log(i13);
			if(i14 == 8 ){
				$("#check1 > img").show("slow");
				$("#check1 > img").hide("slow");
				}
			else{
				$("#check1 > img").hide("slow");
				$("#wrong1 > img").show("slow");
				$("#wrong1 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input15").keyup(function() {
			
			i15 = $("#input15").val();
			i15 = parseInt(i15, 10);
			
			if(!(isNaN(i15)))
			{
			if(i15 == 16 ){
				$("#check1 > img").show("slow");
				$("#check1 > img").hide("slow");
				}
			else if(i15 ==1)
				{
				$("#wrong1 > img").hide("slow");
				$("#wrong1 > img").hide("slow");
				}
			else{
				$("#check1 > img").hide("slow");
				$("#wrong1 > img").show("slow");
				$("#wrong1 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input16").keyup(function() {
			
			i16 = $("#input16").val();
			i16 = parseInt(i16, 10);
			
			if(!(isNaN(i16)))
			{
			if(i16 == 32 ){
				$("#check1 > img").show("slow");
				$("#check1 > img").hide("slow");
				}
			else if(i16 ==3)
				{
				$("#wrong1 > img").hide("slow");
				$("#wrong1 > img").hide("slow");
				}
			else{
				$("#check1 > img").hide("slow");
				$("#wrong1 > img").show("slow");
				$("#wrong1 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input17").keyup(function() {
			
			i17 = $("#input17").val();
			i17 = parseInt(i17, 10);
			
			if(!(isNaN(i17)))
			{
			if(i17 == 64 ){
				$("#check1 > img").show("slow");
				$("#check1 > img").hide("slow");
				}
			else if(i17 ==6)
				{
				$("#wrong1 > img").hide("slow");
				$("#wrong1 > img").hide("slow");
				}
			else{
				$("#check1 > img").hide("slow");
				$("#wrong1 > img").show("slow");
				$("#wrong1 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input18").keyup(function() {
			
			i18 = $("#input18").val();
			i18 = parseInt(i18, 10);
			
			if(!(isNaN(i18)))
			{
			if(((i18 == 128 && i17==64)&& (i16==32 && i15 ==16))&&(i14==8 && i13==4))
					
						{
				$("#check1 > img").show("slow");
				//$("#check1 > img").hide("slow");
				}
			else if(i18 == 128)
						{
				$("#check1 > img").show("slow");
				$("#check1 > img").hide("slow");
				}
			else if(i18 ==1)
				{
				$("#wrong1 > img").hide("slow");
				$("#wrong1 > img").hide("slow");
				}
			else if(i18 == 12)
			{
				$("#wrong1 > img").hide("slow");
				$("#wrong1 > img").hide("slow");
			}
			else
			{
			$("#check1 > img").hide("slow");
				$("#wrong1 > img").show("slow");
				$("#wrong1 > img").hide("slow");
			}
			}
		}).keydown();
	}
		// checks pt a doua linie
		var i21,i22,i23,i24,i25,i26,i27,i28;
	if(isNaN(i21)||isNaN(i22)||isNaN(i23)||isNaN(i24)||isNaN(i25)||isNaN(i26)||isNaN(i27)||isNaN(i28)) {
		
		$("#input21").keyup(function() {
			i21 = $("#input21").val();
			i21 = parseInt(i21, 10);
			
			if(!(isNaN(i21)))
			{
			if(i21 == 8 ){
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input22").keyup(function() {
			
			i22 = $("#input22").val();
			i22 = parseInt(i22, 10);
			
			if(!(isNaN(i22)))
			{
			if(i22 == 9 ){
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input23").keyup(function() {
			
			i23 = $("#input23").val();
			i23 = parseInt(i23, 10);
			
			if(!(isNaN(i23)))
			{
			if(i23 == 10 ){
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else if(i23 ==1)
				{
				$("#wrong2 > img").hide("slow");
				$("#wrong2 > img").hide("slow");
				}
			else{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input24").keyup(function() {
			
			i24 = $("#input24").val();
			i24 = parseInt(i24, 10);
			
			if(!(isNaN(i24)))
			{
			if(i24 == 11 ){
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else if(i24 ==1)
				{
				$("#wrong2 > img").hide("slow");
				$("#wrong2 > img").hide("slow");
				}
			else{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input25").keyup(function() {
			
			i25 = $("#input25").val();
			i25 = parseInt(i25, 10);
			
			if(!(isNaN(i25)))
			{
			if(i25 == 12 ){
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else if(i25 ==1)
				{
				$("#wrong2 > img").hide("slow");
				$("#wrong2 > img").hide("slow");
				}
			else{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input26").keyup(function() {
			
			i26 = $("#input26").val();
			i26 = parseInt(i26, 10);
			
			if(!(isNaN(i26)))
			{
			if(i26 == 13 ){
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else if(i26 ==1)
				{
				$("#wrong2 > img").hide("slow");
				$("#wrong2 > img").hide("slow");
				}
			else{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input27").keyup(function() {
			
			i27 = $("#input27").val();
			i27 = parseInt(i27, 10);
			
			if(!(isNaN(i27)))
			{
			if(i27 == 14 ){
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else if(i27 ==1)
				{
				$("#wrong2 > img").hide("slow");
				$("#wrong2 > img").hide("slow");
				}
			else{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input28").keyup(function() {
			
			i28 = $("#input28").val();
			i28 = parseInt(i28, 10);
			
			if(!(isNaN(i28)))
			{
			if((((i28 == 15 && i27==14)&& (i26==13 && i25 ==12))&&(i24==11 && i23==10))&&(i22==9 && i21==8))
					
						{
				$("#check2 > img").show("slow");
				//$("#check1 > img").hide("slow");
				}
			else if(i28 == 15)
						{
				$("#check2 > img").show("slow");
				$("#check2 > img").hide("slow");
				}
			else if(i28 ==1)
				{
				$("#wrong1 > img").hide("slow");
				$("#wrong1 > img").hide("slow");
				}
			else
			{
				$("#check2 > img").hide("slow");
				$("#wrong2 > img").show("slow");
				$("#wrong2 > img").hide("slow");
			}
			}
		}).keydown();
		// checks pt elementele verzi (a 3-a linie)
		// checks pt a doua linie
		var i33,i63,i67,i75,i88;
	if(isNaN(i33)||isNaN(i63)||isNaN(i67)||isNaN(i75)||isNaN(i8)) {
		
		$("#input33").keyup(function() {
			i33 = $("#input33").val();
			i33 = parseInt(i33, 10);
			
			if(!(isNaN(i33)))
			{
			if(i33 == 18 ){
				$("#check3 > img").show("slow");
				$("#check3 > img").hide("slow");
				}
			else if(i33 ==1)
				{
				$("#wrong3 > img").hide("slow");
				$("#wrong3 > img").hide("slow");
				}
			else{
				$("#check3 > img").hide("slow");
				$("#wrong3 > img").show("slow");
				$("#wrong3 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input63").keyup(function() {
			i63 = $("#input63").val();
			i63 = parseInt(i63, 10);
			
			if(!(isNaN(i63)))
			{
			if(i63 == 42 ){
				$("#check3 > img").show("slow");
				$("#check3 > img").hide("slow");
				}
			else if(i63 ==4)
				{
				$("#wrong3 > img").hide("slow");
				$("#wrong3 > img").hide("slow");
				}
			else{
				$("#check3 > img").hide("slow");
				$("#wrong3 > img").show("slow");
				$("#wrong3 > img").hide("slow");
				}
			}
		}).keydown();
		
		$("#input67").keyup(function() {
			i67 = $("#input67").val();
			i67 = parseInt(i67, 10);
			
			if(!(isNaN(i67)))
			{
			if(i67 == 46 ){
				$("#check3 > img").show("slow");
				$("#check3 > img").hide("slow");
				}
			else if(i67 ==4)
				{
				$("#wrong3 > img").hide("slow");
				$("#wrong3 > img").hide("slow");
				}
			else{
				$("#check3 > img").hide("slow");
				$("#wrong3 > img").show("slow");
				$("#wrong3 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input75").keyup(function() {
			i75 = $("#input75").val();
			i75 = parseInt(i75, 10);
			
			if(!(isNaN(i75)))
			{
			if(i75 == 52 ){
				$("#check3 > img").show("slow");
				$("#check3 > img").hide("slow");
				}
			else if(i75 ==5)
				{
				$("#wrong3 > img").hide("slow");
				$("#wrong3 > img").hide("slow");
				}
			else{
				$("#check3 > img").hide("slow");
				$("#wrong3 > img").show("slow");
				$("#wrong3 > img").hide("slow");
				}
			}
		}).keydown();
		$("#input88").keyup(function() {
			
			i88 = $("#input88").val();
			i88 = parseInt(i88, 10);
			
			if(!(isNaN(i88)))
			{
			if(((i88 == 63 && i75==52)&& (i67==46 && i63 ==42))&& i33 == 18)
					
						{
				$("#check3 > img").show("slow");
				//$("#check1 > img").hide("slow");
				}
			else if(i88 == 63)
						{
				$("#check3 > img").show("slow");
				$("#check3 > img").hide("slow");
				}
			else if(i88 ==6)
				{
				$("#wrong3 > img").hide("slow");
				$("#wrong3 > img").hide("slow");
				}
			else
			{
				$("#check3 > img").hide("slow");
				$("#wrong3 > img").show("slow");
				$("#wrong3 > img").hide("slow");
			}
			}
		}).keydown();
		
	}
		$("img").hide();
		$("#dwrong1").click(function() {
			$("#dWrong1").show("slow");
		});
		$("#dwrong2").click(function() {
			$("#dWrong2").show("slow");
		});
		$("#dcheck1").click(function() {
			$("#dCheck").show("slow");
		});
	}
});
