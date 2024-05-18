document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessage.innerHTML = '';

        const name = form.elements['name'].value;
        const phone = form.elements['phone'].value;
        const email = form.elements['email'].value;
        const description = form.elements['description'].value;
        const password = form.elements['password'].value;

        if (!/^\d{10}$/.test(phone)) {
            errorMessage.innerHTML += 'Phone number should be a 10-digit number.<br>';
        }

        if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            errorMessage.innerHTML += 'Email should be a valid email address.<br>';
        }

        if (description.split(/\s+/).length > 200) {
            errorMessage.innerHTML += 'Description should be limited to 200 words.<br>';
        }

        if (!/(?=.*\d)(?=.*[\W_]).{8,}/.test(password)) {
            errorMessage.innerHTML += 'Password should be at least 8 characters long and contain at least one number and one special character.<br>';
        }

        if (errorMessage.innerHTML === '') {
            // Form is valid, proceed with submission
            form.submit();
        }
    });
});
