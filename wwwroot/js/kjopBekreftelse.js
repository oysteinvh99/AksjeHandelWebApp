$(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const aksjeID = params.id;
    var antall = params.antall;
    hent(aksjeID, antall)
});


//AID er AksjeID og antall er antallet akssjer
function hent(AID, antall) {
    const url = "Home/hentAksje?id="+AID
    $.get(url, function (Aksje) {
        formatter(Aksje, antall,AID);
    });
}


function formatter(Aksje, antall,AID) {
    var totalPris = 0;
    var antallet = 0;
    antallet = parseInt(antall);
    totalPris = Aksje.verdi * antallet;
    $("#info").html("Du kjøper " + antallet + ". " + Aksje.firma.navn + " aksjer " + "(" + Aksje.verdi+" pr. aksje)");
    $("#totalPris").html("Totalpris: " + totalPris+" kr.");
    $("#antall").html(antallet);
    $("#aksjenSinIDGjemt").html(AID)
}

//Registrere ordre, kjøp
function bekreftOrdre() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const AID = params.id;
    var antall = 0;
    antall = parseInt(params.antall);

    console.log(AID);

    const url = "Home/hentAksje?id=" + AID;
    $.get(url, function (Aksjen) {
        const url = "Home/hentPortefolje?id=" + sessionStorage.getItem("id");
        $.post(url, function (portefolje) {
            //Hentet fra nettet, datetime
            var currentdate = new Date();
            var datetime = currentdate.getDay() + "/" + currentdate.getMonth()
                + "/" + currentdate.getFullYear() + "  "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":" + currentdate.getSeconds();
            console.log(datetime)

            console.log("antall:" + antall + " AID:" + AID + "Aksjen.ID: " + Aksjen.id)
            var Ordre = {
                Dato: datetime,
                Type: true,
                AntallAksjer: antall,
                Aksje: Aksjen,
                Portefolje: portefolje
            };

            $.post("Home/registrerOrdre", Ordre, function (registrert) {
                if (registrert) {
                    window.location.assign("")
                } else {
                    //Noe gikk feil
                }
            });
        });
    });
}