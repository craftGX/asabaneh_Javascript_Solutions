//solutions
function fullName(name){
    console.log(name);
}

function fullName2(firstName,lastName){
    let name = firstName + " " + lastName;
    return name;
}

function  addNumbers(a,b){
    let sum = a + b;
    return sum;
}

function areaOfRectangle(width,height){
    let area = width * height;
    return area;
}

function perimeterOfRectangle(width,height){
    let perimeter = 2*(width+height);
    return perimeter;
}

function volumeOfRectPrism(width,height,length){
    let volume = width * height * length;
    return volume;
}

function areaOfCircle(r){
    let area = Math.PI*r*r;
    return area;
}

function circumOfCircle(r){
    let circum = 2*r*Math.PI;
    return circum;
}

function density(mass,volume){
    let density = mass/volume;
    return density;
}

function speed(distance,time){
    let speed = distance/time;
    return "the speed is " + speed + "km/min";
}


function weight(mass,gravity){
    let weight = mass*gravity;
    return weight;
}

function convertCelsiusToFahrenheit(oC){
    let oF = (oC*(9/5)) + 32;
    return oF;
}
console.log(convertCelsiusToFahrenheit(26));