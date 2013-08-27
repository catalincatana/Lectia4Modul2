$(document).ready(function() {
	//Check si wrong pentru punctul a); am incercat sa le implementez eu validarea, dar nu mi-a iesit
	$("#patrate").append("<img id='check' src='http://www.clipartguide.com/_small/0808-0710-2914-4641.jpg''>");
	$("#patrate").append("<img id='wrong' src='http://www.clker.com/cliparts/u/B/V/9/F/u/red-wrong-cross-md.png'>");
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
	$("img").hide();
	}
	
//	$("#diva").hide();
//	$("#divb").hide();
//	$("#divc").hide();
//	$("#divd").hide();
	//Funcie ce afiseaza div-urile corespunzatoare butoanelor a, b, c, d
	var clickOnButton = function() {
		$("#btna").click(function() {
			$("#diva").show("fast");
		});
		$("#btnb").click(function() {
			$("#divb").show("fast");
		});
		$("#btnc").click(function() {
			$("#divc").show("fast");
		});
		$("#btnd").click(function() {
			$("#divd").show("fast");
		});
	};
	clickOnButton();
	//functia ce construieste tabelul
	var createTable = function () {
<<<<<<< HEAD
		$("#tbody2").append("<tr>");	//Linia 1
			$("#tbody2").append("<td> 1 </td>");
			$("#tbody2").append("<td> 2 </td>");
			$("#tbody2").append("<td><input id='input13' maxlength='1' size='1'></td>");
			$("#tbody2").append("<td><input id='input14' maxlength='1' size='1'></td>");
			$("#tbody2").append("<td><input id='input15' maxlength='2' size='1'></td>");
			$("#tbody2").append("<td><input id='input16' maxlength='2' size='1'></td>");
			$("#tbody2").append("<td><input id='input17' maxlength='2' size='1'></td>");
			$("#tbody2").append("<td><input id='input18' maxlength='2' size='1'></td>");
		$("#tbody2").append("</tr>");
		$("#tbody2").append("<tr>");	//Linia 2
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input21' maxlength='1' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input22' maxlength='1' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input23' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input24' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input25' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input26' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input27' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td>2<sup><input class='roundInput' id='input28' maxlength='2' size='1'></sup></td>");
		$("#tbody2").append("</tr>");
		$("#tbody2").append("<tr>");	//Linia 3
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input33' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
		$("#tbody2").append("</tr>");
=======
		$("tbody").append("<tr>");	//Linia 1
			$("tbody").append("<td> 1 </td>");
			$("tbody").append("<td> 2 </td>");
			$("tbody").append("<td><input id='input13' maxlength='1' size='1'></td>");
			$("tbody").append("<td><input id='input14' maxlength='1' size='1'></td>");
			$("tbody").append("<td><input id='input15' maxlength='2' size='1'></td>");
			$("tbody").append("<td><input id='input16' maxlength='2' size='1'></td>");
			$("tbody").append("<td><input id='input17' maxlength='2' size='1'></td>");
			$("tbody").append("<td><input id='input18' maxlength='3' size='1'></td>");
		$('#input13').autotab({ target: 'input14', format: 'numeric' });
		$('#input14').autotab({ target: 'input15', format: 'numeric',previous:'input13' });
		$('#input15').autotab({ target: 'input16', format: 'numeric',previous:'input14' });
		$('#input16').autotab({ target: 'input17', format: 'numeric',previous:'input15' });
		$('#input17').autotab({ target: 'input18', format: 'numeric',previous:'input16' });
		$('#input18').autotab({ previous:'input17', format: 'numeric' });
		$("tbody").append("</tr>");
		$("tbody").append("<tr>");	//Linia 2
			$("tbody").append("<td>2<sup><input class='roundInput' id='input21' maxlength='1' size='1'></sup></td>");
			$("tbody").append("<td>2<sup><input class='roundInput' id='input22' maxlength='1' size='1'></sup></td>");
			$("tbody").append("<td>2<sup><input class='roundInput' id='input23' maxlength='2' size='1'></sup></td>");
			$("tbody").append("<td>2<sup><input class='roundInput' id='input24' maxlength='2' size='1'></sup></td>");
			$("tbody").append("<td>2<sup><input class='roundInput' id='input25' maxlength='2' size='1'></sup></td>");
			$("tbody").append("<td>2<sup><input class='roundInput' id='input26' maxlength='2' size='1'></sup></td>");
			$("tbody").append("<td>2<sup><input class='roundInput' id='input27' maxlength='2' size='1'></sup></td>");
			$("tbody").append("<td>2<sup><input class='roundInput' id='input28' maxlength='2' size='1'></sup></td>");
		$('#input21').autotab({ target: 'input22', format: 'numeric' });
		$('#input22').autotab({ target: 'input23', format: 'numeric',previous:'input21' });
		$('#input23').autotab({ target: 'input24', format: 'numeric',previous:'input22' });
		$('#input24').autotab({ target: 'input25', format: 'numeric',previous:'input23' });
		$('#input25').autotab({ target: 'input26', format: 'numeric',previous:'input24' });
		$('#input26').autotab({ target: 'input27', format: 'numeric',previous:'input25' });
		$('#input27').autotab({ target: 'input28', format: 'numeric',previous:'input26' });
		$('#input28').autotab({ previous:'input27', format: 'numeric' });
		
		$("tbody").append("</tr>");
		$("tbody").append("<tr>");	//Linia 3
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td class='greenCell'>2<sup><input class='roundInput' id='input33' maxlength='2' size='1'></sup></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
		$("tbody").append("</tr>");
>>>>>>> a84fffcf0ea5413e730115db1ff2e26674062bfd

		for(var i = 0; i < 2; i++) { 	//Liniile 4 & 5
			$("#tbody2").append("<tr>");
			for(var j = 0; j < 8; j++) {
				$("#tbody2").append("<td></td>");
			}
			$("#tbody2").append("</tr>");
		}
		
<<<<<<< HEAD
		$("#tbody2").append("<tr>");	//Linia 6
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input63' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input67' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td></td>");
		$("#tbody2").append("</tr>");
=======
		$("tbody").append("<tr>");	//Linia 6
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td class='greenCell'>2<sup><input class='roundInput' id='input63' maxlength='2' size='1'></sup></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td></td>");
			$("tbody").append("<td class='greenCell'>2<sup><input class='roundInput' id='input67' maxlength='2' size='1'></sup></td>");
			
			$("tbody").append("<td></td>");
		$("tbody").append("</tr>");
>>>>>>> a84fffcf0ea5413e730115db1ff2e26674062bfd

		$("#tbody2").append("<tr>");	//Linia 7
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input75' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
		$("#tbody2").append("</tr>");
		
		$("#tbody2").append("<tr>");		//Linia 8
			for(var j = 0; j < 7; j++) {
				$("#tbody2").append("<td></td>");
			}
<<<<<<< HEAD
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input88' maxlength='2' size='1'></sup></td>");
		$("#tbody2").append("</tr>");
=======
			$("tbody").append("<td class='greenCell'>2<sup><input class='roundInput' id='input88' maxlength='2' size='1'></sup></td>");
		$("tbody").append("</tr>");
		
		$('#input33').autotab({ target: 'input63', format: 'numeric' });
		$('#input63').autotab({ target: 'input67', format: 'numeric',previous:'input33' });
		$('#input67').autotab({ target: 'input75', format: 'numeric',previous:'input63' });
		$('#input75').autotab({ target: 'input88', format: 'numeric',previous:'input67' });
		$('#input88').autotab({ previous:'input75', format: 'numeric' });
>>>>>>> a84fffcf0ea5413e730115db1ff2e26674062bfd
	};
	
	createTable();
});
