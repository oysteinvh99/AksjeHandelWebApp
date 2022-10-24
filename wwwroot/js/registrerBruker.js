<<<<<<< Updated upstream
﻿function lagrePerson() {
=======
﻿
function registrerBruker() {
>>>>>>> Stashed changes
    const person = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        email: $("#email").val(),
<<<<<<< Updated upstream
        telefon: $("#telefon").val()
       
=======
        nummer: $("#telefon").val()
>>>>>>> Stashed changes
    }
    const url = "Home/sjekkPerson?email=" + person.email

    $.get(url, function (id) {
        if (id != 0) {
<<<<<<< Updated upstream
            $("#brukt").html("Kunde eksisterer allerede");
=======
            window.location.href = 'leggInn.html';
>>>>>>> Stashed changes
        }
        else {
            leggTilPerson(person);


        }
    });
};

function leggTilPerson(person) {
<<<<<<< Updated upstream
    const url = "Home/lagrePerson?Person=" + person;
    $.post(url, person, function (OK) {
        if (OK) {
            sessionStorage.setItem("id", OK)
            window.location.href = 'index.html'
=======
    const url = "Home/registrerBruker?person=" + person;
    $.post(url, person, function (OK) {
        if (OK) {
            sessionStorage.setItem("id", OK);
            window.location.href = 'aksjehandel.html
>>>>>>> Stashed changes
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });


};
