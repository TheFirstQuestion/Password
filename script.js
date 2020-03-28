var passwords = {
    "GEORGE!": "puzzle1.pdf",
    "KATHERINE!": "puzzle2.pdf",
    "I <3 U!": "puzzle3.pdf",
    "PUZZLEPALOOZA!": "puzzle4.pdf",
    "OLPNEE": "answer1.png",
    "GNAPDC": "answer2.png",
    "SHADOW": "answer3.png",
    "HINT": "answer4.png"
};

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        var value = $("#pwdField").val();
        if (value in passwords) {
            $("#resultText").removeClass("failure");
            $("#resultText").addClass("success");
            $("#resultText").html("Congratulations!");
            $("#prizeButton").removeClass("d-none");
            $("#prizeButton").addClass("d-block");
            $("#prizeButton").attr("href", "prizes/" + passwords[value])
        } else {
            $("#resultText").addClass("failure");
            $("#resultText").html("That is not correct.");
        }
    }
});
