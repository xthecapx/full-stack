var numberOfFaces = 5,
    theLeftSide = document.getElementById('leftSide'),
    body = document.getElementsByTagName("body")[0],
    container = {
      width: 500,
      height: 500
    },
    img = {
      width: 100,
      height: 100
    };

function generateFaces() {
  var face = _new("img");
  face.src = "smile.png";
  face.style.top = _getRandomInt(0, container.width - img.width) + "px";
  face.style.left = _getRandomInt(0, container.height - img.height) + "px";
  body.appendChild(face);
}

function _new(element) {
  return document.createElement(element);
}

function _getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.addEventListener("load", generateFaces);
