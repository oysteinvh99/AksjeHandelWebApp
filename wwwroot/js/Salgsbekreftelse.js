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
    var totalPris = 0;
    var antallet = 0;
    antallet = parseInt(antall);
    totalPris = Aksje.verdi * antallet;
    $("#info").html("Du selger " + antallet + ". " + Aksje.firma.navn + " aksjer " + "(" + Aksje.verdi + " pr. aksje)");
    $("#totalPris").html("Totalpris: " + totalPris + " kr.");
    $("#antall").html(antallet);
    $("#aksjenSinIDGjemt").html(AID)
}

function ikkeGodkjenn() {
    window.location.href = 'aksjehandel.html';
}

//Registrere ordre, kjøp
function bekreftOrdre() {
   


    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const AID = params.id;
    var antall = 0;
    antall = parseInt(params.antall);
    var sjekk = 0;
        const url = "Home/visPortefolje?id=" + sessionStorage.getItem("id");
    $.post(url, function (visPortefolje) {
        for (let visning of visPortefolje) {
            if (parseInt(visning.antall) > antall && visning.aksje.id == AID) {
                registrerOrdre();
                sjekk = 1;
            }
            else if (parseInt(visning.antall) < antall && visning.aksje.id == AID) {
                sjekk = 1;
                forLite(visning);
               
            }
           

        }
        if (sjekk == 0) {
            harIkke();
        }
      
       
     
    });
    

    function registrerOrdre() {
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
                    Type: false,
                    AntallAksjer: antall,
                    Aksje: Aksjen,
                    Portefolje: portefolje
                };

                $.post("Home/registrerOrdre", Ordre, function (registrert) {
                    if (registrert) {
                        window.location.href = 'aksjehandel.html';
                    } else {
                        //Noe gikk feil
                    }
                });
            });
        });
    }
    function forLite(visning) {
        $("#feil").html("Du prøvde å kjøpe " + antall + " av " + visning.aksje.firma.navn+ ". I din portefølje har du " + visning.antall + " av aksjen");
    }
    function harIkke() {
        $("#feil").html("Denne aksjen har du ikke i porteføljen din");


    }

    
       
    
}
