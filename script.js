function makeid(l) {
  // write your code here
	const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321";
	let char_length=character.length;
	let result = ' ';
	for(let i = 0; i <l; i++) {
            result += character.charAt(Math.floor(Math.random() * char_length));
        }
	return result;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
