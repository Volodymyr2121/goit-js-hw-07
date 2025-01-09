const form = document.querySelector('.login-form')
const onFormSubmit = event => {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const data = {
        email: formEl.email.value.trim(),
        pass: formEl.password.value.trim(),
    };
    if (!data.email || !data.pass) {
        alert('All form fields must be filled in');
        return;
    }
    console.log(data);
    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);

