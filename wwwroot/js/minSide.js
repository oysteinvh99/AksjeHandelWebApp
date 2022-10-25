﻿$(function () {
    hentAlleAksjene();
});

function hentAlleAksjene() {
    const url = "Home/visPortefolje?id=" + sessionStorage.getItem("id");
    $.get(url, function (visPortefolje) {
        formaterAksjer(visPortefolje)
       
    });


    function formaterAksjer(visPortefolje) {
        let ut = "<table class='table table-striped'>" +
            "<tr>" +
            "<th>Navn</th><th>Aksjeverdi</th><th>Antall</th><th>Verdi</th>" +
            "</tr>";
        for (let visning of visPortefolje) {
            ut += "<tr>" +
                "<td>" + visning.aksje.firma.navn + "</td>" +
                "<td>" + visning.aksje.verdi + "</td>" +
                "<td>" + visning.antall + "</td>" +
                "<td>" + visning.verdi + "</td>" +
                "</tr>";
        }
        ut += "</table>";
        $("#aksjene").html(ut);
    }
}