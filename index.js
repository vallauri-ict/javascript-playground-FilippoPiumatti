"use strict";

let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;

window.onload = function () {
    _cognome = document.getElementsByName("cognome")[0];
    _nome = document.getElementById("nome");
    // [TODO: mettere anche gli altri riferimenti]
}

function validaForm() {
    // if (document.datiUtente.cognome.value == "") {
    if (_cognome.value == "") {
        // alert("Inserire cognome");
        // _cognome.style.borderBottom = "1px solid red";
        // addClass(_cognome, "red-border");
        _cognome.classList.add("red-border");
        return false;
    } else {
        // _cognome.style.borderBottom = "1px solid darkgray";
        // removeClass(_cognome, "red-border");
        _cognome.classList.remove("red-border");
    }
    if (document.datiUtente.nome.value == "") {
        alert("Inserire nome");
        return false;
    }
    if (document.datiUtente.matricola.value == "") {
        alert("Inserire matricola");
        return false;
    }
    var v = parseInt(document.datiUtente.matricola.value);
    if (isNaN(v)) {
        alert("La matricola deve essere un numero");
        return false;
    }
    if (document.datiUtente.regione.value == "nessuna") {
        alert("Selezionare una regione");
        return false;
    }
    if ((document.datiUtente.email.value == "") && (document.datiUtente.tel.value == "")) {
        alert("Inserire o l’email o il numero di telefono");
        return false;
    }
    alert("Dati inseriti correttamente");
    return true;
}

function addClass(_element, _classNameToAdd) {
    var arr;
    arr = _element.className.split(" ");
    if (arr.indexOf(_classNameToAdd) == -1) {
        _element.className += " " + _classNameToAdd;
    }
}

function removeClass(_element, _classNameToRemove) {
    _element.className = _element.className.replace(_classNameToRemove, "");
}
















/*

let _imgBox;
let _imgRoll;
let _lst;
let _opts;

window.onload = function () {
    _imgBox = document.getElementById("imgBox");
    _imgRoll = document.getElementById("imgRoll");
    _imgBox.style.backgroundImage = "url('img/img1.jpg')";
    _imgRoll.style.backgroundImage = "url('img/img1.jpg')";
    _lst = document.getElementById("lstImmagini");
    _opts = document.getElementsByName("opt");
    setRadioButtonsClick();
}

function setRadioButtonsClick() {
    for (var i = 0; i < _opts.length; i++) {
        // _opts[i].setAttribute("onclick", "cambiaImmagine(" + _opts[i].value + ")");
        _opts[i].addEventListener("click", function () { cambiaImmagine(this.value) });
    }
}

function cambiaImmagine(num) {
    let imageNum = Number(num) + 1;
    console.log(imageNum);
    _imgBox.style.backgroundImage = "url('img/img" + imageNum + ".jpg')";
    _lst.value = num;
    _opts[num].checked = true;
}

function rollOn() {
    let imageNum = Math.floor(Math.random() * 3) + 2;
    _imgRoll.style.backgroundImage = "url('img/img" + imageNum + ".jpg')";
}

function rollOff() {
    _imgRoll.style.backgroundImage = "url('img/img1.jpg')";
}

*/
