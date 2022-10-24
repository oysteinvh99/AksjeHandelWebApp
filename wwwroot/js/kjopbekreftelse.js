$(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const aksjeID = params.id;
    var antall = params.antall;
    const brukerID = params.bid;
    print(aksjeID,antall,brukerID)
});

function print(AID, antall, BID) {
    $("#aksjeID").html(AID);
    $("#antall").html(antall);
    $("#brukerID").html(BID);
}
