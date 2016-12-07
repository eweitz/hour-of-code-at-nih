// The geneID we got in the previous example isn't very useful in itself.
// But we can use that geneID as a key to get useful information...

const term = 'BRCA1[symbol] AND human[organism]';
const eutils = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
const esearch = eutils + 'esearch.fcgi';
const params = '?retmode=json&db=gene';
const esearchUrl = esearch + params + '&term=' + term;
let geneID;

$.ajax({url: esearchUrl})
  .then(function(esearchResponse) {
    geneID = esearchResponse.esearchresult.idlist[0];

    // Pass the geneID from ESearch into ESummary to get useful information
    const esummaryUrl = eutils + 'esummary.fcgi' + params + '&id=' + geneID;

    // We can chain together Ajax requests like so.  This is a "Promise chain".
    return $.ajax({ url: esummaryUrl });
  })
  .then(function(esummaryResponse) {
    // Here we handle the response of the request we sent in three lines above
    console.log(esummaryResponse.result[geneID].genomicinfo[0])
  })
