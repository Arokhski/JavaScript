"use strict"

let abc = "3.641"

// String in eine Ganzzahl umwandeln, die Zahl hinter dem komma gibt es Zahlensystem an (10er system)
console.log(parseInt(abc, 10))

// String in eine Kommazahl umwandeln
console.log(parseFloat(abc))

// Achtung beim Rechnen mit Kommazahlen!
let result = 50.35 % 6 - 2.35
console.log(result)

// Lösung: Kommazahlen vermeiden!
let result2 = 5035 % 600 - 235
console.log(result2)

// Zahl zu String
let n = 3.145
console.log(1 + n)
console.log(n.toExponential())
console.log(n.toFixed(2))
console.log(n.toPrecision(2))