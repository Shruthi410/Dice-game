var randomVariable1 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "dice" + randomVariable1 + ".png";

var randomDiceSource1 = "images/" + randomDice1;

var image1 = document.querySelector("img.img1").setAttribute("src", randomDiceSource1);

var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "dice" + randomVariable2 + ".png";
var randomDiceSource2 = "images/" + randomDice2;

var image2 = document.querySelector("img.img2").setAttribute("src", randomDiceSource2);

if (randomDice1 > randomDice2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomDice1 < randomDice2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";

}
else {
document.querySelector("h1").textContent = "Draw";
}
