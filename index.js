var n = Math.random();
n= n*6
n= Math.floor(n) +1;

var n1 = Math.random();
n1= n1*6
n1= Math.floor(n1) +1;

var rd = "dice" + n +".png"
var rdr = "images/"+rd
var rd1 = "dice" + n1 +".png"
var rdr1 = "images/"+rd1
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", rdr)
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", rdr1)

if (n1>n) {
    document.querySelector("h1").innerHTML = "Yay Player 2 Has Won 👏";
}
else if (n1<n) {
    document.querySelector("h1").innerHTML = "Yay Player 1 Has Won 👏";
}
else {
    document.querySelector("h1").innerHTML = "Draw Try Again ";
}
