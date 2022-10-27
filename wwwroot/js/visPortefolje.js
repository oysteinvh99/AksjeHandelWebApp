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
            "<th>Aksje</th><th>Antall</th><th>Verdi</th>" +
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
            "<td style='font-weight: bold'>" + "Total:" + "</td>" +
            "<td style='font-weight: bold'>" + totalAntall + "</td>" +
            "<td style='font-weight: bold'>" + totalVerdi + "</td>" +
            "</tr>";
        ut += "</table>";
        $("#aksjene").html(ut);
    }
}
