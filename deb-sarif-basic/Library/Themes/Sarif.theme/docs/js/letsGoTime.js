function letsGoTime(){

	var d = new Date();
	var numericalHour = d.getHours();
	var numericalMinute = d.getMinutes();

	var fullHour = new Array();
		fullHour[0] = 'Twelve';
		fullHour[1] = 'One';
		fullHour[2] = 'Two';
		fullHour[3] = 'Three';
		fullHour[4] = 'Four';
		fullHour[5] = 'Five';
		fullHour[6] = 'Six';
		fullHour[7] = 'Seven';
		fullHour[8] = 'Eight';
		fullHour[9] = 'Nine';
		fullHour[10] = 'Ten';
		fullHour[11] = 'Eleven';
		fullHour[12] = 'Twelve';
		fullHour[13] = 'One';
		fullHour[14] = 'Two';
		fullHour[15] = 'Three';
		fullHour[16] = 'Four';
		fullHour[17] = 'Five';
		fullHour[18] = 'Six';
		fullHour[19] = 'Seven';
		fullHour[20] = 'Eight';
		fullHour[21] = 'Nine';
		fullHour[22] = 'Ten';
		fullHour[23] = 'Eleven';

	var fullMinute = new Array();
		fullMinute[0] = "o'clock";
		fullMinute[1] = "o'one";
		fullMinute[2] = "o'two";
		fullMinute[3] = "o'three";
		fullMinute[4] = "o'four";
		fullMinute[5] = "o'five";
		fullMinute[6] = "o'six";
		fullMinute[7] = "o'seven";
		fullMinute[8] = "o'eight";
		fullMinute[9] = "o'nine";
		fullMinute[10] = 'ten';
		fullMinute[11] = 'eleven';
		fullMinute[12] = 'twelve';
		fullMinute[13] = 'thirteen';
		fullMinute[14] = 'fourteen';
		fullMinute[15] = 'fifteen';
		fullMinute[16] = 'sixteen';
		fullMinute[17] = 'seventeen';
		fullMinute[18] = 'eighteen';
		fullMinute[19] = 'nineteen';
		fullMinute[20] = 'twenty';
		fullMinute[21] = 'twenty-one';
		fullMinute[22] = 'twenty-two';
		fullMinute[23] = 'twenty-three';
		fullMinute[24] = 'twenty-four';
		fullMinute[25] = 'twenty-five';
		fullMinute[26] = 'twenty-six';
		fullMinute[27] = 'twenty-seven';
		fullMinute[28] = 'twenty-eight';
		fullMinute[29] = 'twenty-nine';
		fullMinute[30] = 'thirty';
		fullMinute[31] = 'thirty-one';
		fullMinute[32] = 'thirty-two';
		fullMinute[33] = 'thirty-three';
		fullMinute[34] = 'thirty-four';
		fullMinute[35] = 'thirty-five';
		fullMinute[36] = 'thirty-six';
		fullMinute[37] = 'thirty-seven';
		fullMinute[38] = 'thirty-eight';
		fullMinute[39] = 'thirty-nine';
		fullMinute[40] = 'forty';
		fullMinute[41] = 'forty-one';
		fullMinute[42] = 'forty-two';
		fullMinute[43] = 'forty-three';
		fullMinute[44] = 'forty-four';
		fullMinute[45] = 'forty-five';
		fullMinute[46] = 'forty-six';
		fullMinute[47] = 'forty-seven';
		fullMinute[48] = 'forty-eight';
		fullMinute[49] = 'forty-nine';
		fullMinute[50] = 'fifty';
		fullMinute[51] = 'fifty-one';
		fullMinute[52] = 'fifty-two';
		fullMinute[53] = 'fifty-three';
		fullMinute[54] = 'fifty-four';
		fullMinute[55] = 'fifty-five';
		fullMinute[56] = 'fifty-six';
		fullMinute[57] = 'fifty-seven';
		fullMinute[58] = 'fifty-eight';
		fullMinute[59] = 'fifty-nine';

	var fullMonth = new Array();
		fullMonth[0] = 'January';
		fullMonth[1] = 'February';
		fullMonth[2] = 'March';
		fullMonth[3] = 'April';
		fullMonth[4] = 'May';
		fullMonth[5] = 'June';
		fullMonth[6] = 'July';
		fullMonth[7] = 'August';
		fullMonth[8] = 'September';
		fullMonth[9] = 'October';
		fullMonth[10] = 'November';
		fullMonth[11] = 'December';

	var fullDate = new Array();
		fullDate[1] = '1st';
		fullDate[2] = '2nd';
		fullDate[3] = '3rd';
		fullDate[4] = '4th';
		fullDate[5] = '5th';
		fullDate[6] = '6th';
		fullDate[7] = '7th';
		fullDate[8] = '8th';
		fullDate[9] = '9th';
		fullDate[10] = '10th';
		fullDate[11] = '11th';
		fullDate[12] = '12th';
		fullDate[13] = '13th';
		fullDate[14] = '14th';
		fullDate[15] = '15th';
		fullDate[16] = '16th';
		fullDate[17] = '17th';
		fullDate[18] = '18th';
		fullDate[19] = '19th';
		fullDate[20] = '20th';
		fullDate[21] = '21st';
		fullDate[22] = '22nd';
		fullDate[23] = '23rd';
		fullDate[24] = '24th';
		fullDate[25] = '25th';
		fullDate[26] = '26th';
		fullDate[27] = '27th';
		fullDate[28] = '28th';
		fullDate[29] = '29th';
		fullDate[30] = '30th';
		fullDate[31] = '31st';

	// German translation by Benedict Müller
	if (language == 'de'){
		var fullHour = new Array();
			fullHour[0] = 'Zwölf';
			fullHour[1] = 'Ein';
			fullHour[2] = 'Zwei';
			fullHour[3] = 'Drei';
			fullHour[4] = 'Vier';
			fullHour[5] = 'Fünf';
			fullHour[6] = 'Sechs';
			fullHour[7] = 'Sieben';
			fullHour[8] = 'Acht';
			fullHour[9] = 'Neun';
			fullHour[10] = 'Zehn';
			fullHour[11] = 'Elf';
			fullHour[12] = 'Zwölf';
			fullHour[13] = 'Ein';
			fullHour[14] = 'Zwei';
			fullHour[15] = 'Drei';
			fullHour[16] = 'Vier';
			fullHour[17] = 'Fünf';
			fullHour[18] = 'Sechs';
			fullHour[19] = 'Sieben';
			fullHour[20] = 'Acht';
			fullHour[21] = 'Neun';
			fullHour[22] = 'Zehn';
			fullHour[23] = 'Elf';

		var fullMinute = new Array();
			fullMinute[0] = '';
			fullMinute[1] = 'Eins';
			fullMinute[2] = 'Zwei';
			fullMinute[3] = 'Drei';
			fullMinute[4] = 'Vier';
			fullMinute[5] = 'Fünf';
			fullMinute[6] = 'Sechs';
			fullMinute[7] = 'Sieben';
			fullMinute[8] = 'Acht';
			fullMinute[9] = 'Neun';
			fullMinute[10] = 'Zehn';
			fullMinute[11] = 'Elf';
			fullMinute[12] = 'Zwölf';
			fullMinute[13] = 'Dreizehn';
			fullMinute[14] = 'Vierzehn';
			fullMinute[15] = 'Fünfzehn';
			fullMinute[16] = 'Sechzehn';
			fullMinute[17] = 'Siebzehn';
			fullMinute[18] = 'Achtzehn';
			fullMinute[19] = 'Neunzehn';
			fullMinute[20] = 'Zwanzig';
			fullMinute[21] = 'Einundzwanzig';
			fullMinute[22] = 'Zweiundzwanzig';
			fullMinute[23] = 'Dreiundzwanzig';
			fullMinute[24] = 'Vierundzwanzig';
			fullMinute[25] = 'Fünfundzwanzig';
			fullMinute[26] = 'Sechsundzwanzig';
			fullMinute[27] = 'Siebenundzwanzig';
			fullMinute[28] = 'Achtundzwanzig';
			fullMinute[29] = 'Neunundzwanzig';
			fullMinute[30] = 'Dreißig';
			fullMinute[31] = 'Einunddreißig';
			fullMinute[32] = 'Zweiunddreißig';
			fullMinute[33] = 'Dreiunddreißig';
			fullMinute[34] = 'Vierunddreißig';
			fullMinute[35] = 'Fünfunddreißig';
			fullMinute[36] = 'Sechsunddreißig';
			fullMinute[37] = 'Siebenunddreißig';
			fullMinute[38] = 'Achtunddreißig';
			fullMinute[39] = 'Neununddreißig';
			fullMinute[40] = 'Vierzig';
			fullMinute[41] = 'Einundvierzig';
			fullMinute[42] = 'Zweiundvierzig';
			fullMinute[43] = 'Dreiundvierzig';
			fullMinute[44] = 'Vierundvierzig';
			fullMinute[45] = 'Fünfundvierzig';
			fullMinute[46] = 'Sechsundvierzig';
			fullMinute[47] = 'Siebenundvierzig';
			fullMinute[48] = 'Achtundvierzig';
			fullMinute[49] = 'Neunundvierzig';
			fullMinute[50] = 'Fünfzig';
			fullMinute[51] = 'Einundfünfzig';
			fullMinute[52] = 'Zweiundfünfzig';
			fullMinute[53] = 'Dreiundfünfzig';
			fullMinute[54] = 'Vierundfünfzig';
			fullMinute[55] = 'Fünfundfünfzig';
			fullMinute[56] = 'Sechsundfünfzig';
			fullMinute[57] = 'Siebenundfünfzig';
			fullMinute[58] = 'Achtundfünfzig';
			fullMinute[59] = 'Neunundfünfzig';

		var fullMonth = new Array();
			fullMonth[0] = 'Januar';
			fullMonth[1] = 'Februar';
			fullMonth[2] = 'März';
			fullMonth[3] = 'April';
			fullMonth[4] = 'Mai';
			fullMonth[5] = 'Juni';
			fullMonth[6] = 'Juli';
			fullMonth[7] = 'August';
			fullMonth[8] = 'September';
			fullMonth[9] = 'Oktober';
			fullMonth[10] = 'November';
			fullMonth[11] = 'Dezember';

		var fullDate = new Array();
			fullDate[1] = '1.';
			fullDate[2] = '2.';
			fullDate[3] = '3.';
			fullDate[4] = '4.';
			fullDate[5] = '5.';
			fullDate[6] = '6.';
			fullDate[7] = '7.';
			fullDate[8] = '8.';
			fullDate[9] = '9.';
			fullDate[10] = '10.';
			fullDate[11] = '11.';
			fullDate[12] = '12.';
			fullDate[13] = '13.';
			fullDate[14] = '14.';
			fullDate[15] = '15.';
			fullDate[16] = '16.';
			fullDate[17] = '17.';
			fullDate[18] = '18.';
			fullDate[19] = '19.';
			fullDate[20] = '20.';
			fullDate[21] = '21.';
			fullDate[22] = '22.';
			fullDate[23] = '23.';
			fullDate[24] = '24.';
			fullDate[25] = '25.';
			fullDate[26] = '26.';
			fullDate[27] = '27.';
			fullDate[28] = '28.';
			fullDate[29] = '29.';
			fullDate[30] = '30.';
			fullDate[31] = '31.';

		var printGermanTime = document.getElementById('timetext');
		if (printGermanTime != null){
			printGermanTime.innerHTML = '<span id="printhour">hour</span> Uhr <span id="printminute">minute</span>';
		}

		var printGermanDate = document.getElementById('datetext');
		if (printGermanDate != null){
			printGermanDate.innerHTML = "es ist der <span id='printdate'>date</span> <span id='printmonth'>month</span>";
		}

		var printGermanSliderDate = document.getElementById('sliderdate');
		if (printGermanSliderDate != null){
			printGermanSliderDate.innerHTML = '<span id="printbackdate">date</span> <span id="printbackmonth">month</span><br/>';
		}
	}

	// Spanish translation by Dennis Alvarez
	if (language == 'es'){
		var fullHour = new Array();
			fullHour[0] = 'Doce';
			fullHour[1] = 'Una';
			fullHour[2] = 'Dos';
			fullHour[3] = 'Tres';
			fullHour[4] = 'Cuatro';
			fullHour[5] = 'Cinco';
			fullHour[6] = 'Seis';
			fullHour[7] = 'Siete';
			fullHour[8] = 'Ocho';
			fullHour[9] = 'Nueve';
			fullHour[10] = 'Diez';
			fullHour[11] = 'Once';
			fullHour[12] = 'Doce';
			fullHour[13] = 'Una';
			fullHour[14] = 'Dos';
			fullHour[15] = 'Tres';
			fullHour[16] = 'Cuatro';
			fullHour[17] = 'Cinco';
			fullHour[18] = 'Seis';
			fullHour[19] = 'Siete';
			fullHour[20] = 'Ocho';
			fullHour[21] = 'Nueve';
			fullHour[22] = 'Diez';
			fullHour[23] = 'Once';

		var fullMinute = new Array();
			fullMinute[0] = 'en punto';
			fullMinute[1] = 'y uno';
			fullMinute[2] = 'y dos';
			fullMinute[3] = 'y tres';
			fullMinute[4] = 'y cuatro';
			fullMinute[5] = 'y cinco';
			fullMinute[6] = 'y seis';
			fullMinute[7] = 'y siete';
			fullMinute[8] = 'y ocho';
			fullMinute[9] = 'y nueve';
			fullMinute[10] = 'y diez';
			fullMinute[11] = 'y once';
			fullMinute[12] = 'y doce';
			fullMinute[13] = 'y trece';
			fullMinute[14] = 'y catorce';
			fullMinute[15] = 'y quince';
			fullMinute[16] = 'y dieseis';
			fullMinute[17] = 'y diecisiete';
			fullMinute[18] = 'y dieciocho';
			fullMinute[19] = 'y diecinueve';
			fullMinute[20] = 'y veinte';
			fullMinute[21] = 'y veintiuno';
			fullMinute[22] = 'y veintidós';
			fullMinute[23] = 'y veintitrés';
			fullMinute[24] = 'y veinticuatro';
			fullMinute[25] = 'y veinticinco';
			fullMinute[26] = 'y veintiséis';
			fullMinute[27] = 'y veintisiete';
			fullMinute[28] = 'y veintiocho';
			fullMinute[29] = 'y veintinueve';
			fullMinute[30] = 'y treinta';
			fullMinute[31] = 'y treinta y uno';
			fullMinute[32] = 'y treinta y dos';
			fullMinute[33] = 'y treinta y tres';
			fullMinute[34] = 'y treinta y cuatro';
			fullMinute[35] = 'y treinta y cinco';
			fullMinute[36] = 'y treinta y seis';
			fullMinute[37] = 'y treinta y siete';
			fullMinute[38] = 'y treinta y ocho';
			fullMinute[39] = 'y treinta y nueve';
			fullMinute[40] = 'y cuarenta';
			fullMinute[41] = 'y cuarenta y uno';
			fullMinute[42] = 'y cuarenta y dos';
			fullMinute[43] = 'y cuarenta y tres';
			fullMinute[44] = 'y cuarenta y cuatro';
			fullMinute[45] = 'y cuarenta y cinco';
			fullMinute[46] = 'y cuarenta y seis';
			fullMinute[47] = 'y cuarenta y siete';
			fullMinute[48] = 'y cuarenta y ocho';
			fullMinute[49] = 'y cuarenta y nueve';
			fullMinute[50] = 'y cincuenta';
			fullMinute[51] = 'y cincuenta y uno';
			fullMinute[52] = 'y cincuenta y dos';
			fullMinute[53] = 'y cincuenta y tres';
			fullMinute[54] = 'y cincuenta y cuatro';
			fullMinute[55] = 'y cincuenta y cinco';
			fullMinute[56] = 'y cincuenta y seis';
			fullMinute[57] = 'y cincuenta y siete';
			fullMinute[58] = 'y cincuenta y ocho';
			fullMinute[59] = 'y cincuenta y nueve';

		var fullMonth = new Array();
			fullMonth[0] = 'Enero';
			fullMonth[1] = 'Febrero';
			fullMonth[2] = 'Marzo';
			fullMonth[3] = 'Abril';
			fullMonth[4] = 'Mayo';
			fullMonth[5] = 'Junio';
			fullMonth[6] = 'Julio';
			fullMonth[7] = 'Agosto';
			fullMonth[8] = 'Septiembre';
			fullMonth[9] = 'Octubre';
			fullMonth[10] = 'Noviembre';
			fullMonth[11] = 'Diciembre';

		var fullDate = new Array();
			fullDate[1] = '1';
			fullDate[2] = '2';
			fullDate[3] = '3';
			fullDate[4] = '4';
			fullDate[5] = '5';
			fullDate[6] = '6';
			fullDate[7] = '7';
			fullDate[8] = '8';
			fullDate[9] = '9';
			fullDate[10] = '10';
			fullDate[11] = '11';
			fullDate[12] = '12';
			fullDate[13] = '13';
			fullDate[14] = '14';
			fullDate[15] = '15';
			fullDate[16] = '16';
			fullDate[17] = '17';
			fullDate[18] = '18';
			fullDate[19] = '19';
			fullDate[20] = '20';
			fullDate[21] = '21';
			fullDate[22] = '22';
			fullDate[23] = '23';
			fullDate[24] = '24';
			fullDate[25] = '25';
			fullDate[26] = '26';
			fullDate[27] = '27';
			fullDate[28] = '28';
			fullDate[29] = '29';
			fullDate[30] = '30';
			fullDate[31] = '31';

		var printSpanishTime = document.getElementById('timetext');
		if (printSpanishTime != null){
			printSpanishTime.innerHTML = '<span id="printhour">hour</span> <span id="printminute">minute</span>';
		}

		var printSpanishDate = document.getElementById('datetext');
		if (printSpanishDate != null){
			printSpanishDate.innerHTML = "es <span id='printdate'>date</span> de <span id='printmonth'>month</span>";
		}

		var printSpanishSliderDate = document.getElementById('sliderdate');
		if (printSpanishSliderDate != null){
			printSpanishSliderDate.innerHTML = '<span id="printbackdate">date</span> de <span id="printbackmonth">month</span><br/>';
		}
	}

	// French translation by Zooropalg
	if (language == 'fr'){
		var fullHour = new Array();
			fullHour[0] = 'Douze';
			fullHour[1] = 'Une';
			fullHour[2] = 'Deux';
			fullHour[3] = 'Trois';
			fullHour[4] = 'Quatre';
			fullHour[5] = 'Cinq';
			fullHour[6] = 'Six';
			fullHour[7] = 'Sept';
			fullHour[8] = 'Huit';
			fullHour[9] = 'Neuf';
			fullHour[10] = 'Dix';
			fullHour[11] = 'Onze';
			fullHour[12] = 'Douze';
			fullHour[13] = 'Une';
			fullHour[14] = 'Deux';
			fullHour[15] = 'Trois';
			fullHour[16] = 'Quatre';
			fullHour[17] = 'Cinq';
			fullHour[18] = 'Six';
			fullHour[19] = 'Sept';
			fullHour[20] = 'Huit';
			fullHour[21] = 'Neuf';
			fullHour[22] = 'Dix';
			fullHour[23] = 'Onze';

		var fullMinute = new Array();
			fullMinute[0] = '';
			fullMinute[1] = 'une';
			fullMinute[2] = 'deux';
			fullMinute[3] = 'trois';
			fullMinute[4] = 'quatre';
			fullMinute[5] = 'cinq';
			fullMinute[6] = 'six';
			fullMinute[7] = 'sept';
			fullMinute[8] = 'huit';
			fullMinute[9] = 'neuf';
			fullMinute[10] = 'dix';
			fullMinute[11] = 'onze';
			fullMinute[12] = 'douze';
			fullMinute[13] = 'treize';
			fullMinute[14] = 'quatorze';
			fullMinute[15] = 'quinze';
			fullMinute[16] = 'seize';
			fullMinute[17] = 'dix sept';
			fullMinute[18] = 'dix huit';
			fullMinute[19] = 'dix neuf';
			fullMinute[20] = 'vingt';
			fullMinute[21] = 'vingt et un';
			fullMinute[22] = 'vingt deux';
			fullMinute[23] = 'vingt trois';
			fullMinute[24] = 'vingt quatre';
			fullMinute[25] = 'vingt cinq';
			fullMinute[26] = 'vingt six';
			fullMinute[27] = 'vingt sept';
			fullMinute[28] = 'vingt huit';
			fullMinute[29] = 'vingt neuf';
			fullMinute[30] = 'trente';
			fullMinute[31] = 'trente et un';
			fullMinute[32] = 'trente deux';
			fullMinute[33] = 'trente trois';
			fullMinute[34] = 'trente quatre';
			fullMinute[35] = 'trente cinq';
			fullMinute[36] = 'trente six';
			fullMinute[37] = 'trente sept';
			fullMinute[38] = 'trente huit';
			fullMinute[39] = 'trente neuf';
			fullMinute[40] = 'quarante';
			fullMinute[41] = 'quarante et un';
			fullMinute[42] = 'quarante deux';
			fullMinute[43] = 'quarante trois';
			fullMinute[44] = 'quarante quatre';
			fullMinute[45] = 'quarante cinq';
			fullMinute[46] = 'quarante six';
			fullMinute[47] = 'quarante sept';
			fullMinute[48] = 'quarante huit';
			fullMinute[49] = 'quarante neuf';
			fullMinute[50] = 'cinquante';
			fullMinute[51] = 'cinquante et un';
			fullMinute[52] = 'cinquante deux';
			fullMinute[53] = 'cinquante trois';
			fullMinute[54] = 'cinquante quatre';
			fullMinute[55] = 'cinquante cinq';
			fullMinute[56] = 'cinquante six';
			fullMinute[57] = 'cinquante sept';
			fullMinute[58] = 'cinquante huit';
			fullMinute[59] = 'cinquante neuf';

		var fullMonth = new Array();
			fullMonth[0] = 'Janvier';
			fullMonth[1] = 'Février';
			fullMonth[2] = 'Mars';
			fullMonth[3] = 'Avril';
			fullMonth[4] = 'Mai';
			fullMonth[5] = 'Juin';
			fullMonth[6] = 'Juillet';
			fullMonth[7] = 'Août';
			fullMonth[8] = 'Septembre';
			fullMonth[9] = 'Octobre';
			fullMonth[10] = 'Novembre';
			fullMonth[11] = 'Décembre';

		var fullDate = new Array();
			fullDate[1] = '1';
			fullDate[2] = '2';
			fullDate[3] = '3';
			fullDate[4] = '4';
			fullDate[5] = '5';
			fullDate[6] = '6';
			fullDate[7] = '7';
			fullDate[8] = '8';
			fullDate[9] = '9';
			fullDate[10] = '10';
			fullDate[11] = '11';
			fullDate[12] = '12';
			fullDate[13] = '13';
			fullDate[14] = '14';
			fullDate[15] = '15';
			fullDate[16] = '16';
			fullDate[17] = '17';
			fullDate[18] = '18';
			fullDate[19] = '19';
			fullDate[20] = '20';
			fullDate[21] = '21';
			fullDate[22] = '22';
			fullDate[23] = '23';
			fullDate[24] = '24';
			fullDate[25] = '25';
			fullDate[26] = '26';
			fullDate[27] = '27';
			fullDate[28] = '28';
			fullDate[29] = '29';
			fullDate[30] = '30';
			fullDate[31] = '31';

		var printFrenchTime = document.getElementById('timetext');
		if (printFrenchTime != null){
			if (timeShort == 'yes'){
				if (numericalMinute == 0){
					printFrenchTime.innerHTML = '<span id="printhour">hour</span> <span id="printminute">minute</span>';
				}
				else{
					printFrenchTime.innerHTML = '<span id="printhour">hour</span> heures <span id="printminute">minute</span>';
				}
			}
			else{
				if (numericalMinute == 0){
					printFrenchTime.innerHTML = 'il est <span id="printhour">hour</span> <span id="printminute">minute</span>';
				}
				else{
					printFrenchTime.innerHTML = 'il est <span id="printhour">hour</span> heures <span id="printminute">minute</span>';
				}
			}
		}

		var printFrenchDate = document.getElementById('datetext');
		if (printFrenchDate != null){
			printFrenchDate.innerHTML = "nous sommes le <span id='printdate'>date</span> <span id='printmonth'>month</span>";
		}

		var printFrenchSliderDate = document.getElementById('sliderdate');
		if (printFrenchSliderDate != null){
			printFrenchSliderDate.innerHTML = '<span id="printbackdate">date</span> <span id="printbackmonth">month</span><br/>';
		}
	}

	// Italian translation by Frep
	if (language == 'it'){
		var fullHour = new Array();
			fullHour[0] = 'mezzanotte';
			fullHour[1] = "l'una";
			fullHour[2] = 'le due';
			fullHour[3] = 'le tre';
			fullHour[4] = 'le quattro';
			fullHour[5] = 'le cinque';
			fullHour[6] = 'le sei';
			fullHour[7] = 'le sette';
			fullHour[8] = 'le otto';
			fullHour[9] = 'le nove';
			fullHour[10] = 'le dieci';
			fullHour[11] = 'le undici';
			fullHour[12] = 'mezzogiorno';
			fullHour[13] = "l'una";
			fullHour[14] = 'le due';
			fullHour[15] = 'le tre';
			fullHour[16] = 'le quattro';
			fullHour[17] = 'le cinque';
			fullHour[18] = 'le sei';
			fullHour[19] = 'le sette';
			fullHour[20] = 'le otto';
			fullHour[21] = 'le nove';
			fullHour[22] = 'le dieci';
			fullHour[23] = 'le undici';

		var fullMinute = new Array();
			fullMinute[0] = '';
			fullMinute[1] = 'uno';
			fullMinute[2] = 'due';
			fullMinute[3] = 'tre';
			fullMinute[4] = 'quattro';
			fullMinute[5] = 'cinque';
			fullMinute[6] = 'sei';
			fullMinute[7] = 'sette';
			fullMinute[8] = 'otto';
			fullMinute[9] = 'nove';
			fullMinute[10] = 'dieci';
			fullMinute[11] = 'undici';
			fullMinute[12] = 'dodici';
			fullMinute[13] = 'tredici';
			fullMinute[14] = 'quattordici';
			fullMinute[15] = 'quindici';
			fullMinute[16] = 'sedici';
			fullMinute[17] = 'diciassette';
			fullMinute[18] = 'diciotto';
			fullMinute[19] = 'diciannove';
			fullMinute[20] = 'venti';
			fullMinute[21] = 'ventuno';
			fullMinute[22] = 'ventidue';
			fullMinute[23] = 'ventitré';
			fullMinute[24] = 'ventiquattro';
			fullMinute[25] = 'venticinque';
			fullMinute[26] = 'ventisei';
			fullMinute[27] = 'ventisette';
			fullMinute[28] = 'ventotto';
			fullMinute[29] = 'ventinove';
			fullMinute[30] = 'trenta';
			fullMinute[31] = 'trentuno';
			fullMinute[32] = 'trentadue';
			fullMinute[33] = 'trentatré';
			fullMinute[34] = 'trentaquattro';
			fullMinute[35] = 'trentacinque';
			fullMinute[36] = 'trentasei';
			fullMinute[37] = 'trentasette';
			fullMinute[38] = 'trentotto';
			fullMinute[39] = 'trentanove';
			fullMinute[40] = 'quaranta';
			fullMinute[41] = 'quarantuno';
			fullMinute[42] = 'quarantadue';
			fullMinute[43] = 'quarantatré';
			fullMinute[44] = 'quarantaquattro';
			fullMinute[45] = 'quarantacinque';
			fullMinute[46] = 'quarantasei';
			fullMinute[47] = 'quarantasette';
			fullMinute[48] = 'quarantotto';
			fullMinute[49] = 'quarantanove';
			fullMinute[50] = 'cinquanta';
			fullMinute[51] = 'cinquantuno';
			fullMinute[52] = 'cinquantadue';
			fullMinute[53] = 'cinquantatré';
			fullMinute[54] = 'cinquantaquattro';
			fullMinute[55] = 'cinquantacinque';
			fullMinute[56] = 'cinquantasei';
			fullMinute[57] = 'cinquantasette';
			fullMinute[58] = 'cinquantotto';
			fullMinute[59] = 'cinquantanove';

		var fullMonth = new Array();
			fullMonth[0] = 'gennaio';
			fullMonth[1] = 'febbraio';
			fullMonth[2] = 'marzo';
			fullMonth[3] = 'aprile';
			fullMonth[4] = 'maggio';
			fullMonth[5] = 'giugno';
			fullMonth[6] = 'luglio';
			fullMonth[7] = 'agosto';
			fullMonth[8] = 'settembre';
			fullMonth[9] = 'ottobre';
			fullMonth[10] = 'novembre';
			fullMonth[11] = 'dicembre';

		var fullDate = new Array();
			fullDate[1] = '1';
			fullDate[2] = '2';
			fullDate[3] = '3';
			fullDate[4] = '4';
			fullDate[5] = '5';
			fullDate[6] = '6';
			fullDate[7] = '7';
			fullDate[8] = '8';
			fullDate[9] = '9';
			fullDate[10] = '10';
			fullDate[11] = '11';
			fullDate[12] = '12';
			fullDate[13] = '13';
			fullDate[14] = '14';
			fullDate[15] = '15';
			fullDate[16] = '16';
			fullDate[17] = '17';
			fullDate[18] = '18';
			fullDate[19] = '19';
			fullDate[20] = '20';
			fullDate[21] = '21';
			fullDate[22] = '22';
			fullDate[23] = '23';
			fullDate[24] = '24';
			fullDate[25] = '25';
			fullDate[26] = '26';
			fullDate[27] = '27';
			fullDate[28] = '28';
			fullDate[29] = '29';
			fullDate[30] = '30';
			fullDate[31] = '31';

		var printItalianTime = document.getElementById('timetext');
		if (printItalianTime != null){
			if (timeShort == 'yes'){
				if (numericalMinute == 0){
					printItalianTime.innerHTML = '<span id="printhour">hour</span> <span id="printminute">minute</span>';
				}
				else{
					printItalianTime.innerHTML = '<span id="printhour">hour</span> e <span id="printminute">minute</span>';
				}
			}
			else{
				if (numericalMinute == 0){
					printItalianTime.innerHTML = 'Sono <span id="printhour">hour</span> <span id="printminute">minute</span>';
				}
				else{
					printItalianTime.innerHTML = 'Sono <span id="printhour">hour</span> e <span id="printminute">minute</span>';
				}
			}
		}

		var printItalianDate = document.getElementById('datetext');
		if (printItalianDate != null){
			printItalianDate.innerHTML = "ed è il <span id='printdate'>date</span> <span id='printmonth'>month</span>";
		}

		var printItalianSliderDate = document.getElementById('sliderdate');
		if (printItalianSliderDate != null){
			printItalianSliderDate.innerHTML = '<span id="printbackdate">date</span> <span id="printbackmonth">month</span><br/>';
		}
	}

	// Dutch translation by Nienke Boomsma
	if (language == 'nl'){
		var fullHour = new Array();
			fullHour[0] = 'Twaalf';
			fullHour[1] = 'Een';
			fullHour[2] = 'Twee';
			fullHour[3] = 'Drie';
			fullHour[4] = 'Vier';
			fullHour[5] = 'Vijf';
			fullHour[6] = 'Zes';
			fullHour[7] = 'Zeven';
			fullHour[8] = 'Acht';
			fullHour[9] = 'Negen';
			fullHour[10] = 'Tien';
			fullHour[11] = 'Elf';
			fullHour[12] = 'Twaalf';
			fullHour[13] = 'Een';
			fullHour[14] = 'Twee';
			fullHour[15] = 'Drie';
			fullHour[16] = 'Vier';
			fullHour[17] = 'Vijf';
			fullHour[18] = 'Zes';
			fullHour[19] = 'Zeven';
			fullHour[20] = 'Acht';
			fullHour[21] = 'Negen';
			fullHour[22] = 'Tien';
			fullHour[23] = 'Elf';
			fullHour[24] = 'Twaalf';

		var fullMinute = new Array();
			fullMinute[0] = 'uur';
			fullMinute[1] = 'één over';
			fullMinute[2] = 'twee over';
			fullMinute[3] = 'drie over';
			fullMinute[4] = 'vier over';
			fullMinute[5] = 'vijf over';
			fullMinute[6] = 'zes over';
			fullMinute[7] = 'zeven over';
			fullMinute[8] = 'acht over';
			fullMinute[9] = 'negen over';
			fullMinute[10] = 'tien over';
			fullMinute[11] = 'elf over';
			fullMinute[12] = 'twaalf over';
			fullMinute[13] = 'dertien over';
			fullMinute[14] = 'veertien over';
			fullMinute[15] = 'kwart over';
			fullMinute[16] = 'veertien vóór half';
			fullMinute[17] = 'dertien vóór half';
			fullMinute[18] = 'twaalf  vóór half';
			fullMinute[19] = 'elf vóór half';
			fullMinute[20] = 'tien vóór half';
			fullMinute[21] = 'negen vóór half';
			fullMinute[22] = 'acht vóór half';
			fullMinute[23] = 'zeven vóór half';
			fullMinute[24] = 'zes vóór half';
			fullMinute[25] = 'vijf vóór half';
			fullMinute[26] = 'vier vóór half';
			fullMinute[27] = 'drie vóór half';
			fullMinute[28] = 'twee vóór half';
			fullMinute[29] = 'één vóór half';
			fullMinute[30] = 'half';
			fullMinute[31] = 'één over half';
			fullMinute[32] = 'twee over half';
			fullMinute[33] = 'drie over half';
			fullMinute[34] = 'vier over half';
			fullMinute[35] = 'vijf over half';
			fullMinute[36] = 'zes over half';
			fullMinute[37] = 'zeven over half';
			fullMinute[38] = 'acht over half';
			fullMinute[39] = 'negen over half';
			fullMinute[40] = 'tien over half';
			fullMinute[41] = 'elf over half';
			fullMinute[42] = 'twaalf over half';
			fullMinute[43] = 'dertien over half';
			fullMinute[44] = 'veertien over half';
			fullMinute[45] = 'kwart vóór';
			fullMinute[46] = 'veertien vóór';
			fullMinute[47] = 'dertien vóór';
			fullMinute[48] = 'twaalf vóór';
			fullMinute[49] = 'elf vóór';
			fullMinute[50] = 'tien vóór';
			fullMinute[51] = 'negen vóór';
			fullMinute[52] = 'acht vóór';
			fullMinute[53] = 'zeven vóór';
			fullMinute[54] = 'zes vóór';
			fullMinute[55] = 'vijf vóór';
			fullMinute[56] = 'vier vóór';
			fullMinute[57] = 'drie vóór';
			fullMinute[58] = 'twee vóór';
			fullMinute[59] = 'één vóór';

		var fullMonth = new Array();
			fullMonth[0] = 'januari';
			fullMonth[1] = 'februari';
			fullMonth[2] = 'maart';
			fullMonth[3] = 'april';
			fullMonth[4] = 'mei';
			fullMonth[5] = 'juni';
			fullMonth[6] = 'juli';
			fullMonth[7] = 'augustus';
			fullMonth[8] = 'september';
			fullMonth[9] = 'oktober';
			fullMonth[10] = 'november';
			fullMonth[11] = 'december';

		var fullDate = new Array();
			fullDate[1] = '1';
			fullDate[2] = '2';
			fullDate[3] = '3';
			fullDate[4] = '4';
			fullDate[5] = '5';
			fullDate[6] = '6';
			fullDate[7] = '7';
			fullDate[8] = '8';
			fullDate[9] = '9';
			fullDate[10] = '10';
			fullDate[11] = '11';
			fullDate[12] = '12';
			fullDate[13] = '13';
			fullDate[14] = '14';
			fullDate[15] = '15';
			fullDate[16] = '16';
			fullDate[17] = '17';
			fullDate[18] = '18';
			fullDate[19] = '19';
			fullDate[20] = '20';
			fullDate[21] = '21';
			fullDate[22] = '22';
			fullDate[23] = '23';
			fullDate[24] = '24';
			fullDate[25] = '25';
			fullDate[26] = '26';
			fullDate[27] = '27';
			fullDate[28] = '28';
			fullDate[29] = '29';
			fullDate[30] = '30';
			fullDate[31] = '31';
			
		var printDutchTime = document.getElementById('timetext');
		if (printDutchTime != null){
			if (timeShort == 'yes'){
				if (numericalMinute == 0){
					printDutchTime.innerHTML = '<span id="printhour">hour</span> <span id="printminute">minute</span>';
				}
				else{
					printDutchTime.innerHTML = '<span id="printminute">minute</span> <span id="printhour">hour</span>';
				}
			}
			else{
				if (numericalMinute == 0){
					printDutchTime.innerHTML = 'Het is <span id="printhour">hour</span> <span id="printminute">minute</span>';
				}
				else{
					printDutchTime.innerHTML = 'Het is <span id="printminute">minute</span> <span id="printhour">hour</span>';
				}
			}
		}

		var printDutchDate = document.getElementById('datetext');
		if (printDutchDate != null){
			printDutchDate.innerHTML = 'het is <span id="printdate">date</span> <span id="printmonth">month</span>';
		}

		var printDutchSliderDate = document.getElementById('sliderdate');
		if (printDutchSliderDate != null){
			printDutchSliderDate.innerHTML = '<span id="printbackdate">date</span> <span id="printbackmonth">month</span><br/>';
		}
	}

	// Russian translation by Victor Ryabov
	if (language == 'ru'){
		var fullHour = new Array();
			fullHour[0] = '0 часов';
			fullHour[1] = '1 час';
			fullHour[2] = '2 часа';
			fullHour[3] = '3 часа';
			fullHour[4] = '4 часа';
			fullHour[5] = '5 часов';
			fullHour[6] = '6 часов';
			fullHour[7] = '7 часов';
			fullHour[8] = '8 часов';
			fullHour[9] = '9 часов';
			fullHour[10] = '10 часов';
			fullHour[11] = '11 часов';
			fullHour[12] = '12 часов';
			fullHour[13] = '13 часов';
			fullHour[14] = '14 часов';
			fullHour[15] = '15 часов';
			fullHour[16] = '16 часов';
			fullHour[17] = '17 часов';
			fullHour[18] = '18 часов';
			fullHour[19] = '19 часов';
			fullHour[20] = '20 часов';
			fullHour[21] = '21 час';
			fullHour[22] = '22 часа';
			fullHour[23] = '23 часа';

		var fullMinute = new Array();
			fullMinute[0] = '';
			fullMinute[1] = '1 минута';
			fullMinute[2] = '2 минуты';
			fullMinute[3] = '3 минуты';
			fullMinute[4] = '4 минуты';
			fullMinute[5] = '5 минут';
			fullMinute[6] = '6 минут';
			fullMinute[7] = '7 минут';
			fullMinute[8] = '8 минут';
			fullMinute[9] = '9 минут';
			fullMinute[10] = '10 минут';
			fullMinute[11] = '11 минут';
			fullMinute[12] = '12 минут';
			fullMinute[13] = '13 минут';
			fullMinute[14] = '14 минут';
			fullMinute[15] = '15 минут';
			fullMinute[16] = '16 минут';
			fullMinute[17] = '17 минут';
			fullMinute[18] = '18 минут';
			fullMinute[19] = '19 минут';
			fullMinute[20] = '20 минут';
			fullMinute[21] = '21 минута';
			fullMinute[22] = '22 минуты';
			fullMinute[23] = '23 минуты';
			fullMinute[24] = '24 минуты';
			fullMinute[25] = '25 минут';
			fullMinute[26] = '26 минут';
			fullMinute[27] = '27 минут';
			fullMinute[28] = '28 минут';
			fullMinute[29] = '29 минут';
			fullMinute[30] = '30 минут';
			fullMinute[31] = '31 минута';
			fullMinute[32] = '32 минуты';
			fullMinute[33] = '33 минуты';
			fullMinute[34] = '34 минуты';
			fullMinute[35] = '35 минут';
			fullMinute[36] = '36 минут';
			fullMinute[37] = '37 минут';
			fullMinute[38] = '38 минут';
			fullMinute[39] = '39 минут';
			fullMinute[40] = '40 минут';
			fullMinute[41] = '41 минута';
			fullMinute[42] = '42 минуты';
			fullMinute[43] = '43 минуты';
			fullMinute[44] = '44 минуты';
			fullMinute[45] = '45 минут';
			fullMinute[46] = '46 минут';
			fullMinute[47] = '47 минут';
			fullMinute[48] = '48 минут';
			fullMinute[49] = '49 минут';
			fullMinute[50] = '50 минут';
			fullMinute[51] = '51 минута';
			fullMinute[52] = '52 минуты';
			fullMinute[53] = '53 минуты';
			fullMinute[54] = '54 минуты';
			fullMinute[55] = '55 минут';
			fullMinute[56] = '56 минут';
			fullMinute[57] = '57 минут';
			fullMinute[58] = '58 минут';
			fullMinute[59] = '59 минут';

		var fullMonth = new Array();
			fullMonth[0] = 'января';
			fullMonth[1] = 'февраля';
			fullMonth[2] = 'марта';
			fullMonth[3] = 'апреля';
			fullMonth[4] = 'мая';
			fullMonth[5] = 'июня';
			fullMonth[6] = 'июля';
			fullMonth[7] = 'августа';
			fullMonth[8] = 'сентября';
			fullMonth[9] = 'октября';
			fullMonth[10] = 'ноября';
			fullMonth[11] = 'декабря';

		var fullDate = new Array();
			fullDate[1] = 'первое';
			fullDate[2] = 'второе';
			fullDate[3] = 'третье';
			fullDate[4] = 'четвертое';
			fullDate[5] = 'пятое';
			fullDate[6] = 'шестое';
			fullDate[7] = 'седьмое';
			fullDate[8] = 'восьмое';
			fullDate[9] = 'девятое';
			fullDate[10] = 'десятое';
			fullDate[11] = 'одиннадцатое';
			fullDate[12] = 'двенадцатое';
			fullDate[13] = 'тринадцатое';
			fullDate[14] = 'четырнадцатое';
			fullDate[15] = 'пятнадцатое';
			fullDate[16] = 'шестнадцатое';
			fullDate[17] = 'семнадцатое';
			fullDate[18] = 'восемнадцатое';
			fullDate[19] = 'девятнадцатое';
			fullDate[20] = 'двадцатое';
			fullDate[21] = 'двадцать первое';
			fullDate[22] = 'двадцать второе';
			fullDate[23] = 'двадцать третье';
			fullDate[24] = 'двадцать четвертое';
			fullDate[25] = 'двадцать пятое';
			fullDate[26] = 'двадцать шестое';
			fullDate[27] = 'двадцать седьмое';
			fullDate[28] = 'двадцать восьмое';
			fullDate[29] = 'двадцать девятое';
			fullDate[30] = 'тридцатое';
			fullDate[31] = 'тридцать первое';

		var printRussianTime = document.getElementById('timetext');
		if (printRussianTime != null){
			printRussianTime.innerHTML = '<span id="printhour">hour</span> <span id="printminute">minute</span>';
		}

		var printRussianDate = document.getElementById('datetext');
		if (printRussianDate != null){
			printRussianDate.innerHTML = "<span id='printdate'>date</span> <span id='printmonth'>month</span>";
		}

		var printRussianSliderDate = document.getElementById('sliderdate');
		if (printRussianSliderDate != null){
			printRussianSliderDate.innerHTML = '<span id="printbackdate">date</span> <span id="printbackmonth">month</span><br/>';
		}
	}

	if (numericalHour > 12 && time24hour == 'no'){
		numericalHour = numericalHour - 12;
	}
	if (numericalHour == 0 && time24hour == 'no'){
		numericalHour = 12;
	}

	if (numericalMinute >= 0 && numericalMinute <=9){
		numericalMinute = '0'+numericalMinute;
	}

	var printHour = document.getElementById('printhour');
	if (printHour != null){
		if (language == 'nl' && numericalMinute > 15){
			printHour.innerHTML = fullHour[d.getHours() + 1];
		}
		else {printHour.innerHTML = fullHour[d.getHours()];}
	}

	var printMinute = document.getElementById('printminute');
	if (printMinute != null){
		printMinute.innerHTML = fullMinute[d.getMinutes()];
	}

	var printMonth = document.getElementById('printmonth');
	if (printMonth != null){
		printMonth.innerHTML = fullMonth[d.getMonth()];
	}

	var printDate = document.getElementById('printdate');
	if (printDate != null){
		printDate.innerHTML = fullDate[d.getDate()];
	}

	var printBackMonth = document.getElementById('printbackmonth');
	if (printBackMonth != null){
		printBackMonth.innerHTML = fullMonth[d.getMonth()];
	}

	var printBackDate = document.getElementById('printbackdate');
	if (printBackDate != null){
		printBackDate.innerHTML = fullDate[d.getDate()];
	}

	var printNumericalHour = document.getElementById('printnumericalhour');
	if (printNumericalHour != null){
		printNumericalHour.innerHTML = numericalHour;
	}

	var printNumericalMinute = document.getElementById('printnumericalminute');
	if (printNumericalMinute != null){
		printNumericalMinute.innerHTML = numericalMinute;
	}
}
$(document).ready(letsGoTime);
setInterval('letsGoTime()', 1000);

/*
	if (language == ''){
		var fullHour = new Array();
			fullHour[0] = '';
			fullHour[1] = '';
			fullHour[2] = '';
			fullHour[3] = '';
			fullHour[4] = '';
			fullHour[5] = '';
			fullHour[6] = '';
			fullHour[7] = '';
			fullHour[8] = '';
			fullHour[9] = '';
			fullHour[10] = '';
			fullHour[11] = '';
			fullHour[12] = '';
			fullHour[13] = '';
			fullHour[14] = '';
			fullHour[15] = '';
			fullHour[16] = '';
			fullHour[17] = '';
			fullHour[18] = '';
			fullHour[19] = '';
			fullHour[20] = '';
			fullHour[21] = '';
			fullHour[22] = '';
			fullHour[23] = '';

		var fullMinute = new Array();
			fullMinute[0] = '';
			fullMinute[1] = '';
			fullMinute[2] = '';
			fullMinute[3] = '';
			fullMinute[4] = '';
			fullMinute[5] = '';
			fullMinute[6] = '';
			fullMinute[7] = '';
			fullMinute[8] = '';
			fullMinute[9] = '';
			fullMinute[10] = '';
			fullMinute[11] = '';
			fullMinute[12] = '';
			fullMinute[13] = '';
			fullMinute[14] = '';
			fullMinute[15] = '';
			fullMinute[16] = '';
			fullMinute[17] = '';
			fullMinute[18] = '';
			fullMinute[19] = '';
			fullMinute[20] = '';
			fullMinute[21] = '';
			fullMinute[22] = '';
			fullMinute[23] = '';
			fullMinute[24] = '';
			fullMinute[25] = '';
			fullMinute[26] = '';
			fullMinute[27] = '';
			fullMinute[28] = '';
			fullMinute[29] = '';
			fullMinute[30] = '';
			fullMinute[31] = '';
			fullMinute[32] = '';
			fullMinute[33] = '';
			fullMinute[34] = '';
			fullMinute[35] = '';
			fullMinute[36] = '';
			fullMinute[37] = '';
			fullMinute[38] = '';
			fullMinute[39] = '';
			fullMinute[40] = '';
			fullMinute[41] = '';
			fullMinute[42] = '';
			fullMinute[43] = '';
			fullMinute[44] = '';
			fullMinute[45] = '';
			fullMinute[46] = '';
			fullMinute[47] = '';
			fullMinute[48] = '';
			fullMinute[49] = '';
			fullMinute[50] = '';
			fullMinute[51] = '';
			fullMinute[52] = '';
			fullMinute[53] = '';
			fullMinute[54] = '';
			fullMinute[55] = '';
			fullMinute[56] = '';
			fullMinute[57] = '';
			fullMinute[58] = '';
			fullMinute[59] = '';

		var fullMonth = new Array();
			fullMonth[0] = '';
			fullMonth[1] = '';
			fullMonth[2] = '';
			fullMonth[3] = '';
			fullMonth[4] = '';
			fullMonth[5] = '';
			fullMonth[6] = '';
			fullMonth[7] = '';
			fullMonth[8] = '';
			fullMonth[9] = '';
			fullMonth[10] = '';
			fullMonth[11] = '';

		var fullDate = new Array();
			fullDate[1] = '';
			fullDate[2] = '';
			fullDate[3] = '';
			fullDate[4] = '';
			fullDate[5] = '';
			fullDate[6] = '';
			fullDate[7] = '';
			fullDate[8] = '';
			fullDate[9] = '';
			fullDate[10] = '';
			fullDate[11] = '';
			fullDate[12] = '';
			fullDate[13] = '';
			fullDate[14] = '';
			fullDate[15] = '';
			fullDate[16] = '';
			fullDate[17] = '';
			fullDate[18] = '';
			fullDate[19] = '';
			fullDate[20] = '';
			fullDate[21] = '';
			fullDate[22] = '';
			fullDate[23] = '';
			fullDate[24] = '';
			fullDate[25] = '';
			fullDate[26] = '';
			fullDate[27] = '';
			fullDate[28] = '';
			fullDate[29] = '';
			fullDate[30] = '';
			fullDate[31] = '';
	}
*/