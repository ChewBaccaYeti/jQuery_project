function Click() : void {
    $('#myButton').click(function() : void {
        console.log('Button clicked!');
        alert('Button clicked!');
    });

    $('#changeTextButton').click(function() : void {
        var newText : string = $('#textInput').val() as string;
        $('#main-heading').text(newText);
        console.log('Header text changed to: ' + newText);
    });

    $('#toggleButton').click(function(): void {
        $('#textInput').toggle();
        console.log('Text input visibility toggled.');
    });
}

$(document).ready(function(): void {
    Click();
    console.log("Click function has been called.");
});
