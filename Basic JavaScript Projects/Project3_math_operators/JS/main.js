// Utilizing the Addition operator
function addition_Function(){
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2 = " + addition;
}

// Utilizing the Subtraction operator
function subtraction_Function(){
    var subtraction = 5-2;
    document.getElementById("Math").innerHTML = "5-2 = " + subtraction;
}

// Utilizing the Multiplication operator
function multiplication_Function(){
    var simple_Math = 6*8;
    document.getElementById("Math").innerHTML = "6*8 = " + simple_Math;
}

// Utilizing the Division operator
function division_Function(){
    var simple_Math = 48/6;
    document.getElementById("Math").innerHTML = "48/6 = " + simple_Math;
}

// Utilizing various Math operators
function more_Math(){
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

// Utilizing the Modulus operator
function modulus_Operator(){
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

// Utilizing the Increment operator
var X = 5;
X++;
document.write(X);

// Utilizing the Decrement operator
var X = 5.25;
X--;
document.write(X);

// Utilizing Math.random
window.alert(Math.random() * 50);

// Utilizing Math object method
function Math_round(){
    var math_round = Math.round(4.6);
    document.getElementById("Math").innerHTML = "Math.round(4.6) returns the value of 4.6 rounded to its nearesr integer: " + math_round;
}