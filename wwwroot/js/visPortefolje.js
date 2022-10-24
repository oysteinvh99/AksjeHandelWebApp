$(function () {
    hentAlleAksjene();
});

function hentAlleAksjene() {
    $.get("Home/hentPortefoljeAksjer", function (Aksjer) {
        formaterAksjer(Aksjer);
    });
}

function formaterAksjer(Aksjer) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Navn</th><th>Pris</th><th>Antall</th><th>Kjøp</th>" +
        "</tr>";
    for (let aksje of Aksjer) {
        ut += "<tr>" +
            "<td>" + aksje.firma.navn + "</td>" +
            "<td>" + aksje.verdi + "</td>" +
            "<td>" + aksje.antall + "</td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#aksjene").html(ut);
}
