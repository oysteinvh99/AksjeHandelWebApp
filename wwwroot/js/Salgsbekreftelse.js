$(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const aksjeID = params.id;
    var antall = params.antall;
    hent(aksjeID, antall)
});


//AID er AksjeID og antall er antallet akssjer
function hent(AID, antall) {
    const url = "Home/hentAksje?id=" + AID
    $.get(url, function (Aksje) {
        formatter(Aksje, antall, AID);
    });
}


function formatter(Aksje, antall, AID) {
    var portofolje = hentPortofolje()//Legg inn brukerID  //Portofolje ID for å hente portofoljen
    for (let aksje of portofolje.aksjer) {
        if (aksje.id == AID) {
            if (aksje.antall < antall) {
                //Du kan ikke selge aksjen, du har ikke nok aksjer
            }
        }
    }

    var totalPris = 0;
    var antallet = 0;
    antallet = parseInt(antall);
    totalPris = Aksje.verdi * antallet;
    $("#info").html("Pris pr. Aksje: " + Aksje.verdi + " og antall aksjer:" + antallet);
    $("#totalpris").html("Total salgspris:" + totalPris);
    $("#antall").html(antallet);
    $("#firmanavn").html("Navnet på firma:" + Aksje.firma.navn);
    $("#aksjenSinIDGjemt").html(AID)
}

//Bekreft salg av aksjer
function bekreftOrdre() {
    var portofolje = hentPortofolje(id)//Legg inn brukerID  //Portofolje ID for å hente portofoljen

    for (let aksje of portofolje.aksjer) { //Portofolje.aksjer er ikke kodet pr. dags dato.
        if (aksje.id == AID) {
            if (aksje.antall < antall) {
                //Du kan ikke selge aksjen, du har ikke nok aksjer
                console.log("Ulovlig action")
                return;
            }
        }
    }

    //Henter aksjen
    function hentAksje(id) {
        const url = "Home/hentAksje?id=" + id
        $.get(url, function (aksje) {
            //Hentet fra nettet, datetime
            //Henter portofoljen
            function hentPortofolje(id) {
                const url = "Home/hentPortefolje?id=" + id
                $.get(url, function (portofolje) {

                    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth() + 1) + "/"
                        + currentdate.getFullYear() + " @ "
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes() + ":";

                    console.log(datetime);

                    var Order = {
                        Dato: datetime,
                        Type: false,
                        AntallAksjer: parseInt($("#antall").val()),
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
                });
            }
        });
    }
}