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
			} else if(!isNaN(noPatrate)) {
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
			if(i18 == 128 ){
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
				$("#wrong1 > img").show("slow");
				$("#wrong1 > img").hide("slow");
			}
			}
		}).keydown();
		
		$("img").hide();
	}
});
