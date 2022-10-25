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
