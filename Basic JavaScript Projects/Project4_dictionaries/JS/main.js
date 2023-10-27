// Utilizing Dictionary
function my_Dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"White",
        Breed:"Samoyed",
        Age:2,
        Sound:"Bark!"
    };
    
// Utilizing Delete operator
    delete Animal.Sound; 
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}