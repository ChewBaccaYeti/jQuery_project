$(document).ready(function() {
    const loginForm = $('#login-form');
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const loginButton = $('#loginButton');
    const logoutButton = $('#logoutButton');
    const welcomeMessage = $('#welcome-message');
    const usernameDisplay = $('#usernameDisplay');

    function showLogin() {
        loginForm.show();
        welcomeMessage.hide();
    }

    function showWelcome(username) {
        loginForm.hide();
        welcomeMessage.show();
        usernameDisplay.text(username);
    }

    function login(username, password) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        console.log('Data saved. Username:', username, 'Password:', password);
        showWelcome(username);
    }

    function logout() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        console.log('User logged out.');
        showLogin();
    }

    loginButton.click(function() {
        const username = usernameInput.val();
        const password = passwordInput.val();
        console.log('Username:', username); // Логируем для проверки
        console.log('Password:', password); // Логируем для проверки

        if (username && password) {
            login(username, password);
        } else {
            console.log('Please enter username and password.');
        }
    });

    logoutButton.click(function() {
        logout();
    });

    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
        showWelcome(storedUsername);
    } else {
        showLogin();
    }
});
