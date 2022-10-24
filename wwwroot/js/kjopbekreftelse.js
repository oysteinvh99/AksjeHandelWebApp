$(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const aksjeID = params.id;
    var antall = params.antall;
    hent(aksjeID, antall)
});

function hent(AID, antall) {
     var Aksje = {
        id: null,
        Verdi: null,
        Firma: null
    }
    const url = "Home/hentAksje?id="+AID
    $.get(url, Aksje, function (Aksje) {
        formatter(Aksje, antall);
    });
}

function formatter(Aksje, antall) {
    var totalPris = 0;
    var antallet = 0;
    antallet = parseInt(antall);
    totalPris = Aksje.verdi * antallet;
    $("#brukerID").html("Pris pr. Aksje: " + Aksje.verdi + " og antall aksjer:" + antallet);
    $("#aksjeID").html("Totalpris:" + totalPris);
    $("#antall").html("Navnet på firma:" + Aksje.firma.navn);
    
}