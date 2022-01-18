//let number = 0;
//number = number + 1;
//alert(number);

//number++;
//alert (number)

//let number_1 = 0;
//let number_2 = 0;
//number_1++;
//++number_2;
//alert(number_1); // Affiche : « 1  
//alert(number_2); // Affiche : « 1 


//let number = 0;
//let output = number++;
//document.write(number); // Affiche : « 1 » 
//document.write(output); // Affiche : « 0 »

//let number = 0;
//let output = ++number;
//document.write(number); // Affiche : « 1 » 
//document.write(output);

//let number = 1;
//while (number < 10) {number++; } //incrémentation
//alert(number); // Affiche : « 10 »

//for(let iter = 0; iter < 10 ;iter++) {
//    alert("itération n° "+ iter)
//}

//function showMsg() {
//    alert("C'est une premiére fonction");
// }  

//let var1 = 2, var2= 3;
//function calculate(){
//    alert(var1 * var2);
//}
//calculate();
//alert(var1 * var2);

//let var1 = 2, var2 = 3;
//function calculate() {
//    alert(var1 * var2);
//}

//calculate();
//alert(var1);
//var1 = 3;
//calculate();
//alert(var1);

// function calculate(var1, var2){
//     alert(var1 * var2);
// }
// calculate (2,3);
// calculate(5, 6)

// function calculate(var1, var2){
//    alert(var1 * var2);
// }
// let number_1a, number_2a;
// number_1a = parseInt(prompt("votre premier nombre : "));
// number_2a = parseInt(prompt("votre deuxiéme nombre"));
// calculate2(number_1a,number_2a);
// 
// class Calcul {
//     constructor(var1, var2) {
//     this.produit = var1 * var2;
//     }
// }
// //console.log(new Calcul(4, 3).produit);
// alert(new Calcul(4, 3).produit);

// let sayHello3 = (function(){
//                 return "hello world";
                
// })();
// alert(sayHello3);

let calcul1 = (function(){ //fonction anonyme
            let var1 = 2, var2 = 3;
            return var1*var2;
})();
alert(calcul1);