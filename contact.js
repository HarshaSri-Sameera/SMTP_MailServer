
function sendEmail(){
    Email.send({
        
        Host : "smtp.gmail.com",
        Username : "madmaxcool7@gmail.com",
        Password : "RottenWorld",
        To : "madmaxcool7@gmail.com",
        
        From : document.getElementById("email").value,
        Subject : "New Contact from",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value

    }).then(
      message => alert("Message sent succesfully!")
    );
}