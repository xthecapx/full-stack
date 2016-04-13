var colors = ["blue", "brown", "red", "yellow"],
    target,
    colorPosition;

function check_guess() {
  if (target == colors[colorPosition]) {
    return true;
  } else {
    return false;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

(function Do_game() {
  var finished = false;
  colorPosition = getRandomInt(colors.length, 0);
  while(!finished) {
    target = prompt("I'm thinking in a number between: " + colors + "\n" + "What color do you think it is?", "Type your color here! ");
    finished = check_guess();
  }
})();
