$(function () {
    hentEnPerson();
});

//Henter en gitt person utifra session id
function hentEnPerson() {
    const url = "Home/hentPerson?id=" + sessionStorage.getItem("id");
    $.get(url, function (person) {
        formaterPerson(person)
       
    });
    function formaterPerson(person) {
        $("#fornavn").html(person.fornavn)
        $("#etternavn").html(person.etternavn)
        $("#email").html(person.email)
        $("#telefon").html(person.telefon)
      
    }
}

//Slett bruker funksjon som sletter brukeren
function slettBruker() {
    const url = "Home/slettBruker?id=" + sessionStorage.getItem("id");
    $.get(url, function (ok) {
        if (ok) {
            loggUt();
        }
    });

}

//Logg ut funksjon som logger ut brukeren
function loggUt() {
    sessionStorage.clear("id");
    window.location.href = 'index.html';

}

//Funksjon som sender brukeren til visOrdre og viser alle ordrene til brukeren
function seOrdre() {
    window.location.href = 'visOrdre.html';

}



