const randNum1 = Math.floor(Math.random() * 6) + 1;
const randDice1 = "images/dice" + randNum1 + ".png";
$("img")[1].setAttribute("src", randDice1);

const randNum2 = Math.floor(Math.random() * 6) + 1;
const randDice2 = "images/dice" + randNum2 + ".png";
$("img")[2].setAttribute("src", randDice2);

if (randNum1 > randNum2) {
  $(".playGameHeaderH1").text("👍 Player 1 Wins!");
} else if (randNum2 > randNum1) {
  $(".playGameHeaderH1").text("Player 2 Wins! 👍");
} else {
  $(".playGameHeaderH1").text("🤞 Draw 🤞");
}

const numDrums = $(".drum").length;
for (let i = 0; i < numDrums; i++) {
  $(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

$(document).keydown(function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

function makeSound(key) {
  switch (key) {
    case "d":
      var highHat = new Audio("sounds/high-hat.wav");
      highHat.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom1.wav");
      tom1.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var tom2 = new Audio("sounds/tom2.wav");
      tom2.play();
      break;
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var ride = new Audio("sounds/ride-cymbal.mp3");
      ride.play();
      break;
  }
}
