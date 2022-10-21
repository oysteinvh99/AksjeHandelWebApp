$(function () {
    hentAlleAksjene();
});

function hentAlleAksjene() {
    $.post("Home/hentAksjer", function (Aksjer) {
        formaterAksjer(Aksjer);
    });
}

function formaterAksjer(Aksjer) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Navn</th><th>Pris</th><th></th>" +
        "</tr>";
    for (let aksje of Aksjer) {
        ut += "<tr>" +
            "<td>" + aksje.Firma.Navn + "</td>" +
            "<td>" + aksje.Verdi + "</td>" +
            "<td> <a class='btn btn-primary' href='kjopside.html?id=" + aksje.Id + url + "'>Kjøp</a></td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#aksjene").html(ut);
}
