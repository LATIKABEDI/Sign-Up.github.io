function validateForm() {
    submitFlag = true;
    var x = document.forms["latika"]["uName"].value.length;
    if (x > 8 ) {
        submitFlag = false;
        alert("Username must not be greater than 8 characters");
        return false;
    }
    return submitFlag;
  }

function passwordValidation()
{
    regexPattern = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;
    inputTextVal = document.getElementById("pass");
    if(inputTextVal.value.match(regexPattern))
    {
        return true;
    }
    else if(inputTextVal.value.length > 8)
    {
        alert("Password must not be greater than 8 characters");
    }
    else
    {
        alert("Password must contain 1 special character.");
    return false;
    }
}