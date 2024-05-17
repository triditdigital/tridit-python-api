document.addEventListener("DOMContentLoaded", function() {
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let passw = [1];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 4; i++) {
        let x = getRandomInt(1, 25);
        let y = getRandomInt(0, 9);
        let word = letters[x];
        passw.push(word);
        passw.push(y);
    }

    passw.shift();

    for (let i = passw.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passw[i], passw[j]] = [passw[j], passw[i]];
    }

    let result = passw.join('');

    const final_pass = document.getElementById("password");
    final_pass.innerHTML = result;
});
