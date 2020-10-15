
var leistuff = 
[
"The floor is lava",
"Snake boi",
"Panther man",
"Dragons united",
"Tiger heavy",
"Cranesanity",
"Phoenix Illusion",
"Drunkard",
"f31 train",
"backturned bull",
"forward only",
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