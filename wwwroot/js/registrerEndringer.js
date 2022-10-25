$(function () {
    hentEnPerson();
});

function hentEnPerson() {
    const url = "Home/hentPerson?id=" + sessionStorage.getItem("id");
    $.get(url, function (person) {
        formaterPerson(person)

    });


    function formaterPerson(person) {
        $("#fornavn").val(person.fornavn)
        $("#etternavn").val(person.etternavn)
        $("#email").val(person.email)
        $("#telefon").val(person.telefon)

    }
}

