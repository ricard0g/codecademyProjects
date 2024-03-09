// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let standDna = mockUpStrand();
console.log(`My stand DNA: ${standDna}`);

//factory function
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate(){
      let randomNum = Math.floor(Math.random() * 15);
      console.log(`The random base is ${this.dna[randomNum]}`);
      let returnedRandomBase = returnRandBase();
      console.log(`The random base returned is ${returnedRandomBase}`);

      if (this.dna[randomNum] !== returnedRandomBase) {
        this.dna[randomNum] = returnedRandomBase;
      } else if (this.dna[randomNum] === returnedRandomBase){
        do{
          returnedRandomBase = returnRandBase();
        }while(this.dna[randomNum] === returnedRandomBase);
        this.dna[randomNum] = returnedRandomBase;
      }

      console.log(`The new DNA base is ${this.dna[randomNum]}`);
      return this.dna;
    }
  }
}

let myDnaObj = pAequorFactory(3, standDna);
console.log(`My DNA object:\n\n{specimenNum:${myDnaObj.specimenNum},\nDNA: ${myDnaObj.dna}}\n`);
myDnaObj.mutate();
console.log(`Mutated DNA object:\n\n{specimenNum:${myDnaObj.specimenNum},\nMutated DNA: ${myDnaObj.dna}}\n`);