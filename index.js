
var playerOneNum = Math.floor(Math.random() * 6) + 1;
var playerTwoNum = Math.floor(Math.random() * 6) + 1;

var playerOneImg = "images/dice" + playerOneNum + ".png";
var playerTwoImg = "images/dice" + playerTwoNum + ".png";

document.querySelector("img.img1").setAttribute("src", playerOneImg);
document.querySelector("img.img2").setAttribute("src", playerTwoImg);

if (playerOneNum > playerTwoNum) {
    document.querySelector("h1").innerHTML = "Player One Wins";
} else if (playerTwoNum > playerOneNum){
    document.querySelector("h1").innerHTML = "Player Two Wins";    
} else {
    document.querySelector("h1").innerHTML = "Its a Draw";
}