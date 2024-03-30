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
	}

	print() {
		let formattedArr = "";
		for (let i = 0; i < this.arr.length; i++) {
			formattedArr = formattedArr + `${this.arr[i].join("")}` + "\n";
		}
		console.log(formattedArr);

		// Input prompt

		const way = prompt("Which way?");

        way.toLowerCase();

        switch (way) {
            case 'r':
                this.horizontalPosition += 1;
                break;
            
            case 'l':
                this.horizontalPosition -= 1;
                break;
            
            case 'u':
                this.verticalPosition -= 1;
                break;
            
            case 'd':
                this.verticalPosition += 1;
                break;
        }
	}

    positionResult(){
        
    }
}

// Tests Instances

const newField = new Field([
	[pathCharacter, fieldCharacter, hole],
	[fieldCharacter, hole, hole],
	[fieldCharacter, fieldCharacter, hat],
]);

newField.print();