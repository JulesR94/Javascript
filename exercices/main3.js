/* a = parseInt(prompt("Quel est votre âge ? "));
while (a<18){
    alert("Votre âge n'est pas valide");
    a = parseInt(prompt("Veuillez ressaisir votre âge svp :")); 
}
if(a<18) {
      alert("pas correct veuillez recommencer");
      a = parseInt(prompt("Quel est votre âge?"));
}
else {
        alert("votre âge "+ a + " correct")
    } */

    a = parseInt(prompt("Quel est votre âge ? "));
   if (a>=18){
            alert("votre âge "+ a + " est correct")
        }
    else{
            while (a<18){
                alert("Votre âge n'est pas valide");
                a = parseInt(prompt("Veuillez ressaisir votre âge svp :"));
            if(a>=18){
                    alert("votre âge "+ a + " est correct")  
                } 
            }
        }  
   
    



