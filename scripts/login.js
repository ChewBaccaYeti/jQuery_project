$(document).ready(function () {
    var loginForm = $('#login-form');
    var usernameInput = $('#username');
    var passwordInput = $('#password');
    var loginButton = $('#loginButton');
    var logoutButton = $('#logoutButton');
    var welcomeMessage = $('#welcome-message');
    var usernameDisplay = $('#usernameDisplay');
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
    function isValidPassword(password) {
        var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regexp.test(password);
    }
    loginButton.click(function () {
        var username = usernameInput.val();
        var password = passwordInput.val();
        console.log('Username:', username); // Логируем для проверки
        console.log('Password:', password); // Логируем для проверки
        if (username && password) {
            login(username, password);
        }
        else {
            console.log('Please enter username and password.');
        }
        if (!username) {
            alert('Please enter a username.');
            return;
        }
        else if (!password) {
            alert('Please enter a password.');
            return;
        }
        if (!isValidPassword(password)) {
            alert('Password must contain at least 8 characters, ' +
                'including uppercase, ' +
                'lowercase letters, numbers, ' +
                'and special characters. ' +
                'Spaces are not allowed.');
            return;
        }
        login(username, password);
    });
    logoutButton.click(function () {
        logout();
    });
    var storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
        showWelcome(storedUsername);
    }
    else {
        showLogin();
    }
});
