//ternary ops
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride =(Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride." ;
}

//Vote ternary
function Vote_Function(){
    var age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote =(Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote +"to vote."
}

//keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color =Color;
}
var Jack = new Vehicle("Tesla", "Model S", "2021", "Matte Black");
var Emily = new Vehicle("Jeep", "Wrangler","2020", "White and Black");
var Erik = new Vehicle("Ford", "Pinto","1971","Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Contructors").innerHTML= 
    "Erik drives a "+ Erik.Vehicle_Color + "_colored" + Erik.Vehicle_Model + 
    "manufactured in" + Erik.Vehicle_Year;
}

//nesting

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
