var age = 40;
switch(true){
		case(age <= 10):
		document.getElementById("box").innerHTML="tu es plus que toi";
		break;
		
		case(age> 10 && age<=50):
		document.getElementById("box").innerHTML="j'ai l'âgée de 24 ans et 2 mois";
		break;
		
		default:
		document.getElementById("box").innerHTML="tu es le père";
		break;
} 