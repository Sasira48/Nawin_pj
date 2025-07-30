document.querySelector('form').addEventListener('submit', function(event) {
    let username = document.querySelector('input[name="username"]').value;
    let password = document.querySelector('input[name="password"]').value;

    if (username === '' || password === '') {
        alert("Both fields are required!");
        event.preventDefault();
    }
});