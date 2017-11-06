"use strict";
var i = 0;
function rollDice() {
	var players = ["Player1","Player2","Player3","Player4"];
	let die1 = document.getElementById("die1");
	let die2 = document.getElementById("die2");	
	let status = document.getElementById("status");
	let d1 = Math.floor(Math.random() * 6) + 1;
	let d2 = Math.floor(Math.random() * 6) + 1;
	let diceTotal = d1 + d2;
	die1.innerHTML = d1;
	die2.innerHTML = d2;

	status.innerHTML = players[i]+" You rolled "+diceTotal+".";
	if(d1 == d2) {
		status.innerHTML += " DOUBLES! Choose Who Drinks And Reroll!";
	}
	if(d1 + d2 == 3) {
		status.innerHTML += " 3 Man Take A Drink!"
	}
	if(d1 == 3 || d2 == 3) {
		status.innerHTML += " 3 Man Take A Drink!"
	}
	if (d1 == 3 & d2 == 3) {
		status.innerHTML += " DOUBLE 3's! 3 Man Take Two Drinks!"
	}
	i++;
	if (i == 4){
		i = 0;
	}
}
