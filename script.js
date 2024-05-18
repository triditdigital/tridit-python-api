fetch('http://127.0.0.1:5000/get-password')
    .then(data => data.json())
    .then(data => {
        const password = data.obj[0].Password;
        const result = document.getElementById('password')

        result.innerHTML = password
    })