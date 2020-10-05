let tableau1 = ['Végéta ', 'Kaneki ken ', 'Cell '];
let tableau2 = ['dirige','surpasse','protège'];
let tableau3 = [' les méchants',' les terriens',' les démons'];

function creer_phrase(tableau_nom, tableau_verbe, tableau_complement) {
	let phrase;
	phrase = tableau_nom[getRandomInt(3)] + tableau_verbe[getRandomInt(3)] + tableau_complement[getRandomInt(3)];
	return(phrase);
}
function getRandomInt(max) {
  	return(Math.floor(Math.random() * Math.floor(max)));
}
function demander_combien() {
	let combien = prompt("Combien de phrase(s) voulez vous générer (entre 1 et 5) ?");
	return(combien);
}
function afficher_phrases() {
	let combien = demander_combien();
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
}

afficher_phrases();
let refresh = document.getElementById("input_recommencer");
refresh.addEventListener("click", afficher_phrases, false);