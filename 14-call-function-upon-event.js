$('body').append(
  '<label for="geneInput">Gene: </label>' +
  '<input id="geneInput" name="geneInput" type="text" />'
);

$('#geneInput').on('keyup', function(event) {
  if (event.keyCode === 13 ) { // Key code 13 is "Enter"
    const geneSymbol = $(this).val();
    const geneLocation = getGeneLocation(geneSymbol);
    console.log(geneLocation);
  }
});
