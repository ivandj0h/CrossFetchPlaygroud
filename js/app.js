var content = document.getElementById('content');

fetch('//api.github.com/users/ivandi1980')
    .then(function (res) {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    })
    .then(function (user) {
        content.innerHTML = JSON.stringify(user, null, ' ');
    })
    .catch(function (err) {
        content.innerHTML = err.message;
    });