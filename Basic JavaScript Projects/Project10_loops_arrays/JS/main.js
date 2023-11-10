// Utilizing while loop
function count_to_ten(){
    var Digit = "";
    var X = 1;
    while (X < 11){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_ten").innerHTML = Digit;
}

//Utilizing length property
function get_length(){
    var text = "Hello World!";
    var length = text.length;
    document.getElementById("Length").innerHTML = length;
}

//Utilizing For Loops
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop(){
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

//Utilizing Arrays and Objects
function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}


// Return Function Challenge
function return_function(){
    let X = myfunction();
    document.getElementById("Math").innerHTML = X;
    function myfunction(){
        return Math.PI;
    }
}

// Return Function Challenge 2
function return_function_2(){
    let X = myFunction_2(4,3);
    document.getElementById("Math_2").innerHTML = X;
    function myFunction_2(a,b){
        return a * b;
    }
}


// Create an object using the “let” keyword
function object_keyword(){
    let car = {
        make: "Mazda ",
        model: "CX5 ",
        year: "2022 ",
        color: "white ",
        description: function(){
            return "My car is a " + car.year + car.color + car.make + car.model + ".";
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

//Utilizing Break statement
function break_statement(){
    let text = "";
    for (let i = 0; i < 10; i++){
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

//Utilizing Continue statement
function continue_statement(){
    let text = "";
    for (let i = 0; i < 10; i++){
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}