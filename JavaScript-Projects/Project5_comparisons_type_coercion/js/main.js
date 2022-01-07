document.write(typeof 4);
document.write("10" +5);

function my_Function() {
    document.getElementById("Test").innerHTML=0/0
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}
//infinity
document.write(2E310);
document.write(-3E310);

//boolean
document.write(10>2);
document.write(10<4);

//console log
console.log(2+2);

//double equal signs
document.write(10 == 10);
//for false
document.write(3 == 11);

//Tripple equal signs
x = 10;
Y = 10;
document.write(X === Y);

//to return false
X = 82;
Y ="82";
document.write(X === Y);

//logical operators
document.write(5>10||10>4);