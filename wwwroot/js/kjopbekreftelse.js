$(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const aksjeID = params.id;
    var antall = params.antall;
    hent(aksjeID, antall)
});


//AID er AksjeID og antall er antallet akssjer
function hent(AID, antall) {
     var Aksje = {
        id: null,
        Verdi: null,
        Firma: null
    }
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
    $("#brukerID").html("Pris pr. Aksje: " + Aksje.verdi + " og antall aksjer:" + antallet);
    $("#aksjeID").html("Totalpris:" + totalPris);
    $("#antall").html("Navnet på firma:" + Aksje.firma.navn);
    $("#AksjenSinIDGjemt").html(AID)
}

//Registrere ordre, kjøp
function bekreftOrdre() {
    var portofolje = hentPortofolje()//Legg inn brukerID  //Portofolje ID for å hente portofoljen
    var aksje = hentAksje($("#AksjenSinIDGjemt").val());
    //Hentet fra nettet, datetime
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":";
    console.log(datetime);

    var Order = {
        Dato: datetime,
        Type: kjøp,
        Aksje: aksje,
        Portofolje: portofolje
    };

    $.get("Home/registrerOrdre", Order, function (registrert) {
        if (registrert != null) {
            //Det gikk ikke an å registrere
        }
        else {
            //Feilmelding
        }
    });
}

function hentPortofolje(id) {
    const url = "Home/hentPortofolje?id=" + id
    $.get(url, function (portofolje) {
        return portofolje;
    });
}

function hentAksje(id) {
    const url = "Home/hentAksje?id=" + id
    $.get(url, function (aksje) {
        return aksje;
    });
}