let compScret = (Math.random());
let userInput;

function guess() {
	let userInput=parseInt(document.
		querySelector("input").value);
	console.log("userInput");

}
if (compScret === userInput){
	alert("Congratulation!!You have won");
}
else if (userInput>compScret){
	alert("Too high");
}
else{
	alert("Too low");
}