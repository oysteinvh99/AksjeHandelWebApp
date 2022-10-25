function validerEmail(email) {
    const regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const ok = regexp.test(email);
    if(!ok) {
        $("#feilEmail").html("Mailen må være skrevet i riktig format");
         return false;
    } else {
        $("#feilEmail").html("");
    return true;
     }
    }

function loggInn() {
    const email = $("#email").val()      // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endre
    const url = "Home/sjekkPerson?email=" + email

    $.get(url, function (id) {
        if (id != 0) {
            sessionStorage.setItem("id", id);
            window.location.href = 'indexLoggetInn.html'
        }
        else {
            window.location.href = 'registrerBruker.html'
        }
    });
}
