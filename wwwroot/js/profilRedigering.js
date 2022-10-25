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