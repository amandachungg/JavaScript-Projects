// Utilizing concat() Method - concatenates (connects) two or more strings.
function full_sentence(){
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence; 
}


// Utilizing slice_method() - extract a section of a string and then returns the extracted section in a new string
function slice_method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(16,20);
    document.getElementById("Slice").innerHTML = Section;
}


// Utilizing UpperCase() method - Convert string to upper case.
function upper_case(){
    var text = document.getElementById("Upper").innerHTML;
    document.getElementById("Upper").innerHTML = text.toUpperCase();
}

// Utilizing search() method - returns the position of the first occurrence of a string in a string.
function search_method(){
    var text = "The efficiency we have at removing trash has made creating trash more acceptable.";
    var index = text.search("trash");
    document.getElementById("Search").innerHTML= index;
}

// Utilizing toString() method - return a number as a string.
function string_method(){
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Utilzing toPrecision() Method - format numbers to a specified length.
function precision_method(){
    var X = 12938.4484651354941654941321319;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// Utilzing toFixed() method - rounds a number to a given number of digits.
function fixed_method(){
    var X = 4.6974;
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}

// Utilzing valueOf() method - returns a number as a number.
function value_of(){
    document.getElementById("Value").innerHTML = (50+50).valueOf();
}