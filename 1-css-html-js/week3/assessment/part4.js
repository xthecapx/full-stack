//Global Variables

var numberOfFaces = 5,
    theLeftSide = document.getElementById('leftSide'),
    theRightSide = document.getElementById("rightSide"),
    body = document.getElementsByTagName("body")[0],
    display = document.getElementById("timer"),
    container = {
      width: 500,
      height: 500
    },
    img = {
      width: 100,
      height: 100
    },
    seconds = 10,
    timeOut;

//Game logic

function generateFaces() {
  var faces = numberOfFaces;

  while(faces > 0) {
    var face = document.createElement("img");
    face.src = "smile.png";
    face.style.top = getRandomInt(0, container.width - img.width) + "px";
    face.style.left = getRandomInt(0, container.height - img.height) + "px";
    face.style.transform = "rotate(" + getRandomInt(0, 360) +"deg)";
    theLeftSide.appendChild(face);
    faces--;
  }

  //This lane help to win the game
  //theLeftSide.lastChild.style.border = "5px solid red";
  addClickListener();
  cloneFaces();
  timer();
}

function cloneFaces() {
  leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.innerHTML = leftSideImages.innerHTML;
}

function gameOver(type) {
  var gameOver = document.createElement("div"),
      textGameOver = document.createTextNode("Game Over!\n" + "You lose in your " + numberOfFaces/5 + " turn");

  if (type) {
    textGameOver = document.createTextNode("Time Over!\n" + "You lose in your " + numberOfFaces/5 + " turn");
  }

  gameOver.className = "gameOver";
  clearNodes({body});
  body.style.background = "red";
  gameOver.appendChild(textGameOver);
  body.appendChild(gameOver);

  body.onclick = null;
  theLeftSide.lastChild.onclick = null;
}

function timer() {
  var seft = this;

  clearTimeout(timeOut);

  if (seconds-- < 0) {
    gameOver(true);
  }

  updateTimer();
  timeOut = setTimeout(seft.timer, 1000);
}

function updateTimer() {
    display.innerHTML = "Seconds: " + seconds;
}

//Helpers
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function clearNodes(nodes) {
  for (var index in nodes) {
    while (nodes[index].lastChild) {
      nodes[index].removeChild(nodes[index].lastChild);
    }
  }
}

//Listeners
function addClickListener() {
  theLeftSide.lastChild.onclick = function nextLevel(event){
    event.stopPropagation();
    numberOfFaces += 5;
    clearNodes({theLeftSide, theRightSide});
    generateFaces();
    seconds += 2;
    updateTimer();
  };
}

window.addEventListener("load", function() {
  generateFaces();
});

body.addEventListener("click", gameOver);
