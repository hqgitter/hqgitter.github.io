
var leistuff = 
[
"The floor is lava",
"Snake boi",
"Snake to panther bull",
"snake 4 1 bullshit",
"snakey dragon time",
"snake 4 poker heheh",
"Panther man",
"panther foot stepper",
"Dragons united",
"Tiger heavy",
"tiger into snaker",
"Cranesanity",
"Phoenix Illusion",
"Drunkard",
"f31 train",
"backturned bull",
"flying through the air",
"forward only",
"+ on block",
"extreme solidity",
"cautious",
"defensive",
"whiff only",
"sleepy lei",
"razor rusher",
"timing boi",
"wolf rusher",
"defense breaker",
"non standard moves",
"crouch baby",
"b24 stuff",
"low low"
];
function rando(max){
	return Math.floor(Math.random() * max);
}

function roll(){
	var len = leistuff.length;
	var first = leistuff[rando(len)];
	do {
		var second = leistuff[rando(len)];
	} while(second == first);
	do {
		var third = leistuff[rando(len)];
	} while(second == third || first == third);
	document.getElementById("first").innerHTML = first;
	document.getElementById("second").innerHTML = second;
	document.getElementById("third").innerHTML = third;
}

roll();
