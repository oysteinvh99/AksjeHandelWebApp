$(function () {
    hentEnPerson();
});

function validerPerson(person) {
    const regexp1 = /^[a-zA-ZæøåÆØÅ]{1,}$/;
    const regexp2 = /^[a-zA-ZæøåÆØÅ]{1,}$/;
    const regexp3 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const regexp4 = /^[0-9]{8}$/;
    const fornavn = regexp1.test(person.fornavn);
    const etternavn = regexp2.test(person.etternavn);
    const email = regexp3.test(person.email);
    const telefon = regexp4.test(person.telefon);
    var sjekk = 0;
    if (!fornavn) {
        $("#feilFornavn").html("Fornavn kan ikke være tomt, eller innholde spesialtegn og tall");

    } else if (fornavn) {
        $("#feilFornavn").html("");
        var sjekk = sjekk + 1;
    }
    if (!etternavn) {

        $("#feilEtternavn").html("Etternavn kan ikke være tom, eller innholde spesialtegn og tall");
    } else if (etternavn) {
        var sjekk = sjekk + 1;
        $("#feilEtternavn").html("");

    }
    if (!email) {
        $("#feilEmail").html("Emailen er tom eller formatert feil");

    } else if (email) {
        $("#feilEmail").html("");
        var sjekk = sjekk + 1;


    }
    if (!telefon) {
        $("#feilTelefon").html("Telefonummer må bestå av åtte siffer");

    } else if (telefon) {
        $("#feilTelefon").html("");
        var sjekk = sjekk + 1;

    }
    if (sjekk == 4) {
        return true;
    }
    else {
        return false;
    }

}

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
    var sjekk = validerPerson(person);


    if (sjekk){

        $.post("Home/Endre", person, function (OK) {
            if (OK) {
                window.location.href = 'minSide.html';
            }
            else {
                $("#feil").html("Feil i db - prøv igjen senere");
            }
        });
    }
              }

