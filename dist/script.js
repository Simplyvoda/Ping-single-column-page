const inputText = document.getElementById('email-text');

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText !== null) {
        if (inputText.value.match(mailformat)) {
            document.getElementById("error-message").style.display = "none";
            return true;
        }
        else {
            document.getElementById("error-message").style.display = "block";
            return false;
        }
    }
    else {
        document.getElementById("null-message").style.display = "block"; //this line doesn't work
    }

}
