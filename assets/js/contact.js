document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        "name": name,
        "email": email,
        "message": message
    };

    console.log('data', data);

    fetch('https://webhook.site/8a4cba53-bd90-4735-970f-a4348c811eab', {
        method: 'POST',
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=utf-8"
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
