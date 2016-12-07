// AND: &&
// OR: ||
// NOT: !

const chromosome = myGene.chromosome;

if (organism === 'human' && chromosome === '17') {
  console.log('Possibly BRCA1');
}

if (chromosome === 'X' || chromosome === 'Y') {
  console.log('This is a sex chromosome');
}
