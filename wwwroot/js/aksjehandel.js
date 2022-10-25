$(function () {
    hentAlleAksjene();
});

function hentAlleAksjene() {
    $.get("Home/hentAksjer", function (Aksjer) {
        formaterAksjer(Aksjer);
    });
}
function kjop(AID) {
    var antall = $("#" + AID).val();
    window.location.assign("bestilling.html?id=" + AID + "&antall=" + antall);

}


function formaterAksjer(Aksjer) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Navn</th><th>Pris</th><th>Antall</th><th>Kjøp</th><th>Salg</th>" +
        "</tr>";
    for (let aksje of Aksjer) {
        ut += "<tr>" +
            "<td>" + aksje.firma.navn + "</td>" +
            "<td>" + aksje.verdi + "</td>" +
            "<td>" + "<input type='text' id='" + aksje.id + "' style='width: 2.5em'></td>" +
            "<td> <button onclick='kjop(" + aksje.id + ")'" + ">Kjøp</button></td>" +
            "<td> <button onclick='kjop(" + aksje.id + ")'" + ">Selg</button></a></td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#aksjene").html(ut);
}
