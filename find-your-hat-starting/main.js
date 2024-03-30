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
		this.width = arr[0].length;
		this.height = arr.length;
		this.quitPlaying = false;
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
			this.verticalPosition >= this.height ||
			this.horizontalPosition >= this.width
		) {
			console.log("\nYou're out of bounds! Game Lost\n");
			this.quitPlaying = true;
		} else if (this.horizontalPosition < 0 || this.verticalPosition < 0) {
			console.log("\nYou're out of bounds! Game Lost\n");
			this.quitPlaying = true;
		} else if (
			this.arr[this.verticalPosition][this.horizontalPosition] === hat
		) {
			console.log("\nCongrats! You found your hat!\n");
			this.quitPlaying = true;
		} else if (
			this.arr[this.verticalPosition][this.horizontalPosition] === hole
		) {
			console.log("\nOh shoot, You fell in a hole! You Lose!\n");
			this.quitPlaying = true;
		}
	}

    movePosition() {
        this.arr[this.verticalPosition][this.horizontalPosition] = pathCharacter;
    }

	play() {
		while (!this.quitPlaying) {
			this.print();
			// Input prompt

			const way = prompt("Which way?");

			switch (way.toLowerCase()) {
				case "r":
					this.horizontalPosition++;
					this.positionResult();
                    this.movePosition();
					break;

				case "l":
					this.horizontalPosition--;
					this.positionResult();
                    this.movePosition();
					break;

				case "u":
					this.verticalPosition--;
					this.positionResult();
                    this.movePosition();
					break;

				case "d":
					this.verticalPosition++;
					this.positionResult();
                    this.movePosition();
					break;

				case "q":
					this.quitPlaying = true;
					break;

				default:
					console.log("Enter a valid direction r/l/u/d");
					break;
			}
		}
	}

    static generateField(width, height, percentage) {
        let field = [];
        const numberOfHolesPerRow = Math.trunc((percentage / 100) * width);

        for(let i = 1; i <= height; i++){
            let emptyRow = [];

            for(let j = 1; j <= width; j++){
                emptyRow.push('');
            }

            let holesPositioned = 0;
            while(holesPositioned <= numberOfHolesPerRow){
                const holePosition = Math.floor(Math.random() * width);
                emptyRow[holePosition] = hole;
                holesPositioned++;
            }

            console.log(`After the holespositioned loop: ${emptyRow}`);

            for(let n = 0; n < emptyRow.length; n++){
                if(emptyRow[n] !== hole){
                    emptyRow[n] = fieldCharacter;
                    console.log('Field character added');
                }
            }

            console.log(`After for...of loop: ${emptyRow}`);

            field.push(emptyRow);
        }

        // Place the Hat
        let hatPosition = [Math.floor(Math.random() * field.length), Math.floor(Math.random() * field[0].length)];

        field[hatPosition[0]][hatPosition[1]] = hat;


        console.log(field);
        return field
    }
}

const myField = Field.generateField(9, 9, 50);

const newField = new Field(myField);

newField.play();