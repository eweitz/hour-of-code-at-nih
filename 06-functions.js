// Functions group together statements to perform a task
function getBasicLocation(gene) {
  return gene.chromosome + ':' + gene.start + '-' + gene.stop;
}

const location = getBasicLocation(myGene);

console.log(location);
