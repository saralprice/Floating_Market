var trade = 0,
pom = 3;

/*
or could also do as this...
	var trade, pom;
	trade = 0;
	pom = 3;
*/

//good practice to put spaces around math function bits like = or *

document.getElementById("pom").innerHTML = pom;
// learned how to define a bit of html with matching id to variable value I've set

function tradeClick(number){
	trade = trade + number;
	document.getElementById("trade").innerHTML = trade;
	};
//don't understand this bit properly	
