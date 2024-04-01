const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(arr) {
		this.arr = arr;
		this.verticalPosition = 0;
		this.horizontalPosition = 0;
		this.startingPointY = 0;
		this.startingPointX = 0;
		this.width = arr[0].length;
		this.height = arr.length;
		this.quitPlaying = false;
	}

	print() {
		// Inside formattedArr will be our string representation of our array
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

	checkStartingPosition() {
		// We have to redeclare the vertical and horizontal position values because when the constructor is called it defaults to "0"
		for(let i = 0; i < this.arr.length; i++){
			for (let j = 0; j < this.arr[i].length; j++){
				if (this.arr[i][j] === pathCharacter) {
					this.verticalPosition = i;
					this.horizontalPosition = j;
				}
			}
		}
	}

	movePosition() {
		this.arr[this.verticalPosition][this.horizontalPosition] = pathCharacter;
	}

	play() {
		// Redeclare from where we're going to start
		this.checkStartingPosition();

		while (!this.quitPlaying) {
			this.print();

			// Input prompt
			const way = prompt("Which way?");

			switch (way.toLowerCase()) {
				case "r":
					this.horizontalPosition++;
					this.positionResult();
					this.quitPlaying ? null : this.movePosition();
					break;

				case "l":
					this.horizontalPosition--;
					this.positionResult();
					this.quitPlaying ? null : this.movePosition();
					break;

				case "u":
					this.verticalPosition--;
					this.positionResult();
					this.quitPlaying ? null : this.movePosition();
					break;

				case "d":
					this.verticalPosition++;
					this.positionResult();
					this.quitPlaying ? null : this.movePosition();
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

		// Based on the percentage passed, to meet the percentage of holes in the field I distribute this percentage to each row of the field
		const numberOfHolesPerRow = Math.trunc((percentage / 100) * width);

		for (let i = 1; i <= height; i++) {
			let emptyRow = [];

			// Push empty strings to the row just to meet the number of elements in each row for then they be filled with the corresponding number of holes (based on percentage there will be more or less) and field characters

			for (let j = 1; j <= width; j++) {
				emptyRow.push("");
			}

			// holesPositioned will determine if the number of holes per row is met or not. Completely dependent on the numberOfHolesPerRow variable

			let holesPositioned = 0;
			while (holesPositioned <= numberOfHolesPerRow) {
				const holePosition = Math.floor(Math.random() * width);
				emptyRow[holePosition] = hole;
				holesPositioned++;
			}

			// After holes have been positioned we now fill the rest with fieldCharacters

			for (let n = 0; n < emptyRow.length; n++) {
				if (emptyRow[n] !== hole) {
					emptyRow[n] = fieldCharacter;
				}
			}

			// We push this newly created row into the field array

			field.push(emptyRow);
		}

		// Place the Hat. Randomly in any position of the field
		let hatPosition = [
			Math.floor(Math.random() * field.length),
			Math.floor(Math.random() * field[0].length),
		];

		field[hatPosition[0]][hatPosition[1]] = hat;

		// Place Starting Point. Randomly in any position of the field, making sure is not the same position as the hat

		this.startingPointY = Math.floor(Math.random() * field.length);
		this.startingPointX = Math.floor(Math.random() * field[0].length);

		while (field[this.startingPointY][this.startingPointX] === hat) {
			this.startingPointY = Math.floor(Math.random() * field.length);
			this.startingPointX = Math.floor(Math.random() * field[0].length);
		}

		field[this.startingPointY][this.startingPointX] = pathCharacter;

		return field;
	}
}


// Instances to test

const myField = Field.generateField(15, 15, 30);

const newField = new Field(myField);

newField.play();