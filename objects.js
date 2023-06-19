// level 1
const dog = {
    name:"spooky",
    legs:4,
    color:"brown",
    age:10,
    bark:function(){
        return "woof woof";
    },
    getDogInfo: function() {
        return `I am ${this.name},I have ${this.legs} legs,my color is ${this.color}. I am ${this.age} years old.`
      }
};
console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
dog.breed="rottweiller";
console.log(dog.getDogInfo());
console.log(dog);

// level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// personne ayant le max de skills
let maxSkills = 0;  //initialisation variable maxSkills à 0
let skillfullPerson = ''; //initialisation variable 

for (let user in users) {
  const numSkills = users[user].skills.length; // on definit le nombre de skill de chaque personne
  if (numSkills > maxSkills) {
    maxSkills = numSkills; 
    skillfullPerson = user; // le comparatif se fait entre toutes les personnes durant toute la boucle
  }
}

console.log(skillfullPerson);

//nombre de personnes connectées
let connectedPerson = 0;
for(let user in users){
    const personIsLogged = users[user].isLoggedIn;
    if(personIsLogged===true){
        connectedPerson++;
    }
}
 console.log("personnes connectées : " + connectedPerson);
  
