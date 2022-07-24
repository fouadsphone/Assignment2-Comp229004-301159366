function SendMail(params) {

    var templateParams = {
        from_name: document.getElementById("name").value,
        message: document.getElementById("message").value
    };

    emailjs.send('gmail', 'template_gos5t4l', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent")
        }, function (error) {
            console.log('FAILED...', error);
        });
}