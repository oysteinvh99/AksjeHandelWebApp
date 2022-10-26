function validerPerson(person) {
    const regexp1 = /^[a-zA-ZæøåÆØÅ]{1,}$/;
    const regexp2 = /^[a-zA-ZæøåÆØÅ]{1,}$/;
    const regexp3 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const regexp4 = /^[0-9]{8}$/;
    const fornavn = regexp1.test(person.navn);
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





function lagrePerson() {
    const person = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        email: $("#email").val(),
        telefon: $("#telefon").val()

    }
    ok = validerPerson(person);


    const url = "Home/sjekkPerson?email=" + person.email

    if (ok) {

        $.get(url, function (id) {
            if (id != 0) {
                $("#brukt").html("Kunde eksisterer allerede");
            }
            else {

                leggTilPerson(person);



            }
        });
}
};


function leggTilPerson(person) {
    const url = "Home/lagrePerson?Person=" + person;
    $.post(url, person, function (OK) {
        if (OK) {
            sessionStorage.setItem("id", OK)
            window.location.href = 'indexLoggetInn.html'
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });


};
