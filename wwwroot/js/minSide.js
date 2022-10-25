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
