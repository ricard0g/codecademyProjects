const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(arr) {
		this.arr = arr;
		this.horizontalPosition = 0;
		this.verticalPosition = 0;
        this.quitPlaying = false
	}

	print() {
		let formattedArr = "";
		for (let i = 0; i < this.arr.length; i++) {
			formattedArr = formattedArr + `${this.arr[i].join("")}` + "\n";
		}

        console.log(`\n${formattedArr}\n`);
	}

	positionResult() {
		if (
			this.arr[this.verticalPosition][this.horizontalPosition] === hat
		) {
			console.log("\nCongrats! You found your hat!\n");
            this.quitPlaying = true;
		} else if (
			this.arr[this.horizontalPosition][this.verticalPosition] === hole
		) {
			console.log("\nOh shoot, You fell in a hole! You Lose!\n");
            this.quitPlaying = true;
		} else if (
			this.verticalPosition > this.arr.length ||
			this.horizontalPosition > this.arr[this.verticalPosition].length
		) {
			console.log("You're out of bounds! Game Lost");
            this.quitPlaying = true;
		} else if (this.horizontalPosition < 0 || this.verticalPosition < 0) {
			console.log(this.verticalPosition);
			console.log(this.horizontalPosition);
			console.log("You're out of bounds! Game Lost");
            this.quitPlaying = true;
		}
	}

    play() {
        let end = false;
		do {
            this.print()
			// Input prompt

			const way = prompt("Which way?");

			switch (way.toLowerCase()) {
				case "r":
					this.horizontalPosition++;
                    this.positionResult()
					break;

				case "l":
					this.horizontalPosition--;
					break;

				case "u":
					this.verticalPosition--;
					break;

				case "d":
					this.verticalPosition++;
					break;
                
                case "q":
                    end = true;
                    break;
                
                default:
                    console.log('Enter a valid direction r/l/u/d');
                    break;
			}
		} while (!this.quitPlaying);
    }
}

// Tests Instances

const newField = new Field([
	[pathCharacter, hat, fieldCharacter],
	[fieldCharacter, hole, hole],
	[fieldCharacter, fieldCharacter, hole],
]);

newField.play();