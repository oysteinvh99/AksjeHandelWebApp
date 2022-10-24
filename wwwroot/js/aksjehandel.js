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
            "<td>" + "<input type='number' id='antall' style='width: 2.5em'></td>" +
                "<td> <a class='btn btn-primary' onClick='getInputValue()' href='kjopbekreftelse.html?id=" + aksje.id + "&antall=" + $("#antall").val() + "'>Kjøp</a></td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#aksjene").html(ut);
}

$.get(url, function (id) {
    if (id != 0) {
        window.location.href = 'kjopbekreftelse.html?id=' + id + "?antall=" + antall + "?aid=" + aid;
    }
    else {
        window.location.href = 'registrerBruker.html'
    }
});
