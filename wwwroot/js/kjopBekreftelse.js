$(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);    //Metode som finner variabler i url
    const params = Object.fromEntries(urlSearchParams.entries());               
    const aksjeID = params.id;                                              //Finner aksjeID i url
    var antall = params.antall;                                             //Finner antall aksjer i url
    hent(aksjeID, antall)                                                   //Kjører hent() metoden
});


//AID er AksjeID og antall er antallet akssjer
function hent(AID, antall) {
    const url = "Home/hentAksje?id="+AID
    $.get(url, function (Aksje) {
        formatter(Aksje, antall,AID);
    });
}

//Formatterer bekreftelse informasjonen
function formatter(Aksje, antall,AID) {
    var totalPris = 0;
    var antallet = 0;
    antallet = parseFloat(antall);
    totalPris = parseFloat(Aksje.verdi) * antallet;
    $("#info").html("Kjøp: " + antallet + " " + Aksje.firma.navn + " aksjer " + "(" + Aksje.verdi + " NOK per aksje)");
    $("#totalPris").html("Totalpris: " + totalPris.toFixed(2) + " kr.");
    $("#antall").html(antallet);
    $("#aksjenSinIDGjemt").html(AID)
}

//Hvis brukeren ikke vil godkjenne så blir han sendt tilbake til main siden
function ikkeGodkjenn() {
    window.location.href = 'aksjehandel.html';
}

//Registrere ordre, kjøp
function bekreftOrdre() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const AID = params.id;
    var antall = 0;
    antall = parseFloat(params.antall);

    console.log(AID);

    const url = "Home/hentAksje?id=" + AID;
    $.get(url, function (Aksjen) {
        const url = "Home/hentPortefolje?id=" + sessionStorage.getItem("id");
        $.post(url, function (portefolje) {
            
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "/" + currentdate.getMonth()      //Kode for å hente nåværende tidspunkt
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
                window.location.href = 'aksjehandel.html';
            });
        });
    });
}
