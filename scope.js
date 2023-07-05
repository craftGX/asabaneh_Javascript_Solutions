/*exercice 1*/
dog = {};
console.log(dog);
dog.name = "charlie";
dog.legs = 4;
dog.color = "black and white";
dog.age = 10;
dog.bark = function(){
  return "woof woof";
}
console.log(dog.bark());
dog.breed = true;
dog.getDogInfo = function(){
  return `${dog.name} ${dog.legs} ${dog.color} ${dog.age}`;
}
console.log(dog.getDogInfo());
