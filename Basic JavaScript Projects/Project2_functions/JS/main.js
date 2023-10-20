// Utilizing the document.getElementById method
function My_First_Function(){
    var str = Date()
    document.getElementById("Button_Date").innerHTML = str;

}


// Utilizing the += operator to concatenate a string
function My_Second_Function(){
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
