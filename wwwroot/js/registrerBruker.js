function validerFornavn(fornavn) {
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if(!ok) {
    $("#feilFornavn").html("Fornavnet må bestå av 2 til 20 bokstaver");
    return false;
    } else {
    $("#feilFornavn").html("");
    return true;
     }
    }

function validerEtternavn(etternavn) {
        const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
        const ok = regexp.test(etternavn);
        if(!ok) {
        $("#feilEtternavn").html("Etternavnet må bestå av 2 til 20 bokstaver");
        return false;
        } else {
        $("#feiletternavn").html("");
        return true;
        }
    }

function validerTelefon(telefon) {
            const regexp = /\d{8}$/;
            const ok = regexp.test(telefon);
            if(!ok) {
            $("#feilTelefon").html("Telefon må bestå av 8 siffer");
            return false;
            } else {
            $("#feilTelefon").html("");
            return true;
        }
    }
    
    function validerEmail(email) {
        const regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const ok = regexp.test(email);
        if(!ok) {
        $("#feilEmail").html("Email må bestå av bokstaver og alfakrøll");
        return false;
        } else {
        $("#feilEmail").html("");
        return true;
    }
}

function lagrePerson() {
    const person = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        email: $("#email").val(),
        telefon: $("#telefon").val()
       
    }
    const url = "Home/sjekkPerson?email=" + person.email

    $.get(url, function (id) {
        if (id != 0) {
            $("#brukt").html("Kunde eksisterer allerede");
        }
        else {
            leggTilPerson(person);


        }
    });
};

function leggTilPerson(person) {
    const url = "Home/lagrePerson?Person=" + person;
    $.post(url, person, function (OK) {
        if (OK) {
            sessionStorage.setItem("id", OK)
            window.location.href = 'index.html'
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });


};
