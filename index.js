
var player1 = Math.floor((Math.random()*6)+1);
var player2 = Math.floor((Math.random()*6)+1);

var p1 = "images/dice" + player1 + ".png";
var p2 = "images/dice" + player2 + ".png";



document.querySelector(".img1").setAttribute("src",p1);
document.querySelector(".img2").setAttribute("src",p2);

  if(player1>player2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }else if (player1===player2) {
    document.querySelector("h1").innerHTML = "Tie!";
  }else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
