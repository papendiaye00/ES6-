         //SCOPE DE BLOC

// const X = { name: 'JONH'};
// X.name = "Developpeur";
// console.log(X);


// function first () {
//  let a = 5;
//  if ( a > 3) {
//   console.log(a);
//  }
// }
// first ()

// let a = 5;
// {
// console.log(a);
// }


// if (true) {
//  let a = 5;
// }
// for (let i = 0 ; i <= 10; i++) {
//   console.log (i);
// }


// function first () {
//  if (true) {
//   var a = 50;
//  }
//  console.log(a);
// }
// first();

// var i = 20;
// for ( var i = 0; i <10; i++ ) {
//   console.log(i)
// }
// console.log(i);

// let i = 80;
// for ( let i = 0; i <10; i++ ) {
//   console.log(i)
// }
// console.log(i);


// 1- NE PLUS UTILISER LE  var 

// 2- TOUJOURS UTILISER LE const

// 3- SI ON REASSIGNE UNE VALEUR A LA VARIABLE, UTILISER LE let


            //Les fonctions fléchés

// const myFunction = arg => arg * 5;

// console.log(myFunction(2));

// const me = {
//    name: "Jonh",
//    presentfriend: function (friend) {
//     return "Tu connais " + friend + " ? ";
//    }
// };
// console.log (me. presentfriend("Kevin"));

// const me = {
//  name: "Jonh",
//  presentfriend: friend => {
//   const presentation = friend = "Tu connais "  + friend + " ? ";
//   console.log (presentation);
//   return presentation;
//  }
// };
// me.presentfriend("kevin");


// const classicFunction = function () {
//  console.log (this);
// }
// const arrowFunction = () => console.log (this);

// const classicfunction = classicFunction. bind (this);
// const me = {
//    name: "Jonh",
//    presentClassic: classicFunction,
//    presentArrow: arrowFunction,
//    presentClassicBind: classicFunctionBind
// }
// me.presentClassic();
// me.presentArrow ();
// me.presentClassicBind (); 


           //Paramètre par defaut

// function nomComplet (prenom, nom) {
//  console.log (prenom + " " + nom);
// }
// nomComplet("Brad", "PITT");

// function nomComplet (prenom, nom = "Smitch" ) {
//  console.log (prenom + " " + nom);
// }
// nomComplet("Brad");

// const myVar = "Codeur";
// function nomComplet (prenom, nom = myVar) {
//  console.log (prenom + " " + nom);
// }
// nomComplet("Brad");


            //Paramètre REST

// const mesNombres = [8,10,15,49,70,32,51,20];
// function faislasomme (...nombres){
//  console.log (nombres);
//   let somme = 0;
//   for (let i = 0; i < nombres.length; i++) {
//     somme += nombres [i];
//   }
//   return somme;
// }
// console.log (faislasomme(8,10,15,49,70,32,51,20));


            // Operateur SPREAD

// const mesNombres = [8,10,15];
// function faislasomme3Nombres (nombre1, nombre2, nombre3){
// return nombre1 + nombre2 + nombre3;
//   let somme = 0;
//   for (let i = 0; i < nombres.length; i++) {
//     somme += nombres [i];
//   }
//   return somme;
// }
// console.log (faislasomme3Nombres(...mesNombres));

// const fruitRouges = [ "fraise", "framboise"];
// const fruitVert = [ "pomme", "poire"];

// const fruits = [ ...fruitRouges, "Banane" , ...fruitVert];

// console.log (fruits);


           //Boucle for of
// const fruitRouges = [ "fraise", "framboise", "cerise"];
// for (let i = 0; i < fruitRouges.length; i++) {
// console.log ("La "+ fruitRouges [i] + " c'est bon!");
// }

// const fruitRouges = [ "fraise", "framboise", "cerise"];
// for (let fruit of fruitRouges) {
// console.log ("La "+ fruit + " c'est bon!");
// }


          // Template Literals ou Template string

// const fruit = "fraise";
// console.log (`la ${fruit} c'est bon!!!`);

// const maString = ` 
// Je suis sur la ligne 1
// je suis sur la ligne 2
// je suis sur la ligne 3
                   
// je suis sur la ligne 5`;
//    console.log(maString);


            //Destructuring Arrays
// const nombres = [2,54,89];

// const [a,b,c] = nombres ; 

// console.log (a);
// console.log (b);
// console.log (c);

          // AVEC REST
// const nombres = [2,54,89,12,15,20];

// const [a,...b] = nombres ; 

// console.log (a);
// console.log (b);


// let a = 18;
// let b = 52;
// let c = 58;

// [b,c,a] = [a,b,c];

// console.log (a);
// console.log (b);
// console.log (c);



          // Destructiring Objects

// const myObject = { 
//  name: "Maurice",
//  age: 23
// }

// const {name, age} = myObject;

// console.log (name);
// console.log (age);

// const myObject = { 
//  name: "Maurice",
//  age: 23,
//  present : function () {
//   console.log ("HELLO");
//  }
// }

// const {name, present} = myObject;

// present ();