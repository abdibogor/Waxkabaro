var age = 70;

if(age < 30){
		document.getElementById("box").innerHTML = "you're young";
		document.getElementById("box").style.color = "red";
}else if(age < 50){
	document.getElementById("box").innerHTML = "il est inférieure.";
	document.getElementById("box").style.color = "red";
}
else{
		document.getElementById("box").innerHTML = "you're father"; 
		document.getElementById("box").style.color = "green";  		
}