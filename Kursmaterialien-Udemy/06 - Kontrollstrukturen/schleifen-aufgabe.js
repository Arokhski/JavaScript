"use strict"

// Aufgabe 1:
//
// Strafaufgabe für einen Schüler an der Sprachschule!
// Er soll 25x schreiben: "Ich soll im Unterricht nicht stören".
// 
// Schreibe ein kleines Programm, was dies für den Schüler 
// erledigt ;)

//let straftext = "Ich soll im Unterricht nicht stören."
//console.log(straftext.repeat(25))

for (let straftextAnzahl = 0; straftextAnzahl < 25; straftextAnzahl++)
{
  
  console.log("Ich soll im Unterricht nicht stören.")
}


// Aufgabe 2: Sprachschule
//
// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich 
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo!

let students = [
  "Max", 
  "Monika", 
  "Franziska", 
  "Bernd", 
  "Tobias", 
  "Andreas"
]
let students1 = []
let students2 = []
for (const i in students) { // i "in" holt die anzahl der werte aus dem array students
  if (i % 2 === 0) {  // anzahl der werte wird durch 2 geteilt (% ist modulo und rundet mit rest). der rest der modulo-devision wird mit null verglichen. wenn kein rest, (0) dann wird if ausgeführt. wenn rest, wird else ausgeführt.
    students1.push(students[i]) // mit push wird zur ersten studentsliste was hinzugefügt. i ist der positionswert der eben ermittelten position der schleife(0-6)
  }
  else {  // wird ausgeführt, wenn modulo einen rest hatte. erfasst damit alle anderen teilnehmer
    students2.push(students[i]) //mit push auch hier die mit i erfassten teilnehmerpositionen
  }
}
console.log(students1)
console.log(students2)

// Aufgabe 3
// 
// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
// 
// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2"
]

let prices = [
  400,
  500,
  550,
  600,
  650,
  700
]
let costsUntilC1 = 0

for (const i in levels) {
const level = levels[i]
const price = prices[i]

costsUntilC1 = costsUntilC1 + price
if (level === "A1") {
  continue
}
if (level === "C1") {
  break
}

console.log("Das kostet die Stufe " + level + ": " + price)
console.log("Bis zum Level " + level + " sind es " + costsUntilC1 + "€")
}

// Aufgabe 4
//
// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
// 
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3. 
// Kurs hinzugefügt werden:
let studentsPerCourse = [
  ["Max", "Monika"], // Erster Kurs
  ["Erik", "Erika"] // Zweiter Kurs
]
// Aufgaben:
// 
//  a) Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!
// 
//  b) Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
//     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
//     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
//     Kurs entfernen zu können.
// 
//     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen 
//     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
//     werden konnte, da er ja gar nicht eingeschrieben ist.
//
// Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
// Sprachkursen zurechtkommt!
//
// Bonus-Aufgabe:
// 
//  c) Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein 
//     Programm, welches diesen neuen Teilnehmern in den Sprachkurs 
//     platziert, der bisher noch am wenigsten Teilnehmer hat.
// 
//     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
//     genau gleich viele Teilnehmer haben? Ist das Verhalten
//     für eine Sprachschule akzeptabel?
