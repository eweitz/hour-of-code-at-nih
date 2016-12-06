function getBasicLocation(gene) {
  return gene.chromosome + ':' + gene.start + '-' + gene.stop;
}

const location = getBasicLocation(myGene);

console.log(location);
