// require('jest-environment-jsdom-global');
require('../scripts/login');

document.body.innerHTML = `
<div id="login-form">
    <label for="username"></label>
    <input type="text" id="username" placeholder="Enter your username">
    <label for="password"></label>
    <input type="password" id="password" placeholder="Enter your password">
    <button id="loginButton">Login</button>
</div>
<div id="welcome-message" style="display: none;">
    <p>Welcome, <span id="usernameDisplay"></span>!</p>
    <button id="logoutButton">Logout</button>
</div>
`;

function isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}


describe('Login form', () : void => {
    beforeEach(() : void => {
        sessionStorage.clear();
        jest.clearAllMocks();
    });

    test('should show alert if username is missing', () : void => {
        const loginButton = $('#loginButton');
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        $('#username').val('');
        $('#password').val('');
        loginButton.trigger('click');

        expect(alertMock).toHaveBeenCalledWith('Please enter a username.');
    });

    test('should show alert if password is missing', () : void => {
        const loginButton = $('#loginButton');
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        $('#username').val('');
        $('#password').val('');
        loginButton.trigger('click');

        expect(alertMock).toHaveBeenCalledWith('Please enter a password.');
    });

    test('should show alert if password is invalid', () : void => {
        const loginButton = $('#loginButton');
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        $('#username').val('');
        $('#password').val('');
        loginButton.trigger('click');

        expect(alertMock).toHaveBeenCalledWith('Password must contain at least 8 characters, including uppercase, lowercase letters, numbers, and special characters. Spaces are not allowed.');
    });

    test('should save username and password in sessionStorage', () : void => {
        const loginButton = $('#loginButton');

        $('#username').val('');
        $('#password').val('');
        loginButton.trigger('click');

        expect(sessionStorage.getItem('username')).toBe('');
        expect(sessionStorage.getItem('password')).toBe('');
    });
});
