alert('Bonjour tout le monde')
document.open();
document.close();

let start = 'Bonjour',
prenom,
end = ' !',
result;

prenom = prompt("Quel est votre prenom? ");
result = start + prenom + end ;
alert(result);
