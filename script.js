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
		}).keyup();	
	$("img").hide();
	}
	if(noPatrate == 64) {
		$("#check").show();
	} else if(!isNaN(noPatrate)) {
		$("#wrong").show("slow");
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
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input63' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td></td>");
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input67' maxlength='2' size='1'></sup></td>");
			$("#tbody2").append("<td></td>");
		$("#tbody2").append("</tr>");

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
			$("#tbody2").append("<td class='greenCell'>2<sup><input class='roundInput' id='input88' maxlength='2' size='1'></sup></td>");
		$("#tbody2").append("</tr>");
	};
	
	createTable();
});
