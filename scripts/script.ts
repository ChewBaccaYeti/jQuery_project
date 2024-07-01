function Click() {
    $('#myButton').click(function() {
        console.log('Button clicked!');
        alert('Button clicked!');
    });

    $('#changeTextButton').click(function() {
        var newText = $('#textInput').val();
        $('#main-heading').text('newText');
        console.log('Header text changed to: ' + newText);
    });

    $('#toggleButton').click(function() {
        $('#textInput').toggle();
        console.log('Text input visibility toggled.');
    });
}

$(document).ready(function() {
    Click();
    console.log("Click function has been called.");
});
