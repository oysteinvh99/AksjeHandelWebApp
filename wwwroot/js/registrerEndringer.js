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

function rediger() {
    var person = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        email: $("#email").val(),
        telefon: $("#telefon").val(),
        id: sessionStorage.getItem("id")
    }

      
    $.post("Home/Endre", person, function (OK) {
        if (OK) {
            window.location.href = 'minSide.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
              }

