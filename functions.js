//solutions Level 1
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

function BMI(weight,height){
    let bmi = weight/(height*height);
    if (bmi < 18.5){
        console.log("you are Underweight");
    }else if(18.5<bmi<24.9){
        console.log("you are Normal weight")
    }else if(25<bmi<29.9){
        console.log("you are Overweight")
    }else if(bmi>30){
        console.log("you are Obese")
    }   
}

function checkSeason(month){
    if(month==="janvier" || month==="fevrier" || month==="mars"){
        console.log("nous sommes en hiver");
    }else if(month==="avril" || month==="mai" || month==="juin"){
        console.log("nous sommes au printemps");
    }else if(month==="juillet" || month==="aout" || month==="septembre"){
        console.log("nous sommes en été");
    }else if(month==="octobre" || month==="novembre" || month==="decembre"){
        console.log("nous sommes en automne");
    }
}

function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log(findMax(1,2,3));

//solutions Level 2
function solveLinEquation(a,b,c){

}
