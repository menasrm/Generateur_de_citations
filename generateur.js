let tableau1 = ['Sangoku ', 'Naruto ', 'Freezer '];

let tableau2 = ['combat','sauve','tue'];

let tableau3 = [' les méchants',' les terriens',' les démons'];

function creer_phrase(tableau_nom, tableau_verbe, tableau_complement) {
	let phrase;

	phrase = tableau_nom[getRandomInt(3)] + tableau_verbe[getRandomInt(3)] + tableau_complement[getRandomInt(3)];
	
	return(phrase);
}

function getRandomInt(max) {
  	return(Math.floor(Math.random() * Math.floor(max)));
}

let combien = prompt("Combien de phrase(s) voulez vous générer (entre 1 et 5) ?");

if (combien == 1 || combien == 2 || combien == 3 || combien == 4 || combien == 5) {
	let count = 0;
	while(count < combien) {
		console.log(creer_phrase(tableau1, tableau2, tableau3));
		count++;
	}
}
else {
	console.log("alerte, la saisie est invalidée");
}











