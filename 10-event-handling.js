$('label').on('click', function(event) {
  console.log('Hello world!');
});

$('#geneInput').on('keyup', function(event) {
  if (event.keyCode === 13 ) {
    // Key code 13 is "Enter"
    console.log($(this).val());
  }
});
