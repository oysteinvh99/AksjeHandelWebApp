$(function () {
    hentAlleOrdrene();
});

//Funksjon som henter alle ordre til en bruker
function hentAlleOrdrene() {
    const url = "Home/hentOrdre?id=" + sessionStorage.getItem("id");
    $.post(url, function (portefolje) {
        formaterOrdrene(portefolje)

    });
}

    //Funksjon som formaterer alle ordrene på et ryddig vis
    function formaterOrdrene(portefolje) {
        let ut1 = "<table class='table table-striped'>" +
            "<tr>" +
            "<th>Dato</th><th>Antall</th><th>Navn</th>" +
            "</tr>";
        let ut2 = "<table class='table table-striped'>" +
            "<tr>" +
            "<th>Dato</th><th>Antall</th><th>Navn</th>" +
            "</tr>";
        for (let ordre of portefolje.ordre) {
            if (ordre.type) {
                ut1 += "<tr>" +
                    "<td>" + ordre.dato + "</td>" +
                    "<td>" + ordre.antallAksjer + "</td>" +
                    "<td>" + ordre.aksje.firma.navn + "</td>" +
                    "</tr>";
            }
            else {
                ut2 += "<tr>" +
                    "<td>" + ordre.dato + "</td>" +
                    "<td>" + ordre.antallAksjer + "</td>" +
                    "<td>" + ordre.aksje.firma.navn + "</td>" +
                    "</tr>";

            }

        }
        ut1 += "</table>";
        ut2+="</table>"
        $("#kjøp").html(ut1);
        $("#salg").html(ut2);
    }
