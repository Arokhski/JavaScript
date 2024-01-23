"use strict"

document.addEventListener("DOMContentLoaded", () => {       //Datei wird eingelesen und erst nach vollständigem Herunterladen benutzt
    const buttonIncrement = document.getElementById("button-increment")  //Konstante wird erstellt und der button mit der id aus de html-datei gezogen
    const buttonReset = document.getElementById("button-reset")
    const counter = document.getElementsByTagName("counter")            //Konstante wird erstellt mit Element "counter" aus dem Dokument


    buttonIncrement.addEventListener("click", () => {
        const currentCounter = parseInt(counter.innerText.split(": ")[1], 10)   
    counter.innerText = "Anzahl Klicks: " + (currentCounter + 1)
    
    //TEXT/String aus "counter" wird zu einem Array aus "anzahl Klick" und "0", weils an der Stelle ": " aufgeteilt 
    //wird (split) und anschleßend mit parseInt zu einer Zahl gemacht zur Basis 10
    

    
    })
})