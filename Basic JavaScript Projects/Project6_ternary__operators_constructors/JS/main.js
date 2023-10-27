// Utilizing Ternary Operators
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote." : "You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

// Utilizing "new" and "this" Keywords
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// Utilizing "new" and "this" Keywords 2
function Student(Name, Subject, Grade){
    this.Student_Name = Name;
    this.Student_Subject = Subject;
    this.Student_Grade = Grade;
}
var A = new Student("Sarah", "Mathematic", "80%");
var B = new Student("David", "English", "77%");
var C = new Student ("Jane", "Science", "58%");
function mysecond_Function(){
    document.getElementById("New_and_This").innerHTML =
    A.Student_Name + " scored " + A.Student_Grade + " on " + A.Student_Subject;
}

// Utilizing Nested Function
function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one(){Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
