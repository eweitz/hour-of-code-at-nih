const term = 'BRCA1[symbol] AND human[organism]';
const eutils = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
const esearch = eutils + 'esearch.fcgi';
const params = '?retmode=json&db=gene';
const esearchUrl = esearch + params + '&term=' + term;

$.ajax({url: esearchUrl})
  .then(function(esearchResponse) {
    geneID = esearchResponse.esearchresult.idlist[0];
    console.log('geneID: ' + geneID)
  });
