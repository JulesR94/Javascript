// let nb1 = "2";
// let nb2 = "0";
// let nb3 = "1";
// let nb4 = "6";

// let ordre = [nb1,nb2,nb2,nb4];
// alert(ordre);

// let ordreinv = [nb4,nb3,nb2,nb1];
// alert(ordreinv);

function Inverser(){
    let chiffres= prompt("Entrez votre nombre");
nombre = [];
alert(chiffres[0]+chiffres[1]+chiffres[2]+chiffres[3]);

ordreinv = chiffres[3]+chiffres[2]+chiffres[1]+chiffres[0];
alert(ordreinv);
}
Inverser()


// function Inverser(){
//     let nombre = prompt('Entrez votre nombre à 4 chiffre : ');
//     valeur = nombre.split('').reverse('').join('');
//     alert(valeur);
// }
// Inverser()