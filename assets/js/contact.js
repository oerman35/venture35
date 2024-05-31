document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        'name': name,
        'email': email,
        'message': message
    };

    console.log('data', data);

    fetch('https://maker.ifttt.com/trigger/venture35_contact_form/json/with/key/deaGSAOp-rqf60HoumGb8T', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(json => {
            alert('Thank you for your message! You\'ll hear from me soon.');
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
});
