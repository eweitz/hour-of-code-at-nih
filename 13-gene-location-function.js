// Let's wrap those statements into a function!
// We'll also generalize it to handle any human gene symbol.

function getGeneLocation(geneSymbol) {
  const term = geneSymbol + '[symbol] AND human[organism]';
  const eutils = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
  const esearch = eutils + 'esearch.fcgi';
  const params = '?retmode=json&db=gene';
  const esearchUrl = esearch + params + '&term=' + term;
  let geneID;

  $.ajax({url: esearchUrl})
    .then(function(esearchResponse) {
      geneID = esearchResponse.esearchresult.idlist[0];
      const esummaryUrl = eutils + 'esummary.fcgi' + params + '&id=' + geneID;
      return $.ajax({ url: esummaryUrl });
    })
    .then(function(esummaryResponse) {
      const info = esummaryResponse.result[geneID].genomicinfo[0];
      const loc = {
        chr: info.chrloc,
        chrAccVer: info.chraccver,
        start: info.chrstart,
        stop: info.chrstop
      };
      console.log('Location of gene ' + geneSymbol + ':');
      console.log(loc);
    });

}
