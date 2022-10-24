$(function () {
    hentAlleAksjene();
});

function hentAlleAksjene() {
    $.get("Home/hentAksjer", function (Aksjer) {
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
            "<td>" + "<input type='text' id='antall' style='width: 2.5em'></td>" +
            "<td> <a class='btn btn-primary' href='kjopBekreftelse.html?id=" + aksje.id + "&antall=" + $("#antall").val() + "'>Kjøp</a></td>" +
            "<td> <a class='btn btn-danger' href='salgbekreftelse.html?id=" + aksje.id + "&antall=" + $("#antall").val() + "'>Salg</a></td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#aksjene").html(ut);
}
