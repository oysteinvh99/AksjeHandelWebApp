function validerEmail(email) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(email);
    if(!ok) {
        $("#feilemail").html("Navnet må bestå av 2 til 20 bokstaver");
         return false;
    } else {
        $("#feilemail").html("");
    return true;
     }
    }

function loggInn() {
    const email = $("#email").val()      // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endre
    const url = "Home/sjekkPerson?email=" + email

   
    $.get(url, function (id) {
        if (id != 0) {
            sessionStorage.setItem("id", id);
            window.location.href = 'index.html'
        }
        else {
            window.location.href = 'registrerBruker.html'
        }
    });
}


