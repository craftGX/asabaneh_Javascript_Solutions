// exercice 1
const countries = require('./countries');


/*console.log(countries);*/

//exercice 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';


function removePonctuations(sentence){
    // on nettoie notre phrase via les regex
    var cleanStr = sentence.replace(/[^\w\s]/g, '');
    var words = cleanStr.split(" ");
    return words;
}

// exercice 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//
if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat");
}
//
if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar");
}
//
const allergicToHoney = true;
const filteredShoppingCart = shoppingCart.filter(element=>!(allergicToHoney && element === "Honey"));

//
// on va utiliser une condition ternaire
const modifiedShoppingCart = shoppingCart.map(cart=>(cart === "Tea" ? "Green Tea" : cart))

//
if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA");
}else{
    countries.push("Ethiopia");
}

//
const webTechs = require('./web_techs');
if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess")
}else{
    webTechs.push("Sass");
}
console.log(webTechs);





