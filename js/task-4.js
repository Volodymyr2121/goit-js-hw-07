const form = document.querySelector('.login-form')
const onFormSubmit = event => {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const info = {
        email: formEl.email.value.trim(),
        pass: formEl.password.value.trim(),
    };
    if (!info.email || !info.pass) {
        alert('All form fields must be filled in');
        return;
    }
    console.log(info);
    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);
