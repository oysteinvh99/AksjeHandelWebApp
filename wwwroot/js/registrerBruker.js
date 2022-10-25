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
            window.location.href = 'indexLoggetInn.html'
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });


};
