// Exercice 5 : L’objet String - Mettre la première lettre d'un mot en majuscule [facile]
// Ecrire une fonction qui met en majuscule la première lettre de chaque mot d'une phrase
// Exemple : le corbeau et le renard => Le Corbeau Et Le Renard

function capitalizeString() { 
    let input = "le corbeau et le renard"; 
    let string = input.value; 
    headingElement.innerHTML = string[0].toUpperCase() +  string.slice(1); 
    alert(input);
  } 
  capitalizeString()
