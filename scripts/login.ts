$(document).ready(function() {
    const loginForm : JQuery<HTMLElement> = $('#login-form');
    const usernameInput : JQuery<HTMLElement> = $('#username');
    const passwordInput : JQuery<HTMLElement> = $('#password');
    const loginButton : JQuery<HTMLElement> = $('#loginButton');
    const logoutButton : JQuery<HTMLElement> = $('#logoutButton');
    const welcomeMessage : JQuery<HTMLElement> = $('#welcome-message');
    const usernameDisplay : JQuery<HTMLElement> = $('#usernameDisplay');

    function showLogin(): void {
        loginForm.show();
        welcomeMessage.hide();
    }

    function showWelcome(username : string ): void {
        loginForm.hide();
        welcomeMessage.show();
        usernameDisplay.text(username);
    }

    function login(username : string, password : string): void {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        console.log('Data saved. Username:', username, 'Password:', password);
        showWelcome(username);
    }

    function logout(): void {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        console.log('User logged out.');
        showLogin();
    }

    function isValidPassword(password: string) {
        const regexp : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regexp.test(password);
    }

    loginButton.click(function(): void {
        const username : string = usernameInput.val() as string;
        const password : string = passwordInput.val() as string;
        console.log('Username:', username); // Логируем для проверки
        console.log('Password:', password); // Логируем для проверки

        if (username && password) {
            login(username, password);
        } else {
            console.log('Please enter username and password.');
        }

        if (!username) {
            alert('Please enter a username.');
            return;
        } else if (!password) {
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

    logoutButton.click(function() : void {
        logout();
    });

    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
        showWelcome(storedUsername);
    } else {
        showLogin();
    }
});
