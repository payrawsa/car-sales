


function contactForm(){
    var form = document.forms[0];

    var firstName = form[0].value;
    var lastName = form[1].value;
    var issue = form[2].value;
    var subject = form[3].value;

    alert("Your form has been submitted " + firstName + " " + lastName);
}