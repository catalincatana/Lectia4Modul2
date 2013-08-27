$(document).ready(function() {
	//Check si wrong pentru punctul a); am incercat sa le implementez eu validarea, dar nu mi-a iesit
	$("#diva").append("<img id='check' src='http://www.clipartguide.com/_small/0808-0710-2914-4641.jpg''>");
	$("#diva").append("<img id='wrong' src='http://www.clker.com/cliparts/u/B/V/9/F/u/red-wrong-cross-md.png'>");
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
			$("#linia1").css("background-color", "#FFFF00;");
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
		$("#tbody2").append("<tr id='linia1'>");	//Linia 1
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
			console.log(i13);
			if(i13 == 4 && i14 == 8) {
				$("#check1 > img").show();
				console.log('Este corect');
			} else if(!(isNaN(i13)||isNaN(i13))) {
				$("#check1 > img").hide();
				$("#wrong1 > img" ).show("slow");
				$("#wrong1 > img").hide("slow");
				console.log('Gresit');
			}
		}).keydown();
		$("#input14").keyup(function() {
			i14 = $("#input14").val();
			i14 = parseInt(i14, 10);
			console.log(i14);
			if(i13 == 4 && i14 == 8) {
				$("#check1 > img").show();
				console.log('Este corect');
			} else if(!(isNaN(i13)||isNaN(i13))) {
				$("#check1 > img").hide();
				$("#wrong1 > img" ).show("slow");
				$("#wrong1 > img").hide("slow");
				console.log('Gresit');
			}
		}).keydown();
		
		$("img").hide();
	}
});
