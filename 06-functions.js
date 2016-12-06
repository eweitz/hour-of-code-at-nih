// This function takes a parameter "gene".
// "gene" is an object, and we use its properties to
// return a string representation of the gene's location
function stringifyLocation(gene) {
  return gene.chromosome + ':' + gene.start + '-' + gene.stop;
}

const geneLocation = stringifyLocation(myGene);

console.log(geneLocation);
