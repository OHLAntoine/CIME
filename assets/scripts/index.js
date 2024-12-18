// Envoi de mail
function sendEmail(){
    (function(){
        emailjs.init("WJ3IcHoOqkApdz1Zq");
    })();

    let params = {
        firstname: document.querySelector('#nom').value,
        lastname: document.querySelector('#prenom').value,
        email: document.querySelector('#email').value,
        tel: document.querySelector('#tel').value,
        subject: "Demande pour rejoindre le cercle CiME",
        message: document.querySelector('#message').value
    };

    let serviceID = "service_y1nba1c";
    let templateID = "template_ukx0bam";

    emailjs.send(serviceID, templateID, params)
        .then(res=> {
            new bootstrap.Modal(document.querySelector("#SuccessModal")).show();
        })
        .catch(err => {
            new bootstrap.Modal(document.querySelector("#FailedModal")).show();
        });
}