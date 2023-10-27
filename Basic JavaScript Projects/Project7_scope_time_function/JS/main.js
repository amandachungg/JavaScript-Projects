// A global variable
var X = 10;
function Add_numbers_1(){
    document.write(20 + X + "<br>");
}
function Add_numbers_2(){
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// A local variable
function Add_numbers_3(){
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4(){
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

// Intentionally write a function with an error in it and use console.log() method to debug it within the console in Chrome Dev Tools.
function Add_numbers_5(){
    var Z = 10;
    console.log(15 + Z);
}
function Add_numbers_6(){
    console.log(Z + 100);
}

// Utilizing the new Date().getHours() method and If statement
function get_Date(){
    if (new Date().getHours() < 20){
    document.getElementById("Greeting").innerHTML = "Goodnight!";
    }
}

// Utilizing the else statement
function Age_Function(){
    Age = document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else{
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?"). innerHTML = Vote;
}

// Utilizing the Else If Statements
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else{
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

