function Player1() {
	
	//Player1
	let num = Math.random(0, 1);
	num = num * 6;
	num = Math.round(num);
	num = num + 1;

	let num2 = Math.random(0, 1);
	num2 = num2 * 6;
	num2 = Math.round(num2);
	num2 = num2 + 1;

	let sum = num + num2;

	if(num === num2) {
		document.getElementById('pasch').innerHTML = "Es wurde ein Pasch gewürfelt!";
	} else {
		document.getElementById('pasch').innerHTML = "Leider wurde kein Pasch gewürfelt.";
	}


	document.getElementById('erg').innerHTML = num;
	document.getElementById('erg2').innerHTML = num2;
	document.getElementById('erg3').innerHTML = "Die summe beider Zahlen ist " + sum;
}

function Player2() {

	//Player2
	let num = Math.random(0, 1);
	num = num * 6;
	num = Math.round(num);
	num = num + 1;

	let num2 = Math.random(0, 1);
	num2 = num2 * 6;
	num2 = Math.round(num2);
	num2 = num2 + 1;

	let sum = num + num2;

	if(num === num2) {
		document.getElementById('pasch1').innerHTML = "Es wurde ein Pasch gewürfelt!";
	} else {
		document.getElementById('pasch1').innerHTML = "Leider wurde kein Pasch gewürfelt.";
	}

	document.getElementById('erg4').innerHTML = num;
	document.getElementById('erg5').innerHTML = num2;
	document.getElementById('erg6').innerHTML = "Die summe beider Zahlen ist " + sum;
}
