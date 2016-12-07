// Hook the new "getGeneLocation" function into our "Enter" event handler

$('#geneInput').on('keyup', function(event) {
  if (event.keyCode === 13 ) { // Key code 13 is "Enter"
    const geneSymbol = $(this).val();
    getGeneLocation(geneSymbol);
  }
});

// We'll use this as the main building block in our genomics web app.
// See https://github.com/eweitz/hour-of-code-at-nih/blob/master/index.html
