function loggInn() {
    const email = $("#email").val()      // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endre
    const url = "Home/sjekkPerson?email=" + email

    $.get(url, function (id) {
        if (id != 0) {
            window.location.href = 'index.html?id=' + id;
        }
        else {
            window.location.href = 'registrerBruker.html'
        }
    });
}
