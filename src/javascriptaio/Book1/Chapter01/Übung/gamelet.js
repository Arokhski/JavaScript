/* 
Das ist ein Test-js-Dokument für das einfache Ballspiel in einer HTML-Datei.
Die Tasten Pfeil-Links und Pfeil-rechts müssen gedrückt werden, damit ein
roter Ball, der in einer HTML-Datei definiert wurde, sich nach links oder rechts
bewegt. 
Der Fall, dass der Ball sich nach oben oder unten bewegt, wird noch implementiert.
Ende des Block Comments.
*/

const ball = document.getElementById("ball"); //hiermit wird der Ball geholt
document.addEventListener("keydown", handleKeyPress); //hiermit wird geprüft, ob eine Taste gedrückt wurde
let positionX = 0; //hiermit wird die anfängliche Position festgelegt
let positionY = 0;

function handleKeyPress(e) {
  //das ist die erste Funktion für das drücken einer Taste
  if (e.code === "ArrowLeft") {
    position = positionX -= 10; //die Position des Balls wandert 10 Pixel nach links
  }
  if (e.code === "ArrowRight") {
    position = positionX += 10; //die Position des Balls wandert 10 Pixel nach rechts
    if (e.code === "ArrowDown") {
      position = positionY += 10;
    }
    if (e.code === "ArrowUp") {
      position = positionY -= 10;
    }
  }
  if (positionX < 0) {
    positionX = 0;
  }
  if (positionX > window.innerWidth - ball.clientWidth) {
    positionX = window.innerWidth - ball.clientWidth;
  }
  if (positionY < 0) {
    positionX = 0;
  }
  if (positionY > window.innerHeight - ball.clientHeight) {
    positionY = window.innerHeight - ball.clientHeight;
  }
  refresh(); //die Position des Balls wird zurückgesetzt (horizontal)
}

function refresh() {
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}