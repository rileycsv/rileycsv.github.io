document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("PoVtN0spnRGLtV8Rb");
    console.log("EmailJS initialized");

    // Add event listener to the form submit event
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Form submitted");

        // Send form data using EmailJS
        emailjs.sendForm('service_zdo3zri', 'template_3bt3sfj', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send email: ' + JSON.stringify(error));
            });
    });
});