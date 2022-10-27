$(function () {
    hentEnPerson();
});

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
function slettBruker() {
    const url = "Home/slettBruker?id=" + sessionStorage.getItem("id");
    $.get(url, function (ok) {
        if (ok) {
            loggUt();
        }



    });

}

function loggUt() {
    sessionStorage.clear("id");
    window.location.href = 'index.html';

}
function seOrdre() {
    window.location.href = 'visOrdre.html';

}



