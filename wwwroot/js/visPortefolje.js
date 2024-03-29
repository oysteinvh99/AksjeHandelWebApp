﻿
$(function () {
    // hentAlleAksjene();
    yourFunction();
});

//Funksjon som kaller på seg selv i intervaller 
function yourFunction() {
    hentAlleAksjene();
    oppdater();
    setTimeout(yourFunction, 10000);

}

//Oppdater funksjon som oppdaterer børsjens priser
function oppdater() {
    $.get("Home/oppdaterBors", function (Aksjer) {
        

    });
}
//Henter alle aksjer 
function hentAlleAksjene() {
    const url = "Home/visPortefolje?id=" + sessionStorage.getItem("id");
    $.get(url, function (visPortefolje) {
        formaterAksjer(visPortefolje)

    });
}

    //Formatterer alle akskjer som brukeren eier 
    function formaterAksjer(visPortefolje) {
        let totalAntall = 0;
        let totalVerdi = 0;
        let ut = "<table class='table table-striped' style='table-layout: fixed'>" +
            "<tr>" +
            "<th>Aksje</th><th>Antall</th><th>Verdi</th>" +
            "</tr>";
        for (let visning of visPortefolje) {
            ut += "<tr>" +
                "<td>" + visning.aksje.firma.navn + "</td>" +
                "<td>" + visning.antall + "</td>" +
                "<td>" + visning.verdi + "</td>" +
                "</tr>";
            totalAntall = totalAntall + parseFloat(visning.antall);
            totalVerdi = totalVerdi + parseFloat(visning.verdi);
        }

        
     
         ut += "<tr>" +
             "<td>" + "Verdi:" + "</td>" +
             "<td>" + totalAntall + "</td>" +
             "<td>" + totalVerdi.toFixed(2) + "</td>" +
            "</tr>";
        ut += "</table>";
        $("#aksjene").html(ut);
        const url1 = "Home/kjoptFor?id=" + sessionStorage.getItem("id");
        $.get(url1, function (pris) {
            hentAvkastnig(pris, totalAntall, totalVerdi);


        });
        
    }

    //Henter avkastning til brukeren 
    function hentAvkastnig(pris, totalAntall, totalVerdi) {

        let ut1 = "<table class='table table-striped' style='table-layout: fixed'>" +
            "<tr>" +
            "<th>Type</th><th>Antall</th><th>Verdi</th>" +
            "</tr>";
        ut1 += "<tr>" +
            "<td>" + "Kjøpssum:" + "</td>" +
            "<td>" + totalAntall + "</td>" +
            "<td>" + pris.toFixed(2) + "</td>" +
            "</tr>";

        let forskjell = totalVerdi.toFixed(2) - pris.toFixed(2);
        let prosent = 0;
        if (pris < totalVerdi) {
            prosent = (totalVerdi / pris) - 1;
            prosent = prosent * 100;
            
        }
        else {
            prosent = 1 - (totalVerdi / pris);
            prosent = prosent * (-1);
            prosent = prosent * 100;

        }
    

        ut1 += "<tr>" +
            "<td>" + "Avkastning:" + "</td>" +
            "<td>" + forskjell.toFixed(2) + " NOK" + "</td>" +
            "<td>" + prosent.toFixed(2) + "%" + "</td>" +
            "</tr>";
        ut1 += "</table>";
        $("#avkasting").html(ut1);

    }

