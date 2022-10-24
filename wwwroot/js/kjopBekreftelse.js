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

    console.log(AID);

    var portofolje = hentPortofolje(1); //Portofolje ID for å hente portofoljen
    var aksje = hentAksje(AID);

    //Hentet fra nettet, datetime
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    var Ordre = {
        Dato: datetime,
        Type: true,
        Antall: $("#antall").val(),
        Aksje: aksje,
        Portofolje: portofolje
    };

    $.get("Home/registrerOrdre", Ordre, function (registrert) {
       // window.location.href("index.html");
    });
}

function hentPortofolje(id) {
    const url = "Home/hentPortefolje?id=" + id
    $.get(url, function (portofolje) {
        return portofolje;
    });
}

function hentAksje(AID) {
    const url = "Home/hentAksje?id="+AID
    $.get(url, function (Aksje) {
        return Aksje;
    });
}
