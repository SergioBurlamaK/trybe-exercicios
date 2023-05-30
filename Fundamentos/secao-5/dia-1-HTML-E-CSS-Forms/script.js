function handleSubmit(event) {
    event.preventDefault();
    if (isNameValid() && isEmailValid() && isReasonValid()) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    } else {
        alert('Dados inválidos');
    }
}

window.onload = function () {
    const submitBtn = document.querySelector("#submit-btn");
    function clearFields() {
        submitBtn.disabled = true;
    }
    submitBtn.addEventListener("click", handleSubmit);
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
};

function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
}

function isNameValid() {
    const nameElement = document.querySelector('#fullName');
    const nameLength = nameElement.value.length;
    return nameLength >= 10 && nameLength <= 40;

}

function isEmailValid() {
    const emailElement = document.querySelector('#email');
    const emailLength = emailElement.value.length;
    return emailLength >= 10 && emailLength <= 50;
}

function isReasonValid() {
    const reasonElement = document.querySelector('#question');
    const reasonLength = reasonElement.value.length;
    return reasonLength > 0 && reasonLength <= 500;
}