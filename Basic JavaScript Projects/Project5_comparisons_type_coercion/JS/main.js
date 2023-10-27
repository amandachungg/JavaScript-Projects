// Utilizing typeof
document.write(typeof "Word");
document.write(typeof 3);
document.write("10" + 5);

// Displaying NaN
function NaN_Function(){
    document.getElementById("Test").innerHTML = 0/0;
}

// Utilize the isNaN() function to make the browser display “true.”
function NaN_true(){
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

// Utilize the isNaN() function to make the browser display “false.”
function NaN_false(){
    document.getElementById("Test").innerHTML = isNaN('007');
}

// To display "infinity"
function Infinity_function(){
    document.getElementById("Test").innerHTML = 2E310;
}

// To display -Infinity,
function Minus_Infinity_function(){
    document.getElementById("Test").innerHTML = -3E310;
}

// Utilizing Boolean logic
document.write(10>2);
document.write(10<2)

// Utilizing console.log() method
console.log(2>4);

// Utilizing Double Equal Signs
document.write(10==10);
document.write(10==9);


// Utilizing Triple Equal Signs
// Return true by ensuring to match the data type and value.
A = 10;
B = 10;
document.write(A===B);

// Return false by writing a different data type and different value.
A = 10;
B = "9";
document.write(A===B);

// Return false by writing a different data type but the same value for both.
A = 10;
B = "10";
document.write(A===B);

// Return false by writing the same data type but a different value for both.
A = 10;
B = 8;
document.write(A===B);

// Utilizing And Operator
document.write(10>9 && 9>8);
document.write(10>9 && 9>10);

// Utilizing OR operator 
document.write(10>9 || 9>10);
document.write(10>11 || 9>10);

// Utilizing Not Operator
function not_Function_false(){
    document.getElementById("Not").innerHTML = !(20>10);
}

function not_Function_true(){
    document.getElementById("Not").innerHTML = !(10>20);
}

