var colors = ["blue", "brown", "red", "yellow"],
    target,
    colorPosition,
    userColor,
    guesses = 0;

function check_guess() {
  if(checkColorList()) {
    return game();
  } else {
    alert("I don’t recognize that color!");
    return false;
  }
}

function game() {
  if (target > userColor) {
    alert("Your input is alphabetically higher than mine!");
    return false;
  }
  if (target < userColor) {
    alert("Your input is alphabetically lower than mine!");
    return false;
  }
  if (target == userColor) {
    win_game();
    return true;
  } else {
    return false;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkColorList() {
  var check = false;

  colors.forEach(function(value, index) {
    if (value == target) {
      check = true;
    }
  });

  return check;
}

function win_game() {
  var body = document.getElementsByTagName("body")[0],
      node = document.createElement("h1"),
      textnode = document.createTextNode("You are right! You took "+ guesses + " guesses!");

  node.appendChild(textnode);
  body.style.background = target;
  body.appendChild(node);
}

(function do_game() {
  var finished = false;

  colorPosition = getRandomInt(colors.length, 0);
  userColor = colors[colorPosition];

  while(!finished) {
    target = prompt("I'm thinking in a number between: " + colors + "\n" + "What color do you think it is? " + "(" + userColor + ")", "Type your color here! ");
    guesses++;
    finished = check_guess();
  }
})();
