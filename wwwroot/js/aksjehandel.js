$(function () {
    yourFunction();

});
function yourFunction() {
    oppdater();
    hentAlleAksjene();
    setTimeout(yourFunction, 10000);
    
}

function hentAlleAksjene() {
    $.get("Home/hentAksjer", function (Aksjer) {
        readText(Aksjer);
        formaterAksjer(Aksjer);
        });
}
function oppdater() {
    $.get("Home/oppdaterBors", function (Aksjer) {
    });
    
}

function validerTall(antall) {
    const regexp = /^[0-9]{1,10}$/;
    const ok = regexp.test(antall);
    if (!ok) {
        return false;
    } else {
        return true;
    }
}

function kjop(AID) {
    var antall = $("#" + AID).val();
    var sjekk = validerTall(antall)
    if (sjekk) {
        window.location.assign("bestilling.html?id=" + AID + "&antall=" + antall);
    }
    else {
        $("#feilTall").html("Orderen må innholdet et antall");

    }

}
function selg(AID) {
    var antall = $("#" + AID).val();
    var sjekk = validerTall(antall)
    if (sjekk) {
        window.location.assign("bestillingSalg.html?id=" + AID + "&antall=" + antall);
    }
    else {
        $("#feilTall").html("Ordren må innholde et antall");

    }

}



function formaterAksjer(Aksjer) {
    let ut = "<table class='table table-striped' style='table-layout: fixed'>" +
        "<tr>" +
        "<th>Aksje</th><th>Pris</th><th>Antall</th><th>Kjøp</th><th>Salg</th>" +
        "</tr>";
    for (let aksje of Aksjer) {
        ut += "<tr>" +
            "<td>" + aksje.firma.navn + "</td>" +
            "<td>" + aksje.verdi + "</td>" +
            "<td>" + "<input on type='text' id='" + aksje.id + "' style='width: 2.5em'></td>" +
            "<td> <button class='btn btn-primary' onclick='kjop(" + aksje.id + ")'" + ">Kjøp</button></td>" +
            "<td> <button class='btn btn-danger' onclick='selg(" + aksje.id + ")'" + ">Selg</button></td>" +
            "</tr>";
        let navn = ' '+aksje.firma.navn
        
        

    }
    ut += "</table>";
    $("#aksjene").html(ut);
    for (let aksjene of Aksjer) {
        let navnet = ' ' + aksjene.firma.navn
        const fromSessionStorage = sessionStorage.getItem(navnet);
        const parsed = JSON.parse(fromSessionStorage);
        $('#' + aksjene.id).val(parsed).trigger('change');


    }
}
function readText(Aksjer) {
    for (let aksje of Aksjer) {
        let navnet = ' ' + aksje.firma.navn;
        let val = $('#' + aksje.id).val();
        sessionStorage.setItem(navnet, JSON.stringify(val));
        




    }
}
