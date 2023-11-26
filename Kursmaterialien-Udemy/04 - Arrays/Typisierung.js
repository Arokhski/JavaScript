"use strict"

/** 
 * In JavaScript sind Arrays nicht typisiert
 * Auch verschachtelte Array sind zulässig!
 */
let liste = [
  "Banane",
  4,
  ["Element 1", "Element 2"]
]
// folgend wird aus dem zweiten Element im ersten Array das erste Element wiedergegeben: Element 1
console.log(liste[2][0])