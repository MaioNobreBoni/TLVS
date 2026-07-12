const identificationInput = document.getElementById('identification');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const identification = identificationInput.value;

    if (identification === '10' || identification === '007' || identification === '1011' || identification === '4242') {
        alert('Access granted!');
        window.location.href = "painel.html";
    } else {
        alert('Access denied!');
    }
});