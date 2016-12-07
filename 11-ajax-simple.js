// We can get data from web services using Ajax
// Here we use the NCBI EUtils web API to get the location of the BRCA1 gene

// More on EUtils: https://www.ncbi.nlm.nih.gov/books/NBK25500/
const term = 'BRCA1[symbol] AND human[organism]';
const eutils = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
const esearch = eutils + 'esearch.fcgi';
const params = '?retmode=json&db=gene';
const esearchUrl = esearch + params + '&term=' + term;

$.ajax({url: esearchUrl})
  .then(function(esearchResponse) {
    // When we get a response, we can treat it like a JavaScript object.
    // This is because the response content is formatted as
    // JSON (JavaScript Object Notation)
    geneID = esearchResponse.esearchresult.idlist[0];
    console.log('geneID: ' + geneID)
  });
