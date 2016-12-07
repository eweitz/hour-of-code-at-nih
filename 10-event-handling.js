// You can also use jQuery to add event handlers, as shown below

// Prints "Hello world!" to the Console
// upon clicking the label ("Gene") for our input field
$('label').on('click', function(event) {
  console.log('Hello world!');
});

// Prints the value of the input field -- i.e. what text we have typed in
// upon pressing "Enter" on the keyboard
$('#geneInput').on('keyup', function(event) {
  if (event.keyCode === 13 ) {
    // Key code 13 is "Enter"
    console.log($(this).val());
  }
});
