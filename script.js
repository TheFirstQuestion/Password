var passwords = {
    "GEORGE!": "puzzle1.jpg",
    "KATHERINE!": "puzzle2.jpg",
    "I <3 U!": "puzzle3.jpg",
    "PUZZLEPALOOZA!": "puzzle4.png",
    "BEGIN!": "answer0.pdf",
    "OLPNEE": "answer1.pdf",
    "GNAPDC": "answer2.pdf",
    "SHADOW": "answer3.pdf",
    "HINT": "answer4.pdf",
    "David": "line-2.png",
    "Cat": "line-3.png",
    "fliq": "line-4.png",
    "tostitos hint of line": "fliq-staph-app.pdf"
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
