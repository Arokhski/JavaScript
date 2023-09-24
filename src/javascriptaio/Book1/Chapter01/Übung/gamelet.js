/* 
Das ist ein Test-js-Dokument für das einfache Ballspiel in einer HTML-Datei.
Die Tasten Pfeil-Links und Pfeil-rechts müssen gedrückt werden, damit ein
roter Ball, der in einer HTML-Datei definiert wurde, sich nach links oder rechts
bewegt. 
Der Fall, dass der Ball sich nach oben oder unten bewegt, wird noch implementiert.
Ende des Block Comments.
*/

const ball = document.getElementById("ball"); //hiermit wird der Ball geholt
document.addEventListener("keydown", handleKeyPress1); //hiermit wird geprüft, ob eine Taste gedrückt wurde
document.addEventListener("keydown", handleKeyPress2); //hiermit wird geprüft, ob eine Taste gedrückt wurde
let position = 0; //hiermit wird die anfängliche Position festgelegt

function handleKeyPress1(e) {
  //das ist die erste Funktion für das drücken einer Taste
  if (e.code === "ArrowLeft") {
    //...Pfeil-links wird gedrückt ("event.code")
    position = position - 10; //die Position des Balls wandert 10 Pixel nach links
  }
  if (e.code === "ArrowRight") {
    //...Pfeil-rechts wird gedrückt ("event.code")
    position = position + 10; //die Position des Balls wandert 10 Pixel nach rechts
  }
  if (position < 0) {
    position = 0;
  }
  refreshOne(); //die Position des Balls wird zurückgesetzt (horizontal)
}
//die erste refresh-Funktion wird definiert
function refreshOne() {
  
  ball.style.left = position + "px";
  ball.style.right = position + "px";
}

function handleKeyPress2(e) {
  if (e.code === "ArrowDown") {
    position = position + 10;
  }
  if (e.code === "ArrowUp") {
    position = position - 10;
  }
  if (position < 0) {
    position = 0;
  }
  refreshTwo(); //die Position des Ball wird zurückgesetzt (vertikal, hoffentlich)
}

function refreshTwo() {
    ball.style.top = position + "px";
    ball.style.bottom = position + "px";
}