var randomNumber1 = Math.floor(Math.random()*6)+1; // this contains 1 - 6 range numbers
var randomImages = "dice" + randomNumber1 + ".png"; // It will select images randomly from "dice1.png" to "dice6.png"
var randomImagesSource1 = "images/" + randomImages; //It will select images "images/dice1.png" to "images/dice6.png"
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesSource2);


// if player 1 wins!
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins ❤️!!!";
}

// if playuer 2 wins!
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins ❤️!!!";
}

// if both players wins then it'll draw
else
{
    document.querySelector("h1").innerHTML = "Draw❤️!!!";
}

