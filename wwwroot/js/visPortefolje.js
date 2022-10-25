$(function () {
    hentAlleAksjene();
});

function hentAlleAksjene() {
    const url = "Home/visPortefolje?id=" + sessionStorage.getItem("id");
    $.get(url, function (visPortefolje) {
        formaterAksjer(visPortefolje)

    });


    function formaterAksjer(visPortefolje) {
        let totalAntall = 0;
        let totalVerdi = 0;
        let ut = "<table class='table table-striped'>" +
            "<tr>" +
            "<th>Navn</th><th>Antall</th><th>Verdi</th>" +
            "</tr>";
        for (let visning of visPortefolje) {
            ut += "<tr>" +
                "<td>" + visning.aksje.firma.navn + "</td>" +
                "<td>" + visning.antall + "</td>" +
                "<td>" + visning.verdi + "</td>" +
                "</tr>";
            totalAntall = totalAntall + parseInt(visning.antall);
            totalVerdi = totalVerdi + parseInt(visning.verdi);
        }
        ut += "<tr>" +
            "<td>" + "Total:" + "</td>" +
            "<td>" + totalAntall + "</td>" +
            "<td>" + totalVerdi + "</td>" +
            "</tr>";
        ut += "</table>";
        $("#aksjene").html(ut);
    }
}
