document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        document.getElementById('message').textContent = `Cadastro realizado com sucesso! Nome: ${name}, Email: ${email}, Telefone: ${phone}`;
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});
