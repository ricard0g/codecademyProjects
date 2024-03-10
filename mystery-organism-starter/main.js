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

//factory function
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate(){
      //Save in a variable the random number that's going to target the base in the array
      let randomNum = Math.floor(Math.random() * 15);
      console.log(`The random base is ${this.dna[randomNum]}`);
      //save in a variable the random base that will replace our current base located in the random number's position
      let returnedRandomBase = returnRandBase();
      console.log(`The random base returned is ${returnedRandomBase}`);

      /*
      Control flow evaluating two conditions:
      
      1) If the base dna in the random number's position is different from the returnedRandomBase value, this is replaced
      
      2) If they're the same. returnedRandomBase will be redeclared each time with a new random base until they're not the same. And then, our base dna in the array it's replaced
      */
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
    },
    compareDNA(arrDna){
      //Save in a variable the 'counter' sort to say. I saved in a fraction form because it's more intuitive for me at least
      let percentageFractionDna = 0/15;
      
      //index variable that will iterate over both arrays
      let i = 0;
      do{
        //if the element on both arrays are the same we add one to our percentageFractionDna variable. If they're not the same we print the message on the console to inform
        if(this.dna[i] === arrDna[i]){
          percentageFractionDna += 1/15;
        } else {
          console.log(`Control flow passes on iteration number ${i}`)
        }
        i++;
      } while(i < this.dna.length && i <= arrDna.length);

      console.log(`\n\n\nSpecimen #1 and specimen #2 have ${percentageFractionDna*100}% in common!\n\n\n`);
    },
    willLikelySurvive(){
      //I'll save in this array only those bases from the dna that are 'C' or 'G'
      let cAndGsArr = this.dna.filter(base => {
        return base === 'C' || base === 'G'
      });

      //by having the array with only Cs and Gs, I can divide the length of this array by the number of bases that all our DNA strands have (15), then multiply that result by 100, giving us a more visually appealing result
      if(((cAndGsArr.length/15)*100) >= 60){
        console.log(`\n\nIn this case it will survive with ${(cAndGsArr.length/15)*100}%.\n\n`)
        return true;
      } else {
        console.log(`\n\nIn this case it will not survive with ${(cAndGsArr.length/15)*100}%/\n\n`)
        return false;
      }
    },
    complementStrand(){
      //array that will save all the complementary bases to the DNA. Using .map() as iterator and the Switch statement to return the complementary opposite in each case
      let complementDna = this.dna.map(base => {
        switch(base){
          case 'A':
            return 'T';
          
          case 'T':
            return 'A';
          
          case 'C':
            return 'G';
          
          case 'G':
            return 'C';
        }
      });

      return complementDna;
    }
  }
}

//create a Number of pAequors. Number defined by us
const createpAequors = number => {
  let createdpAequors = 0;
  let pAequorArr = [];

  while(createdpAequors < number){
    let pAequor = pAequorFactory(createdpAequors, mockUpStrand());
    pAequorArr.push(pAequor);
    createdpAequors++;
  }

  return pAequorArr
}

//Tests

const pAequorTest1 = pAequorFactory(1, mockUpStrand());
const pAequorTest2 = pAequorFactory(2, mockUpStrand());
console.log(pAequorTest1);
console.log(pAequorTest2);

//compareDNA() method test
console.log(pAequorTest1.compareDNA(pAequorTest2.dna));

//willLikelySurvive() method test
console.log(pAequorTest2.willLikelySurvive());

//createpAequors() function test

let pAequorsArray = createpAequors(30);
console.log(pAequorsArray);

//complementStrand() method test

console.log(`\n\nHere are the original DNA strand and the Complementary one:\n\n--> Original\n\n${pAequorTest1.dna}\n\n--> Complementary\n\n${pAequorTest1.complementStrand()}\n\n`);